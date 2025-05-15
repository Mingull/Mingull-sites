"use client";
import { defaults } from "@/app/defaults";
import { Button } from "@mingull/ui/comps";
import Link from "next/link";

export default function Home() {
	return (
		<main className="mx-auto flex min-h-screen w-1/2 flex-col items-center justify-center space-y-12">
			<h1 className="text-5xl font-bold">{defaults.TITLE}</h1>
			<p className="text-muted-foreground text-center text-lg">{defaults.DESCRIPTION}</p>
			<div className="mt-4 flex gap-4">
				<Button asChild>
					<Link href={"/signin"}>Sign In</Link>
				</Button>
				<Button variant={"secondary"}>
					<Link href={"/signup"}>Sign Up</Link>
				</Button>
			</div>
		</main>
	);
}
