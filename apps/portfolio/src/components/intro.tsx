"use client";
//@ts-expect-error
import authorImage from "@/../public/images/authors/niels.jpg";
import Image from "next/image";

export default function Intro() {
	return (
		<section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
			<div className="mt-2 flex-1 md:mt-0">
				<h1 className="decoration-border/75 font-serif text-3xl font-bold no-underline decoration-2 underline-offset-8">
					Hey, ik ben Niels
				</h1>
				<p className="text-muted-foreground mt-3 font-light">
					Ik ben student webontwikkelaar aan de Avans Hogeschool in Breda. Ik hou ervan om dingen voor het web
					te bouwen en elke dag nieuwe dingen te leren.
				</p>
			</div>
			<div className="relative">
				<Image
					className="size-48 flex-1 rounded-lg object-cover grayscale"
					src={authorImage}
					alt="Niels Plug"
					width={175}
					height={175}
					priority
				/>
			</div>
		</section>
	);
}
