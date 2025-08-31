"use client";

import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef, useId, useMemo, useState } from "react";
import * as z from "zod/v4";

import { Button } from "./button.tsx";
import { Input } from "./input.tsx";
import { cn } from "@mingull/lib";

type Strength = {
	/**
	 * Color indicating whether the requirement is met
	 */
	color: string;
	/**
	 * Optional text description of the requirement
	 */
	text?: string;
};

type InputProps<R extends Requirement[] = Requirement[]> = {
	requirements?: R;
	onStrengthChange?: (strength: R["length"]) => Strength;
} & ComponentPropsWithoutRef<"input">;

export const AdvancedInput = forwardRef<HTMLInputElement, InputProps>(({ id, requirements, onStrengthChange, className, placeholder, ...props }, ref) => {
	const internalId = useId();
	const inputId = id || internalId;

	const [isVisible, setIsVisible] = useState<boolean>(false);
	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	const value = props.value?.toString() || "";

	const checkStrength = (pass: string) => {
		const _requirements: Requirement[] = requirements ?? [
			{ type: "min", value: 8, text: "At least 8 characters", flags: undefined },
			{ type: "max", value: 12, text: "At most 12 characters", flags: undefined },
			{ type: "regex", pattern: /[0-9]/, text: "At least 1 numbers", flags: undefined },
			{ type: "regex", pattern: /[a-z]/, text: "At least 1 lowercase letters", flags: undefined },
			{ type: "regex", pattern: /[A-Z]/, text: "At least 1 uppercase letter", flags: undefined },
		];

		return _requirements.map((req) => {
			if (req.type === "min") return { met: pass.length >= req.value, text: req.text, flags: req.flags };
			if (req.type === "max") return { met: pass.length <= req.value, text: req.text, flags: req.flags };
			if (req.type === "length") return { met: pass.length === req.value, text: req.text, flags: req.flags };
			if (req.type === "regex") return { met: req.pattern.test(pass), text: req.text, flags: req.flags };
			if (req.type === "includes") return { met: pass.includes(req.substring), text: req.text, flags: req.flags };
			if (req.type === "excludes") return { met: !pass.includes(req.substring), text: req.text, flags: req.flags };
			if (req.type === "startsWith") return { met: pass.startsWith(req.value), text: req.text, flags: req.flags };
			if (req.type === "endsWith") return { met: pass.endsWith(req.value), text: req.text, flags: req.flags };
			if (req.type === "noRepeats") {
				const match = pass.match(/(.)\1+/g);
				return { met: !match || match.every((r) => r.length < req.max), text: req.text, flags: req.flags };
			}
			return { met: false, text: "Unknown requirement" };
		});
	};

	const strength = checkStrength(value).filter((req) => !req.flags?.includes("hidden"));

	const strengthScore = useMemo(() => {
		return strength.filter((req) => req.met).length;
	}, [strength]);

	const getDefaultStrength = (strength: number) => {
		if (strength === 0) return { color: "bg-border", text: "Enter a password" };
		if (strength <= 1) return { color: "bg-red-500" };
		if (strength <= 2) return { color: "bg-orange-500", text: "Weak password" };
		if (strength === 3) return { color: "bg-amber-500", text: "Medium password" };
		return { color: "bg-emerald-500", text: "Strong password" };
	};

	const getStrength = onStrengthChange ?? getDefaultStrength;

	return (
		<div className={cn("group space-y-2", className)}>
			{/* Password input field with toggle visibility button */}
			<div className="relative">
				<Input
					ref={ref}
					id={inputId}
					className={"pe-9"}
					placeholder={placeholder}
					aria-describedby={`${inputId}-description`}
					{...props}
					type={
						props.type === "password" ?
							isVisible ?
								"text"
							:	"password"
						:	props.type
					}
				/>
				{props.type === "password" ?
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="text-muted-foreground/80 absolute right-0 top-1/2 -translate-y-1/2"
						onClick={() => setIsVisible((prevState) => !prevState)}
						aria-label={isVisible ? "Hide password" : "Show password"}
						aria-pressed={isVisible}
						aria-controls="password"
					>
						{isVisible ?
							<EyeOffIcon aria-hidden="true" />
						:	<EyeIcon aria-hidden="true" />}
					</Button>
				:	null}
			</div>

			<div className="hidden space-y-2 group-focus-within:block">
				{/* Password strength indicator */}
				<div
					className="bg-border mb-4 mt-3 h-1 w-full overflow-hidden rounded-full"
					role="progressbar"
					aria-valuenow={strengthScore}
					aria-valuemin={0}
					aria-valuemax={4}
					aria-label="Password strength"
				>
					<div className={`h-full ${getStrength(strengthScore).color} transition-all duration-500 ease-out`} style={{ width: `${(strengthScore / strength.length) * 100}%` }}></div>
				</div>

				{/* Password strength description */}
				<p id={`${id}-description`} className="text-foreground mb-2 text-sm font-medium">
					{getStrength(strengthScore).text}. Must contain:
				</p>

				{/* Password requirements list */}
				<ul className="space-y-1.5" aria-label="Password requirements">
					{strength.map((req, index) =>
						req.flags?.includes("hidden") ?
							null
						:	<li key={index} className="flex items-center gap-2">
								{req.met ?
									<CheckIcon size={16} className="text-emerald-500" aria-hidden="true" />
								:	<XIcon size={16} className="text-muted-foreground/80" aria-hidden="true" />}
								<span className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}>
									{req.text}
									<span className="sr-only">{req.met ? " - Requirement met" : " - Requirement not met"}</span>
								</span>
							</li>,
					)}
				</ul>
			</div>
		</div>
	);
});

