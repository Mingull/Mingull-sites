import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import "@mingull/ui/globals.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Leckerli_One, Merriweather, Poppins, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import React from "react";
// import "@/app/globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });
const leckerliOne = Leckerli_One({ subsets: ["latin"], weight: "400", variable: "--font-special" });

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: { template: "%s - Mingull", default: "Niels Plug - Mingull" },
		description: "Personal website of Niels Plug",
	};
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="apple-mobile-web-app-title" content="Mingull" />
			</head>
			<body
				className={cn(
					"bg-background text-foreground flex min-h-screen flex-col font-sans antialiased",
					poppins.variable,
					merriweather.variable,
					robotoMono.variable,
					leckerliOne.variable,
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{/* <DefaultsProvider defaults={defaults}> */}
					<Providers>
						<Header />
						<main className="grow">
							{/* <div className="flex items-center justify-center pt-24">
								<div className="max-w-2xl">
								<Alert variant="warning">
								<TriangleAlert />
								<AlertTitle>Work in Progress</AlertTitle>
								<AlertDescription>
								This site is currently under construction. Some features may be unavailable
								or behave unexpectedly.
								<br />
								We&apos;re actively working on improvements — please check back soon.
								<br />
								Thanks for your patience and support!
								</AlertDescription>
								</Alert>
								</div>
								</div> */}
							{children}
						</main>
						<Footer />
					</Providers>
					{/* </DefaultsProvider> */}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
