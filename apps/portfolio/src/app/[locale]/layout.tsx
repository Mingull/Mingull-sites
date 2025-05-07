import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@mingull/ui/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
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
	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					"bg-background text-foreground flex min-h-screen flex-col font-sans antialiased",
					inter.variable,
					playFair.variable,
				)}
			>
				<NextIntlClientProvider>
					<Providers>
						<Header />
						<main className="grow">{children}</main>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
