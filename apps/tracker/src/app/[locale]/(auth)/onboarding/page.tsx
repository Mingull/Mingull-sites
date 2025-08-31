"use client";

import { OnboardingForm } from "@/components/forms/onboarding/form";
import { LanguageSelector } from "@/components/language-selector";
import { BackgroundBeams } from "@mingull/ui/comps/background-beams";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";

export default function OnboardingPage() {
	const t = useTranslations("onboarding");

	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr px-4 py-16">
			<div className="absolute right-4 top-4 z-20">
				<LanguageSelector />
			</div>
			<div className="relative z-10 w-full md:max-w-3xl">
				<div className="mb-12 text-center md:px-4 space-y-4">
					<h1 className="text-2xl font-extrabold tracking-tight md:text-4xl">{t("title")}</h1>
					<p className="text-muted-foreground mx-auto max-w-xl text-base md:text-lg">
						<Balancer dangerouslySetInnerHTML={{ __html: t.raw("description") }} />
					</p>
				</div>
				<OnboardingForm />
			</div>

			<BackgroundBeams />
		</section>
	);
}