type RequirementMin = { type: "min"; value: number; text: string };
type RequirementMax = { type: "max"; value: number; text: string };
type RequirementLength = { type: "length"; value: number; text: string };
type RequirementRegex = { type: "regex"; pattern: RegExp; text: string };
type RequirementIncludes = { type: "includes"; substring: string; text: string };
type RequirementExcludes = { type: "excludes"; substring: string; text: string };
type RequirementStartsWith = { type: "startsWith"; value: string; text: string };
type RequirementEndsWith = { type: "endsWith"; value: string; text: string };
type RequirementNoRepeats = { type: "noRepeats"; max: number; text: string };
type RequirementCustom = { type: "custom"; validate: (value: string) => boolean; text: string };

type RequirementFlags = "hidden";

type Requirement = (
	| RequirementMin
	| RequirementMax
	| RequirementLength
	| RequirementRegex
	| RequirementIncludes
	| RequirementExcludes
	| RequirementStartsWith
	| RequirementEndsWith
	| RequirementNoRepeats
	| RequirementCustom
) & {
	flags: RequirementFlags[] | undefined;
};

type KindFunc<K extends unknown> = <const V extends K, const T extends string>(value: V, text: T, flags?: RequirementFlags[]) => Requirement;

type RequirementFunc = (opts: {
	min: KindFunc<number>;
	max: KindFunc<number>;
	length: KindFunc<number>;
	regex: KindFunc<RegExp>;
	includes: KindFunc<string>;
	excludes: KindFunc<string>;
	startsWith: KindFunc<string>;
	endsWith: KindFunc<string>;
	noRepeats: KindFunc<number>;
	custom: KindFunc<(value: string) => boolean>;
}) => Requirement[];

/**
 * Define password requirements using a fluent API.
 * @example
 * ```ts
 *	const passwordRequirements = defineRequirements(({ min, max, regex }) => [
 *		min(8, "At least 8 characters"),
 *		max(20, "At most 20 characters"),
 *		regex(/[0-9]/, "At least 1 number"),
 *	]);
 */
export const defineRequirements = <T,>(func: RequirementFunc) => {
	return func({
		min: (value, text, flags) => ({ type: "min", value, text, flags }),
		max: (value, text, flags) => ({ type: "max", value, text, flags }),
		length: (value, text, flags) => ({ type: "length", value, text, flags }),
		regex: (pattern, text, flags) => ({ type: "regex", pattern, text, flags }),
		includes: (substring, text, flags) => ({ type: "includes", substring, text, flags }),
		excludes: (substring, text, flags) => ({ type: "excludes", substring, text, flags }),
		startsWith: (value, text, flags) => ({ type: "startsWith", value, text, flags }),
		endsWith: (value, text, flags) => ({ type: "endsWith", value, text, flags }),
		noRepeats: (max, text, flags) => ({ type: "noRepeats", max, text, flags }),
		custom: (validate, text, flags) => ({ type: "custom", validate, text, flags }),
	});
};

/**
 * Convert password requirements to a Zod schema.
 * @param requirements - Array of password requirements defined using {@link defineRequirements}.
 */
export const requirementsToSchema = (requirements: Requirement[]): z.ZodString => {
	let schema = z.string().trim();

	for (const req of requirements) {
		switch (req.type) {
			case "min":
				schema = schema.min(req.value, { error: req.text });
				break;
			case "max":
				schema = schema.max(req.value, { error: req.text });
				break;
			case "length":
				schema = schema.length(req.value, { error: req.text });
				break;
			case "regex":
				schema = schema.regex(req.pattern, { error: req.text });
				break;
			case "includes":
				schema = schema.includes(req.substring, { error: req.text });
				break;
			case "excludes":
				schema = schema.refine((val) => !val.includes(req.substring), { error: req.text });
				break;
			case "startsWith":
				schema = schema.startsWith(req.value, { error: req.text });
				break;
			case "endsWith":
				schema = schema.endsWith(req.value, { error: req.text });
				break;
			case "noRepeats":
				schema = schema.refine(
					(val) => {
						const match = val.match(/(.)\1+/g);
						return !match || match.every((grp) => grp.length <= req.max);
					},
					{ error: req.text },
				);
				break;
			case "custom":
				schema = schema.refine(req.validate, { error: req.text });
				break;
			default: {
				const _exhaustiveCheck: never = req;
				throw new Error(`Unknown requirement type: ${(req as Requirement).type}`);
			}
		}
	}
	return schema;
};
