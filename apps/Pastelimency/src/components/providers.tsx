"use client";
import { ThemeProvider } from "next-themes";
import {
	AuthProvider,
	PreferencesProvider,
	PasteProvider,
	CollectionProvider,
	ModalProvider,
	ClipboardProvider,
} from "./context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
			<AuthProvider>
				<PreferencesProvider>
					<PasteProvider>
						<CollectionProvider>
							<ModalProvider>
								<ClipboardProvider>{children}</ClipboardProvider>
							</ModalProvider>
						</CollectionProvider>
					</PasteProvider>
				</PreferencesProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};
