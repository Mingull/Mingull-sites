"use client";

import { BetterOmit, cn } from "@mingull/lib";
import { cva, type VariantProps } from "class-variance-authority";
import React, { createContext, Dispatch, HTMLAttributes, InputHTMLAttributes, KeyboardEvent, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "./button.tsx";
import { Locale } from "next-intl";

const dateInputVariants = cva(
	"dark:bg-input/30 border border-input shadow-xs flex h-9 min-w-0 rounded-md bg-transparent px-2 py-2 text-base outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive items-center gap-2",
	{
		variants: {
			size: {
				default: "h-10",
				sm: "h-8 text-sm",
				lg: "h-12 text-lg",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

export type InputType = "date" | "datetime";

export type DateType = "day" | "month" | "year";
export type TimeType = "hour" | "minute" | "second";

export type DateTimeType = DateType | TimeType;

export type DateInputValue = Date | number | string | undefined;

export type DateTimeParts<V extends string | number> = Record<DateTimeType, V>;

export type DateInputContextValue = {
	type: InputType;
	date: DateTimeParts<string>;
	maxLength: DateTimeParts<number>;
	refs: Record<DateTimeType, React.RefObject<HTMLInputElement | null>>;
	locale: DateInputLocale;
	setDate: Dispatch<SetStateAction<DateTimeParts<string>>>;
	focusSegment: (field: DateTimeType) => void;
	onSegmentChange: (field: DateTimeType, value: string, shouldPad?: boolean) => void;
};

const DateInputContext = createContext<DateInputContextValue | null>(null);

export function useDateInput() {
	const ctx = useContext(DateInputContext);
	if (!ctx) throw new Error("DateInputSegment must be used within DateInput");
	return ctx as DateInputContextValue;
}

export type DateInputProps<T extends InputType> = BetterOmit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> &
	VariantProps<typeof dateInputVariants> & {
		children?: ReactNode;
		type?: T;
		value?: DateInputValue;
		onChange?: (value?: Date) => void;
		locale?: DateInputLocale;
	};

const MAX_LENGTHS: DateTimeParts<number> = { day: 2, month: 2, year: 4, hour: 2, minute: 2, second: 2 };

export function DateInput({ type = "date", locale, className, children, size, value, onChange, ...props }: DateInputProps<InputType>) {
	const [date, setDate] = useState<DateTimeParts<string>>({ day: "", month: "", year: "", hour: "", minute: "", second: "" });

	const parseDateTimeValue = (val: DateInputValue): DateTimeParts<string> => {
		if (val instanceof Date && !isNaN(val.getTime())) {
			return {
				day: String(val.getDate()).padStart(2, "0"),
				month: String(val.getMonth() + 1).padStart(2, "0"),
				year: String(val.getFullYear()),
				hour: String(val.getHours()).padStart(2, "0"),
				minute: String(val.getMinutes()).padStart(2, "0"),
				second: String(val.getSeconds()).padStart(2, "0"),
			};
		}
		if (typeof val === "number") return parseDateTimeValue(new Date(val));
		return { day: "", month: "", year: "", hour: "", minute: "", second: "" };
	};

	const refs = {
		day: useRef<HTMLInputElement | null>(null),
		month: useRef<HTMLInputElement | null>(null),
		year: useRef<HTMLInputElement | null>(null),
		hour: useRef<HTMLInputElement | null>(null),
		minute: useRef<HTMLInputElement | null>(null),
		second: useRef<HTMLInputElement | null>(null),
	};

	const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

	const padSegment = (field: DateTimeType, val: string) => {
		const len = MAX_LENGTHS[field];
		if (!val) return val;
		return val.length < len ? val.padStart(len, "0") : val;
	};

	const onSegmentChange = (field: keyof DateTimeParts<string>, raw: string, shouldPad = false) => {
		let cleaned = raw.replace(/\D/g, "");

		if (field === "day" && cleaned.length >= MAX_LENGTHS[field]) cleaned = String(clamp(Number(cleaned), 1, 31)).padStart(2, "0");
		if (field === "month" && cleaned.length >= MAX_LENGTHS[field]) cleaned = String(clamp(Number(cleaned), 1, 12)).padStart(2, "0");
		if (field === "year" && cleaned.length > MAX_LENGTHS[field]) cleaned = cleaned.slice(0, 4);
		if (field === "hour" && cleaned.length >= MAX_LENGTHS[field]) cleaned = String(clamp(Number(cleaned), 0, 23)).padStart(2, "0");
		if (field === "minute" && cleaned.length >= MAX_LENGTHS[field]) cleaned = String(clamp(Number(cleaned), 0, 59)).padStart(2, "0");
		if (field === "second" && cleaned.length >= MAX_LENGTHS[field]) cleaned = String(clamp(Number(cleaned), 0, 59)).padStart(2, "0");

		if (shouldPad && cleaned.length > 0) {
			cleaned = padSegment(field, cleaned);
		}

		setDate((prev) => {
			const updated = { ...prev, [field]: cleaned };

			const hasDate = updated.day.length === MAX_LENGTHS.day && updated.month.length === MAX_LENGTHS.month && updated.year.length === MAX_LENGTHS.year;

			if (type === "datetime") {
				if (hasDate) {
					const d = new Date(
						Number(updated.year),
						Number(updated.month) - 1,
						Number(updated.day),
						updated.hour ? Number(updated.hour) : 0,
						updated.minute ? Number(updated.minute) : 0,
						updated.second ? Number(updated.second) : 0,
					);

					onChange?.(!isNaN(d.getTime()) ? d : undefined);
				} else {
					onChange?.(undefined);
				}
			} else {
				if (hasDate) {
					const d = new Date(Number(updated.year), Number(updated.month) - 1, Number(updated.day));

					onChange?.(!isNaN(d.getTime()) ? d : undefined);
				} else {
					onChange?.(undefined);
				}
			}

			return updated;
		});
	};

	const focusSegment = useCallback(
		(field: keyof DateTimeParts<string>) => {
			refs[field].current?.focus();
		},
		[refs],
	);
	return (
		<DateInputContext.Provider
			value={{
				type,
				date,
				refs,
				maxLength: MAX_LENGTHS,
				locale: locale ?? dateLocales["nl"]!,
				setDate,
				onSegmentChange,
				focusSegment,
			}}
		>
			<div className={cn(dateInputVariants({ size, className }))} {...props}>
				{children ?
					children
				: type === "date" ?
					"Select Date"
				:	"Select Date and Time"}
			</div>
		</DateInputContext.Provider>
	);
}

export interface DateInputSegmentProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
	type: DateType | DateTimeType;
}

export function DateInputSegment({ type, className, placeholder, ...props }: DateInputSegmentProps) {
	const { type: contextType, date, refs, maxLength, onSegmentChange, focusSegment } = useDateInput();

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace" && !date[type]) {
			if (type === "month") focusSegment("day");
			if (type === "year") focusSegment("month");
			if (type === "hour" && contextType === "datetime") focusSegment("year");
			if (type === "minute" && contextType === "datetime") focusSegment("hour");
			if (type === "second" && contextType === "datetime") focusSegment("minute");
		}
		if (e.key === "ArrowLeft") {
			if (type === "month") focusSegment("day");
			if (type === "year") focusSegment("month");
			if (type === "hour" && contextType === "datetime") focusSegment("year");
			if (type === "minute" && contextType === "datetime") focusSegment("hour");
			if (type === "second" && contextType === "datetime") focusSegment("minute");
		}
		if (e.key === "ArrowRight") {
			if (type === "day") focusSegment("month");
			if (type === "month") focusSegment("year");
			if (type === "year" && contextType === "datetime") focusSegment("hour");
			if (type === "hour" && contextType === "datetime") focusSegment("minute");
			if (type === "minute" && contextType === "datetime") focusSegment("second");
		}
		if (e.key === "ArrowUp") {
			onSegmentChange(type, String(Number(date[type] || 0) + 1));
		}
		if (e.key === "ArrowDown") {
			onSegmentChange(type, String(Number(date[type] || 0) - 1));
		}
		if (e.key === "Home") {
			focusSegment("day");
		}
	};

	const handleChange = (val: string) => {
		onSegmentChange(type, val);

		if (val.replace(/\D/g, "").length >= maxLength[type]) {
			onSegmentChange(type, val, true);

			if (type === "day") focusSegment("month");
			if (type === "month") focusSegment("year");
			if (type === "year") focusSegment("hour");
			if (type === "hour" && contextType === "datetime") focusSegment("minute");
			if (type === "minute" && contextType === "datetime") focusSegment("second");
		}
	};

	return (
		<input
			ref={refs[type]}
			type="text"
			inputMode="numeric"
			placeholder={
				placeholder ??
				(type === "year" ? "yyyy"
				: type === "month" ? "mm"
				: type === "day" ? "dd"
				: contextType === "datetime" && (type === "hour" || type === "minute" || type === "second") ? "--"
				: "--")
			}
			aria-label={
				type === "day" ? "Day"
				: type === "month" ?
					"Month"
				: type === "year" ?
					"Year"
				:	type
			}
			className={cn(
				"focus:border-ring focus:ring-ring min-w-2 rounded bg-transparent px-0 text-center outline-none focus:ring-1",
				{
					"w-10": type === "year",
					"w-9": type === "month",
					"w-8": type === "day" || type === "hour" || type === "minute" || type === "second",
					"text-muted-foreground": !date[type],
				},
				className,
			)}
			value={
				date[type] ||
				(!date[type] && type === "year" ? "yyyy"
				: !date[type] && type === "month" ? "mm"
				: !date[type] && type === "day" ? "dd"
				: !date[type] && contextType === "datetime" && (type === "hour" || type === "minute" || type === "second") ? "--"
				: "--")
			}
			onFocus={(e) => {
				e.target.value =
					date[type] ||
					(!date[type] && type === "year" ? "yyyy"
					: !date[type] && type === "month" ? "mm"
					: !date[type] && type === "day" ? "dd"
					: !date[type] && contextType === "datetime" && (type === "hour" || type === "minute" || type === "second") ? "--"
					: "--");
			}}
			onBlur={(e) => {
				const raw = e.target.value.replace(/\D/g, "");
				if (raw && raw.length < maxLength[type]) {
					onSegmentChange(type, raw, true);
				}
				if (!date[type]) {
					e.target.value =
						type === "year" ? "yyyy"
						: type === "month" ? "mm"
						: type === "day" ? "dd"
						: contextType === "datetime" && (type === "hour" || type === "minute" || type === "second") ? "--"
						: "--";
				}
			}}
			onChange={(e) => handleChange(e.target.value)}
			onKeyDown={handleKeyDown}
			{...props}
		/>
	);
}

export type DateInputSegmentsProps = {
	/**
	 * Whether to include the seconds segment.
	 * @default false
	 */
	seconds?: boolean;
};

export function DateInputSegments({ seconds = false }: DateInputSegmentsProps) {
	const { type, locale } = useDateInput();
	const extractDateFormat = (locale: DateInputLocale) => {
		const [dateFormat] = locale.format;
		return dateFormat.split(locale.date).map((part) => part.trim());
	};

	const extractTimeFormat = (locale: DateInputLocale) => {
		const [, timeFormat] = locale.format;
		return timeFormat
			.split(locale.time)
			.filter((part) => !(part === "ss" && !seconds))
			.map((part) => part.trim());
	};

	console.log({ dateFormat: locale ? extractDateFormat(locale) : undefined });

	return (
		<>
			<DateInputSegmentGroup type="date">
				{extractDateFormat(locale).map((part, index) => (
					<DateInputSegment
						type={
							part === "dd" ? "day"
							: part === "mm" ?
								"month"
							:	"year"
						}
						key={index}
						placeholder={part}
					/>
				))}
			</DateInputSegmentGroup>
			{type === "datetime" ?
				<DateInputSegmentGroup type="time">
					{extractTimeFormat(locale).map((part, index) => (
						<DateInputSegment
							type={
								part === "hh" ? "hour"
								: part === "mm" ?
									"minute"
								:	"second"
							}
							key={index}
							placeholder={part}
						/>
					))}
				</DateInputSegmentGroup>
			:	null}
		</>
	);
}

export function DateInputSegmentGroup({ type, children }: { type: "date" | "time"; children: React.ReactNode }) {
	const { locale } = useDateInput();
	const [nodes, setNodes] = useState<ReactNode[]>([]);

	useEffect(() => {
		setNodes(React.Children.toArray(children));
	}, [children]);

	return (
		<div className={cn("flex items-center")} role="group" aria-roledescription={type === "date" ? "Date input group" : "DateTime input group"}>
			{/* check if <DateInputSeparator /> is used else loop through the nodes and add <DateInputSeparator /> components */}
			{!nodes.includes(<DateInputSeparator />) ?
				nodes.map((node, index) => {
					if (React.isValidElement(node) && node.type === DateInputSegment) {
						return (
							<React.Fragment key={index}>
								{React.cloneElement(node)}
								{index < nodes.length - 1 && <DateInputSeparator>{type === "date" ? locale.date : locale.time}</DateInputSeparator>}
							</React.Fragment>
						);
					}
					return null;
				})
			:	nodes}
		</div>
	);
}

type DateInputButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

export function DateInputButton({ className, ...props }: DateInputButtonProps) {
	return <Button className={cn("ml-auto border-y-0 border-r-0", className)} {...props} />;
}

export function DateInputSeparator({ className, children }: { className?: string; children?: React.ReactNode }) {
	return <span className={cn("text-muted-foreground", className)}>{children}</span>;
}

type DateInputLocale = {
	date: string;
	time: string;
	format: [string, string];
};

export const dateLocales: Record<"nl" | "en-US" | "en-GB", DateInputLocale> = {
	nl: {
		date: "-",
		time: ":",
		format: ["dd-mm-yyyy", "HH:mm:ss"],
	},
	"en-GB": {
		date: "/",
		time: ":",
		format: ["dd/mm/yyyy", "HH:mm:ss"],
	},
	"en-US": {
		date: "/",
		time: ":",
		format: ["mm/dd/yyyy", "HH:mm:ss"],
	},
} as const;
