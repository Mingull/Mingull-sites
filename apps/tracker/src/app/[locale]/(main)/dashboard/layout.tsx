import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { redirect } from "@/i18n/navigation";
import { auth } from "@mingull/auth";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@mingull/ui/comps/breadcrumb";
import { Separator } from "@mingull/ui/comps/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@mingull/ui/comps/sidebar";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: { template: "%s - Mingull", default: "Niels Plug - Mingull" },
		description: "Personal website of Niels Plug",
	};
};

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const locale = await getLocale();
	const session = await auth.api.getSession({ headers: await headers() });

	if (!session || !session?.user) return redirect({ href: "/sign-in", locale });
	// if (!session?.user.onboardedAt) return redirect({ href: "/onboarding", locale });

	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "19rem",
				} as React.CSSProperties
			}
		>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<main className="grow">{children}</main>
				<footer className="text-muted-foreground py-2 text-center text-xs">Repulse v1.0.0 • Powered by Mingull ⚡</footer>
			</SidebarInset>
		</SidebarProvider>
	);
}
