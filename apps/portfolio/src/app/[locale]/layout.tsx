import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@mingull/ui/comps/alert";
import "@mingull/ui/globals.css";
import { TriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import React from "react";
// import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playFair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
	title: { template: "%s - Mingull", default: "Niels Plug - Mingull" },
	description: "Personal website of Niels Plug",
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
			<body
				className={cn(
					"bg-background text-foreground flex min-h-screen flex-col font-sans antialiased",
					inter.variable,
					playFair.variable,
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Header />
						<main className="grow">
							<div className="flex items-center justify-center pt-24">
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
							</div>
							{children}
						</main>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
