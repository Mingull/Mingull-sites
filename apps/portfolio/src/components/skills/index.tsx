"use client";

import { getSkills } from "@/data/skills/get-skills";
import { skillSchema } from "@/schemas/skills";
import { getIcon, type Icon } from "@mingull/icons";
import { cn } from "@mingull/lib";
import { buttonVariants } from "@mingull/ui/comps/button";
import { useClickOutside } from "@mingull/ui/hooks";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion as m } from "motion/react";
import { SetStateAction, useEffect, useId, useRef, useState } from "react";
import { z } from "zod";
import "./skill.css";
import { useLocale, useTranslations } from "next-intl";

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.2 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const calculateYearsOfExperience = (years: number): string => {
	const months = Math.round(years * 12);
	const y = Math.floor(months / 12);
	const m = months % 12;
	return (
		[y && `${y} ${y === 1 ? "Year" : "Years"}`, m && `${m} ${m === 1 ? "Month" : "Months"}`]
			.filter(Boolean)
			.join(", ") || "0 Months"
	);
};

export default function Skills() {
	const locale = useLocale();
	const { data: skills, isPending } = useQuery({ queryKey: ["skills"], queryFn: () => getSkills(locale) });
	const [active, setActive] = useState<z.infer<typeof skillSchema> | boolean | null>(null);
	const [ActiveIcon, setActiveIcon] = useState<Icon | null>(null);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);
	const t = useTranslations("nav.skills");
	const isActiveSkill = active && typeof active === "object";

	useClickOutside(ref, () => setActive(null));

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setActive(false);
		window.addEventListener("keydown", onKeyDown);

		document.body.style.overflow = isActiveSkill ? "hidden" : "auto";

		isActiveSkill && active.icon ?
			(async () => {
				const Icon = await getIcon(active.icon);
				setActiveIcon(() => Icon);
			})()
		:	setActiveIcon(null);

		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isActiveSkill, active]);

	return (
		<section className="pb-24" id="skills">
			<h2 className="title mb-12">{t("title")}</h2>

			{/* Overlay */}
			<AnimatePresence>
				{isActiveSkill && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isActiveSkill && ActiveIcon ?
					<div className="fixed inset-0 z-[100] grid place-items-center">
						<m.button
							key={`button-${active.name}-${id}`}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.05 } }}
							className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</m.button>

						<m.div
							layoutId={`card-${active.name}-${id}`}
							ref={ref}
							className="bg-card flex h-full w-full max-w-[500px] flex-col overflow-hidden pt-6 sm:rounded-3xl md:h-fit md:max-h-[90%]"
						>
							<m.div layoutId={`image-${active.name}-${id}`}>
								<ActiveIcon className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-96" />
							</m.div>
							<div>
								<div className="flex items-start justify-between p-4">
									<div>
										<m.h3
											layoutId={`title-${active.name}-${id}`}
											className="dark:text-foreground text-base font-medium text-neutral-700"
										>
											{active.name}
										</m.h3>
										<m.p
											layoutId={`description-${active.summary}-${id}`}
											className="dark:text-muted-foreground text-base text-neutral-600"
										>
											{active.summary}
										</m.p>
										<m.p layout className="dark:text-muted-foreground text-sm text-neutral-600">
											{t("version", { version: active.version })}
										</m.p>
										<m.p layout className="dark:text-muted-foreground text-sm text-neutral-600">
											<strong>Experience:</strong> {calculateYearsOfExperience(active.years)}
										</m.p>
									</div>
									<m.a
										layoutId={`cta-${active.cta.text}-${id}`}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										href={active.cta.link}
										target="_blank"
										className={buttonVariants({ size: "sm" })}
									>
										{active.cta.text}
									</m.a>
								</div>
								<div className="relative px-4 pt-4">
									<m.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400"
									>
										{active.content}
									</m.div>
								</div>
							</div>
						</m.div>
					</div>
				:	null}
			</AnimatePresence>

			{/* Skills List */}
			{!isPending && skills ?
				<m.ul
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="containerize"
				>
					{skills.map((skill) => (
						<Skill key={skill.name} {...skill} setActive={setActive} id={id} />
					))}
				</m.ul>
			:	<p className="text-muted-foreground text-center">Loading skills...</p>}
		</section>
	);
}

const Skill = ({
	setActive,
	id,
	...skill
}: z.infer<typeof skillSchema> & {
	id: string;
	setActive: (value: SetStateAction<boolean | z.infer<typeof skillSchema> | null>) => void;
}) => {
	const [IconComponent, setIconComponent] = useState<Icon | null>(null);

	useEffect(() => {
		if (skill.icon) {
			(async () => {
				const Icon = await getIcon(skill.icon);
				setIconComponent(() => Icon);
			})();
		}
	}, [skill.icon]);

	return (
		<m.li
			variants={itemVariants}
			layoutId={`card-${skill.name}-${id}`}
			onClick={() => setActive(skill)}
			className="item bg-card text-card-foreground dark:hover:bg-primary/5 dark:hover:text-primary-foreground hover:bg-primary/5 hover:border-primary focus-within:border-primary focus-within:bg-primary/5 flex cursor-pointer flex-col gap-6 rounded-xl border p-4 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
			aria-label="Click to view skill details"
			aria-labelledby={`title-${skill.name}-${id}`}
			aria-describedby={`description-${skill.summary}-${id}`}
		>
			<a href={`#${skill.name}`} className="sr-only">
				{skill.name} - {skill.summary}
			</a>
			<div className="flex w-full flex-col gap-4">
				{IconComponent && (
					<m.div layoutId={`image-${skill.name}-${id}`}>
						<IconComponent className="h-36 w-full rounded-lg object-cover object-top" />
					</m.div>
				)}
				<div className="flex flex-col items-center justify-center">
					<m.h3
						layoutId={`title-${skill.name}-${id}`}
						className="text-foreground text-center text-base font-medium"
					>
						{skill.name}
					</m.h3>
					<m.p
						layoutId={`description-${skill.summary}-${id}`}
						className="text-muted-foreground text-center text-base"
					>
						{skill.summary}
					</m.p>
					<m.a
						layoutId={`cta-${skill.cta.text}-${id}`}
						href={skill.cta.link}
						target="_blank"
						className={cn(buttonVariants({ size: "sm", className: "hidden" }))}
					>
						{skill.cta.text}
					</m.a>
				</div>
			</div>
		</m.li>
	);
};

const CloseIcon = () => (
	<m.svg
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0, transition: { duration: 0.05 } }}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="h-4 w-4 text-black"
	>
		<path d="M18 6L6 18M6 6l12 12" />
	</m.svg>
);
