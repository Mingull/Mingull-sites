import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { defaults } from "./defaults";

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
		<html lang="en">
			<body className={`${inter.variable} ${jetBrainsMono.variable} bg-muted antialiased`}>
				{/* Only show navbar if not on specific pages */}
				<Navbar hideOn={hideNavbar} />
				<main className="container mx-auto">{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
