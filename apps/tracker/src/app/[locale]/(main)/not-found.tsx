"use client";
import { useConstants } from "@/constants/client";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
	const { ERROR_PAGES } = useConstants();
	return (
		<section className="py-24">
			<div className="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<div className="mx-auto max-w-max">
					<main className="sm:flex">
						<p className="text-muted-foreground text-4xl font-bold tracking-tight sm:text-5xl">{ERROR_PAGES.NOT_FOUND.code}</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:border-gray-200 sm:pl-6">
								<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h2>
								<p className="text-muted-foreground mt-1 text-base">{ERROR_PAGES.NOT_FOUND.text}</p>
							</div>
							<div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Link href="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-3 transition-colors">
									<ArrowLeftIcon className="h-5 w-5" />
									<span>Go back home</span>
								</Link>
							</div>
						</div>
					</main>
				</div>
			</div>
		</section>
	);
}
