"use client";
import { BetterOmit, cn } from "@mingull/lib";
import { CheckCircle, XCircle } from "lucide-react";
import { createContext, ReactNode, useContext } from "react";

export type Tier<T extends string = string> = {
	name: T;
	highlighted: boolean;
	callToAction?: ReactNode;
};

export type Feature<T extends string = string, C extends string = string> = {
	feature: string;
	category: C;
} & Record<T, boolean | string | ReactNode>;

type ComparisonContext = {
	tiers: Tier[];
	truefyIcon: ReactNode;
	falsyIcon: ReactNode;
};

const ComparisonContext = createContext<ComparisonContext | undefined>(undefined);

const useComparison = () => {
	const context = useContext(ComparisonContext);
	if (!context) {
		throw new Error("useComparison must be used within a ComparisonProvider");
	}
	return context;
};

export function Comparison({ tiers, truefyIcon, falsyIcon, ...props }: React.ComponentProps<"table"> & { tiers: Tier[]; truefyIcon?: ReactNode; falsyIcon?: ReactNode }) {
	return (
		<ComparisonContext.Provider value={{ tiers, truefyIcon: truefyIcon ?? <CheckCircle className="size-4" />, falsyIcon: falsyIcon ?? <XCircle className="size-4" /> }}>
			<table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]" {...props} />
		</ComparisonContext.Provider>
	);
}

export function ComparisonHeader({ children, ...props }: React.ComponentProps<"thead">) {
	return (
		<thead className="bg-background sticky top-0" {...props}>
			<tr className="*:py-4 *:text-left *:font-medium">
				<th className="lg:w-2/5"></th>
				{children}
			</tr>
		</thead>
	);
}
export function ComparisonHeadItem({
	name,
	callToAction,
	highlighted = false,
	...props
}: React.ComponentProps<"th"> & {
	name: string;
	callToAction?: ReactNode;
	highlighted?: boolean;
}) {
	const { tiers } = useComparison();

	if (tiers.length === 0) throw new Error("ComparisonHeadItem must be used within a Comparison with tiers defined");

	if (!tiers.some((tier) => tier.name === name)) throw new Error(`Tier with name "${name}" not found in Comparison tiers`);

	return (
		<th
			className={cn("space-y-3", {
				"bg-muted rounded-t-(--radius) px-4": highlighted,
			})}
			{...props}
		>
			<span className="block">{name}</span>
			{callToAction}
		</th>
	);
}

export function ComparisonContent({ ...props }: React.ComponentProps<"tbody">) {
	return <tbody className="text-caption text-sm" {...props} />;
}

export function ComparisonCategory({ name, icon, children, ...props }: React.ComponentProps<"tr"> & { name: string; icon?: ReactNode }) {
	const { tiers } = useComparison();
	return (
		<>
			<tr className="*:py-3 not-[&:first-child]:*:pt-8" {...props}>
				<td className="flex items-center gap-2 font-medium">
					{icon ? icon : null}
					<span>{name}</span>
				</td>
				{tiers.map((tier, idx) => (
					<td key={idx} className={cn({ "bg-muted border-none px-4": tier.highlighted })}></td>
				))}
			</tr>
			{children}
		</>
	);
}

export function ComparisonItem({ feature, ...props }: React.ComponentProps<"tr"> & { feature: Feature }) {
	const { tiers, falsyIcon, truefyIcon } = useComparison();
	return (
		<tr className="*:border-b *:py-3" {...props}>
			<td className="text-muted-foreground">{feature.feature}</td>
			{tiers.map((tier, tIdx) => (
				<td
					key={tIdx}
					className={cn("px-4", {
						"bg-muted border-none": tier.highlighted,
					})}
				>
					{feature[tier.name] === true ?
						truefyIcon
					: feature[tier.name] === false ?
						falsyIcon
					:	feature[tier.name]}
				</td>
			))}
		</tr>
	);
}

export const ComparisonFooter = ({ ...props }: BetterOmit<React.ComponentProps<"tfoot">, "children">) => {
	const { tiers } = useComparison();
	return (
		<tfoot {...props}>
			<tr className="*:py-6">
				<td></td>
				{tiers.map((tier, tIdx) => (
					<td key={tIdx} className={cn({ "bg-muted rounded-b-(--radius) border-none px-4": tier.highlighted })} />
				))}
			</tr>
		</tfoot>
	);
};
