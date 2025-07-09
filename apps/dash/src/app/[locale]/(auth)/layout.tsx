import { defaults } from "@/app/defaults";
import Providers from "@/components/providers";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import "@mingull/ui/globals.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playFair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
	title: defaults.TITLE,
	description: defaults.DESCRIPTION,
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
						<main className="grow">{children}</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
