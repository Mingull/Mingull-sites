import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import { Toaster } from "@mingull/ui/components/sonner";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { defaults } from "./defaults";
import "@mingull/ui/globals.css";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
	display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: defaults.TITLE,
	description: defaults.DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	// List of routes where navbar should be hidden
	const hideNavbar = ["/signin", "/signup"];

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetBrainsMono.variable} bg-muted h-screen antialiased`}>
				<Providers>
					<Navbar hideOn={hideNavbar} />
					<main className="container mx-auto h-[calc(100%-4.5rem)]">{children}</main>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
