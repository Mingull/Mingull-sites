"use client";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { useState } from "react";

export type Collection = {
	id: string;
	name: string;
	pastes: string[]; // Array of paste IDs
};

const { Provider, useFlexibleContext: useCollection } = createFlexibleContext<{
	collections: Collection[];
	setCollections: (collections: Collection[]) => void;
}>({ errorMessage: "useCollection must be used within a CollectionProvider" });

export const CollectionProvider = ({ children }: { children: React.ReactNode }) => {
	const [collections, setCollections] = useState<Collection[]>([]);

	return <Provider value={{ collections, setCollections }}>{children}</Provider>;
};

export { useCollection };
