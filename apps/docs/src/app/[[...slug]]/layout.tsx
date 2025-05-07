import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: { template: "%s - Mingull/docs", default: "Getting started - Mingull/docs" },
		description: "Personal website of Niels Plug",
	};
}

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
