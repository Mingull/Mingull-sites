import { type BetterOmit, cn } from "@mingull/lib";
import { useEffect, useRef, useState } from "react";

const TOKENS = [
	{ type: "day", symbols: ["d"] },
	{ type: "month", symbols: ["m"] },
	{ type: "year", symbols: ["y"] },
	{ type: "hour", symbols: ["h", "H"] },
	{ type: "minute", symbols: ["M"] },
	{ type: "second", symbols: ["s"] },
	{ type: "separator", symbols: ["/", "-", ":", " ", ",", "."] },
] as const;

type Tokens = (typeof TOKENS)[number];
type Segment = Tokens["type"];
type LiteralSegment = Segment | "literal";

function tokenize(format: string): { token: string; type: LiteralSegment }[] {
	const allSymbols = TOKENS.flatMap(({ type, symbols }) => symbols.map((s) => ({ type, symbol: s })));

	const out: { token: string; type: LiteralSegment }[] = [];
	let i = 0;

	while (i < format.length) {
		let matched: { type: Segment; symbol: string } | null = null;

		for (const entry of allSymbols) {
			if (format.startsWith(entry.symbol, i)) {
				matched = entry;
				break;
			}
		}

		if (!matched) {
			out.push({ token: format[i]!, type: "literal" });
			i++;
			continue;
		}

		const { type, symbol } = matched;

		if (type !== "separator") {
			let j = i;
			while (format.startsWith(symbol, j)) j += symbol.length;
			const count = (j - i) / symbol.length;
			out.push({ token: symbol.repeat(count), type });
			i = j;
		} else {
			out.push({ token: symbol, type });
			i += symbol.length;
		}
	}

	return out;
}

type CalendarRenderProps = {
	value: Date | null;
	onChange: (date: Date | null) => void;
	format: string;
	focused: boolean;
};

type DateInputProps<T extends string> = {
	format?: T;
	value?: Date;
	onChange?: (val: Date | null) => void;
	calendar?: {
		render: (props: CalendarRenderProps) => React.ReactNode;
		position?: "start" | "end";
	};
} & BetterOmit<React.InputHTMLAttributes<HTMLDivElement>, "children" | "onChange" | "onChangeCapture" | "value">;

