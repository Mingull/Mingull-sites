import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Pastebin Clone",
	description: "A minimal and modern Pastebin alternative",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	// List of routes where navbar should be hidden
	const hideNavbar = ["/auth/signin", "/auth/signup"];

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 antialiased`}>
				{/* Only show navbar if not on specific pages */}
				{<Navbar hideOn={hideNavbar} />}
				<main className="container mx-auto p-6">{children}</main>
			</body>
		</html>
	);
}
