"use client";

import { useClickOutside } from "@mingull/ui/hooks/use-click-outside";
import { AnimatePresence, motion as m } from "motion/react";
import { SetStateAction, useEffect, useId, useRef, useState } from "react";
import { SkillNode, skills } from "./skills";
import "./skill.css";

export default function Skills() {
	const [active, setActive] = useState<(typeof skills)[number] | boolean | null>(null);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useClickOutside(ref, () => setActive(null));
	const isActiveSkill = active && typeof active === "object";
	return (
		<section className="pb-24">
			<h2 className="title mb-12">Vaardigheden</h2>

			<AnimatePresence>
				{isActiveSkill && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-10 h-full w-full bg-black/20"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isActiveSkill ?
					<div className="fixed inset-0 z-[100] grid place-items-center">
						<m.div
							layoutId={`card-${active.name}-${id}`}
							ref={ref}
							className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white sm:rounded-3xl md:h-fit md:max-h-[90%] dark:bg-neutral-900"
						>
							<m.div layoutId={`image-${active.name}-${id}`}>
								<active.icon className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80" />
							</m.div>

							<div>
								<div className="flex items-start justify-between p-4">
									<div className="">
										<m.h3
											layoutId={`title-${active.name}-${id}`}
											className="text-base font-medium text-neutral-700 dark:text-neutral-200"
										>
											{active.name}
										</m.h3>
										<m.p
											layoutId={`description-${active.summary}-${id}`}
											className="text-base text-neutral-600 dark:text-neutral-400"
										>
											{active.summary}
										</m.p>
									</div>

									{/* <m.a
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										href={active.ctaLink}
										target="_blank"
										className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
									>
										{active.ctaText}
									</m.a> */}
								</div>
								<div className="relative px-4 pt-4">
									<m.p className="text-sm text-neutral-600 dark:text-neutral-400">
										<strong>Version:</strong> {active.version}
									</m.p>
									<m.p className="text-sm text-neutral-600 dark:text-neutral-400">
										<strong>Experience:</strong> {active.experience} (
										{calculateYearsOfExperience(active.years)})
									</m.p>
									<m.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400"
									>
										{typeof active.content === "function" ? active.content() : active.content}
									</m.div>
								</div>
							</div>
						</m.div>
					</div>
				:	null}
			</AnimatePresence>
			<m.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="containerize">
				{skills.map((skill) => (
					<Skill key={skill.name} {...skill} setActive={setActive} id={id} />
				))}
			</m.ul>
		</section>
	);
}

function Skill({
	name,
	version,
	experience,
	years,
	icon,
	id,
	summary,
	content,
	setActive,
}: SkillNode & { id: string; setActive: (value: SetStateAction<boolean | SkillNode | null>) => void }) {
	const IconComponent = icon;
	return (
		<m.li
			layoutId={`card-${name}-${id}`}
			key={name}
			onClick={() => setActive({ name, version, experience, years, icon, summary, content })}
			className="item flex cursor-pointer flex-col rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
		>
			<div className="flex w-full flex-col gap-4">
				<m.div layoutId={`image-${name}-${id}`}>
					<IconComponent className="h-36 w-full rounded-lg object-cover object-top" />
				</m.div>
				<div className="flex flex-col items-center justify-center">
					<m.h3
						layoutId={`title-${name}-${id}`}
						className="text-center text-base font-medium text-neutral-800 md:text-left dark:text-neutral-200"
					>
						{name}
					</m.h3>
					<m.p
						layoutId={`description-${summary}-${id}`}
						className="text-center text-base text-neutral-600 md:text-left dark:text-neutral-400"
					>
						{summary}
					</m.p>
				</div>
			</div>
		</m.li>
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
