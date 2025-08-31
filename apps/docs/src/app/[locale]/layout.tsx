import Footer from "@/components/footer";
import { Header } from "@/components/new-header";
import { Providers } from "@/components/providers";
import { ConstantsProvider } from "@/constants/client";
import { routing } from "@/i18n/routing";
import { cn } from "@mingull/lib";
import "@mingull/ui/globals.css";
import type { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Leckerli_One, Merriweather, Poppins, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
// import "@/app/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-sans" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });
const leckerliOne = Leckerli_One({ subsets: ["latin"], weight: "400", variable: "--font-special" });

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: { template: "%s - Mingull", default: "Niels Plug - Mingull" },
	description: "Personal website of Niels Plug",
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: Locale | undefined }> }>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn("bg-background text-foreground flex min-h-screen flex-col font-sans antialiased", poppins.variable, merriweather.variable, robotoMono.variable, leckerliOne.variable)}>
				<NextIntlClientProvider locale={locale ?? routing.defaultLocale} messages={messages}>
					<ConstantsProvider>
						<Providers>
							<Header />
							<main className="grow">{children}</main>
							<Footer />
						</Providers>
					</ConstantsProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
