"use client";
// @ts-expect-error - This image path is correct, but TypeScript doesn't recognize it
import authorImage from "@/../public/images/authors/niels.jpg" with { type: "image/jpeg" };
import { useTypewriter } from "@mingull/ui/hooks";
import { motion as m } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Hero() {
	const t = useTranslations("hero");
	const typedText = useTypewriter(["Niels", "Mingull"], 100, 2500);
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
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			className="flex min-h-full w-full flex-col-reverse pb-12 md:flex-row md:items-center md:py-36 lg:gap-x-8"
			aria-label="Hero sectie Niels Plug"
		>
			{/* LEFT SIDE */}
			<m.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.4 }}
				className="flex w-full flex-col items-center text-center md:items-start md:text-left"
			>
				{/* TITLE */}
				<m.h1
					variants={fadeInItem}
					className="w-full font-serif text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
				>
					{t("title")}{" "}
					<span className="text-primary font-special inline-block">
						{typedText}
						<span className="animate-pulse">|</span>
					</span>
				</m.h1>

				{/* IMAGE (MOBILE ONLY) */}
				<div className="my-6 block md:hidden">
					<m.div
						variants={fadeInItem}
						className="border-primary relative mx-auto size-52 overflow-hidden rounded-2xl border-4 shadow-lg sm:size-60"
					>
						<Image
							src={authorImage}
							alt="Portretfoto van Niels Plug"
							fill
							className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
							priority
						/>
					</m.div>
				</div>

				{/* SUMMARY */}
				<m.p
					variants={fadeInItem}
					className="text-muted-foreground mt-4 max-w-2xl text-lg font-light leading-relaxed sm:text-xl"
				>
					<Balancer>{t("summary")}</Balancer>
				</m.p>

				{/* QUOTE */}
				<m.blockquote
					variants={fadeInItem}
					className="border-primary bg-primary/10 text-muted-foreground border-l-3 mt-4 px-2 py-1 font-mono text-base font-medium leading-tight"
				>
					{t("quote")}
				</m.blockquote>

				{/* CTA BUTTON */}
				<m.div variants={fadeInItem} className="mt-6">
					<Link
						href="#projects"
						className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-6 py-3 text-base font-semibold text-white shadow-md transition"
					>
						{t("cta")}
					</Link>
				</m.div>
			</m.div>

			{/* RIGHT SIDE (Desktop only) */}
			<div className="hidden w-full justify-center md:flex md:w-auto md:flex-col md:items-center">
				<m.div
					variants={fadeInItem}
					className="border-primary relative size-60 overflow-hidden rounded-2xl border-4 shadow-lg lg:size-80"
				>
					<Image
						src={authorImage}
						alt="Portretfoto van Niels Plug"
						fill
						className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
						priority
					/>
				</m.div>
				<m.p variants={fadeInItem} className="text-muted-foreground mt-4 text-center text-sm font-light">
					<Balancer>{t("student")}</Balancer>
				</m.p>
			</div>
		</section>
	);
}
