"use client";
import authorImage from "@/../public/images/authors/niels.jpg";
import Image from "next/image";
import { motion as m } from "motion/react";

export default function Intro() {
	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const fadeInItem = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};
	return (
		<section
			className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-8 pb-24 md:flex-row md:items-center lg:gap-x-16"
			aria-label="Introductie van Niels"
		>
			<m.div
				className="mt-2 flex-1 md:mt-0"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
			>
				<m.h1
					className="decoration-border/75 font-serif text-3xl font-bold no-underline decoration-2 underline-offset-8"
					variants={fadeInItem}
				>
					Hey, ik ben Niels
				</m.h1>
				<m.p className="text-muted-foreground mt-3 font-light" variants={fadeInItem}>
					Ik ben een enthousiaste webontwikkelaar in opleiding aan de Avans Hogeschool in Breda. Mijn passie
					ligt bij het bouwen van slimme, gebruiksvriendelijke webapplicaties en het continu verbeteren van
					mijn skills.
				</m.p>
				<m.p className="text-muted-foreground mt-3 font-light" variants={fadeInItem}>
					Ik leer graag bij, experimenteer met nieuwe technologieën en haal veel plezier uit het oplossen van
					technische uitdagingen.
				</m.p>
				<m.p className="text-muted-foreground mt-3 font-light" variants={fadeInItem}>
					Als ik niet aan het coderen ben, game ik, hak ik op een festival of verdwijn ik in video’s waarvan
					ik geen idee heb hoe ik daar kwam.
				</m.p>
				<m.blockquote
					className="text-muted-foreground border-border mt-6 border-l-4 pl-4 italic"
					variants={fadeInItem}
				>
					Altijd nieuwsgierig, altijd in ontwikkeling.
				</m.blockquote>
			</m.div>
			<m.div
				animate={{
					opacity: 1,
					scale: 1,
				}}
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				className="relative mx-auto md:mx-0"
			>
				<Image
					className="size-48 flex-1 rounded-lg object-cover grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0"
					src={authorImage}
					alt="Portretfoto van Niels Plug tijdens een evenement"
					width={175}
					height={175}
					priority
				/>
			</m.div>
		</section>
	);
}
