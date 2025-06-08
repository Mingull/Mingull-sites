"use client";
import { Icon } from "@mingull/icons/icon";
import { Progress } from "@mingull/ui/comps/progress";
import { AngularIcon, NextJsIcon, NodeJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "@mingull/icons";

type Skill = {
	name: string;
	version?: string; // Latest version of the skill, if applicable
	experience: number; // Percentage of proficiency (0-100)
	years: number; // Years of experience
	icon: Icon; // Icon representing the skill
};

export default function Skills() {
	const skills: Skill[] = [
		{ name: "Typescript", version: "5.8.3", experience: 90, years: 3, icon: TypeScriptIcon },
		{ name: "React", version: "19.1.0", experience: 80, years: 2.5, icon: ReactIcon },
		{ name: "Next.js", version: "15.3.3", experience: 75, years: 1.5, icon: NextJsIcon },
		{ name: "Tailwind CSS", version: "4.1.8", experience: 85, years: 3, icon: TailwindIcon },
		{ name: "Node.js", version: "22.16.0", experience: 70, years: 2, icon: NodeJsIcon },
		{ name: "Angular", version: "19.0.0", experience: 20, years: 0.9, icon: AngularIcon },
	];
	return (
		<section className="pb-24">
			<h2 className="title mb-12">Vaardigheden</h2>

			<ul className="flex flex-col gap-4">
				{skills.map((skill) => (
					<Skill key={skill.name} {...skill} />
				))}
			</ul>
		</section>
	);
}

function Skill({ name, version, experience, years }: Skill) {
	// calculate years of experience based on the experience percentage
	const yearsString = calculateYearsOfExperience(years);
	return (
		<li className="flex flex-col">
			<div className="flex justify-between">
				<p>
					{name} <span className="text-muted-foreground font-light">v{version}</span>
				</p>
				<p className="text-muted-foreground font-light">{yearsString}</p>
			</div>
			<Progress value={experience} />
		</li>
	);
}

const calculateYearsOfExperience = (years: number): string => {
	const totalMonths = Math.round(years * 12);
	const yearsPart = Math.floor(totalMonths / 12);
	const monthsPart = totalMonths % 12;

	const yearStr = yearsPart > 0 ? `${yearsPart} ${yearsPart === 1 ? "Year" : "Years"}` : "";
	const monthStr = monthsPart > 0 ? `${monthsPart} ${monthsPart === 1 ? "Month" : "Months"}` : "";

	if (yearStr && monthStr) {
		return `${yearStr}, ${monthStr}`;
	}
	return yearStr || monthStr || "0 Months";
};