export function DateInput<T extends string>({ format, value, onChange, calendar }: DateInputProps<T>) {
	const resolvedFormat = format ?? "dd/mm/yyyy, HH:MM:ss";
	const tokenized = tokenize(resolvedFormat);

	const isSegment = (t: { type: LiteralSegment }) => t.type !== "separator" && t.type !== "literal";
	const inputTokens = tokenized.filter(isSegment);

	const [parts, setParts] = useState<string[]>(() => (value ? splitDate(value, tokenized) : inputTokens.map(() => "")));
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
	const [focused, setFocused] = useState(false);

	useEffect(() => {
		if (value) {
			setParts(splitDate(value, tokenized));
		}
	}, [value, resolvedFormat]);

	const partIndexByTokenIdx: Array<number | null> = [];
	let p = 0;
	tokenized.forEach((t, i) => {
		if (isSegment(t)) partIndexByTokenIdx[i] = p++;
		else partIndexByTokenIdx[i] = null;
	});

	function splitDate(date: Date, tokenized: ReturnType<typeof tokenize>) {
		return tokenized
			.filter((t) => t.type !== "separator" && t.type !== "literal")
			.map((t) => {
				switch (t.type) {
					case "day":
						return String(date.getDate()).padStart(t.token.length, "0");
					case "month":
						return String(date.getMonth() + 1).padStart(t.token.length, "0");
					case "year":
						return String(t.token.length === 2 ? date.getFullYear() % 100 : date.getFullYear()).padStart(t.token.length, "0");
					case "hour":
						return String(date.getHours()).padStart(t.token.length, "0");
					case "minute":
						return String(date.getMinutes()).padStart(t.token.length, "0");
					case "second":
						return String(date.getSeconds()).padStart(t.token.length, "0");
					default:
						return "";
				}
			});
	}

	function assemble(newParts: string[]): Date | null {
		let day: number | null = null,
			month: number | null = null,
			year: number | null = null,
			hour: number | null = null,
			minute: number | null = null,
			second: number | null = null;

		let p = 0;
		for (const t of tokenized) {
			if (isSegment(t)) {
				const raw = newParts[p++];
				if (!raw || raw.length < t.token.length) {
					return null;
				}
				const val = parseInt(raw, 10);
				switch (t.type) {
					case "day":
						day = val;
						break;
					case "month":
						month = val;
						break;
					case "year":
						year = t.token.length === 2 ? 2000 + val : val;
						break;
					case "hour":
						hour = val;
						break;
					case "minute":
						minute = val;
						break;
					case "second":
						second = val;
						break;
				}
			}
		}

		if (day && month && year) {
			const d = new Date(year, (month ?? 1) - 1, day, hour ?? 0, minute ?? 0, second ?? 0);
			if (d.getFullYear() === year && d.getMonth() === (month ?? 1) - 1 && d.getDate() === day) {
				return d;
			}
		}
		return null;
	}

	function handleInputChange(idx: number, raw: string) {
		const maxLen = inputTokens[idx]?.token.length ?? 2;
		const prev = parts[idx] ?? "";
		const wasEmpty = prev.length === 0;

		let digits = raw.replace(/\D+/g, "");
		let didAutoPad = false;

		// EMPTY -> auto-pad once (e.g., "1" in "dd" becomes "01")
		if (wasEmpty && maxLen === 2 && digits.length === 1) {
			digits = digits.padStart(2, "0");
			didAutoPad = true;
		}

		// EXISTING -> overwrite (shift left), keep last maxLen digits
		const nextVal = wasEmpty ? digits.slice(0, maxLen) : digits.slice(-maxLen);

		const next = [...parts];
		next[idx] = nextVal;
		setParts(next);

		onChange?.(assemble(next));

		// Only auto-advance when full and NOT the auto-pad stroke
		if (!didAutoPad && nextVal.length === maxLen && idx < inputTokens.length - 1) {
			inputsRef.current[idx + 1]?.focus();
			inputsRef.current[idx + 1]?.select?.();
		}
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, idx: number) {
		if (e.key === "ArrowRight" && idx < inputTokens.length - 1) {
			e.preventDefault();
			inputsRef.current[idx + 1]?.focus();
		}
		if (e.key === "ArrowLeft" && idx > 0) {
			e.preventDefault();
			inputsRef.current[idx - 1]?.focus();
		}
		const target = e.currentTarget;
		if (e.key === "Backspace" && target.selectionStart === 0 && target.selectionEnd === 0 && idx > 0) {
			e.preventDefault();
			inputsRef.current[idx - 1]?.focus();
		}
	}

	return (
		<div
			className={cn(
				"border-input bg-input/30 ring-offset-background focus-within:ring-ring flex items-center rounded-md border px-3 py-1 font-mono text-sm focus-within:ring-2 focus-within:ring-offset-2",
			)}
			onFocus={() => setFocused(true)}
			onBlur={(e) => {
				if (!e.currentTarget.contains(e.relatedTarget as Node)) {
					setFocused(false);
				}
			}}
		>
			{calendar && calendar.position === "start" && (
				<span className="mr-2">
					{calendar.render({
						value: value ?? null,
						onChange: (d) => onChange?.(d),
						format: resolvedFormat,
						focused,
					})}
				</span>
			)}
			<div className="flex-1">
				{tokenized.map(({ token, type }, i) => {
					if (!isSegment({ type }))
						return (
							<span key={i} className={cn("text-muted-foreground select-none")}>
								{token}
							</span>
						);

					const idx = partIndexByTokenIdx[i]!;
					const maxLen = token.length;

					return (
						<input
							key={i}
							ref={(el) => {
								inputsRef.current[idx] = el;
							}}
							data-type={type}
							placeholder={token}
							className={cn("placeholder:text-muted-foreground focus:ring-ring flex-shrink-0 rounded-sm bg-transparent text-center focus:outline-none focus:ring-2")}
							style={{ width: `${maxLen}ch` }}
							inputMode="numeric"
							maxLength={maxLen + 1}
							value={parts[idx] ?? ""}
							onChange={(e) => handleInputChange(idx, e.target.value)}
							onKeyDown={(e) => handleKeyDown(e, idx)}
						/>
					);
				})}
			</div>
			{calendar && calendar.position === "end" && (
				<span className="ml-2">
					{calendar.render({
						value: value ?? null,
						onChange: (d) => onChange?.(d),
						format: resolvedFormat,
						focused,
					})}
				</span>
			)}
		</div>
	);
}
