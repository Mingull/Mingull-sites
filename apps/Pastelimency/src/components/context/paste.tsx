"use client";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { useState } from "react";

type Paste = {
	title: string;
	content: string;
	language: string;
	visibility: "public" | "unlisted" | "private";
};

const { Provider, useFlexibleContext: usePaste } = createFlexibleContext<{
	paste: Paste;
	setPaste: (paste: Paste) => void;
}>({ errorMessage: "usePaste must be used within a PasteProvider" });

export const PasteProvider = ({ children }: { children: React.ReactNode }) => {
	const [paste, setPaste] = useState<Paste>({
		title: "",
		content: "",
		language: "plaintext",
		visibility: "private",
	});

	return <Provider value={{ paste, setPaste }}>{children}</Provider>;
};

export { usePaste };
