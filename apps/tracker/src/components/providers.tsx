"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "@mingull/ui/comps/sonner";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			{/* @ts-expect-error Server Component */}
			<HydrationBoundary state={{}}>
				<ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange>
					{children}
					<ToastProvider />
				</ThemeProvider>
			</HydrationBoundary>
		</QueryClientProvider>
	);
}

function ToastProvider() {
	const { resolvedTheme } = useTheme();

	return <Toaster position="top-right" theme={resolvedTheme === "dark" ? "dark" : "light"} />;
}
