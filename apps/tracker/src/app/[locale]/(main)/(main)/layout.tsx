import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: { template: "%s - Mingull", default: "Niels Plug - Mingull" },
		description: "Personal website of Niels Plug",
	};
};

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			<main className="grow">{children}</main>
			<Footer />
		</>
	);
}
