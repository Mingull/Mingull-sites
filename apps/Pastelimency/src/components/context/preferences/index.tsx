"use client";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { useState } from "react";
import { defaultPreferences } from "./preferences";
import { Preference } from "./types";

// Your flexible context setup
const { Provider, useFlexibleContext: usePreferences } = createFlexibleContext<{
	preferences: Preference[];
	setPreferences: (preferences: Preference[]) => void;
	updatePreference: <T extends keyof Preference>(id: string, value: Preference[T]) => void;
}>({ errorMessage: "usePreferences must be used within a PreferencesProvider" });

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
	const [preferences, setPreferences] = useState<Preference[]>(defaultPreferences); // Initialize with default preferences

	// Update preference based on id
	const updatePreference = <T extends keyof Preference>(id: string, value: Preference[T]) => {
		const pref = preferences.find((p) => p.id === id);
		if (!pref) throw new Error(`Preference with id ${id} not found`);
		if (pref.value === value) return; // No change

		// Validation checks
		if (pref.type === "list" && !pref.options.includes(value as string)) {
			throw new Error(`Value ${value} is not a valid option for preference ${id}`);
		}
		if (pref.type === "boolean" && typeof value !== "boolean") {
			throw new Error(`Value ${value} is not a valid boolean for preference ${id}`);
		}
		if (pref.type === "string" && typeof value !== "string") {
			throw new Error(`Value ${value} is not a valid string for preference ${id}`);
		}
		if (pref.type === "number" && typeof value !== "number") {
			throw new Error(`Value ${value} is not a valid number for preference ${id}`);
		}

		// Update the preference value
		setPreferences((prevPrefs) => prevPrefs.map((p) => (p.id === id ? { ...p, value } : p) as Preference));
	};

	return <Provider value={{ preferences, setPreferences, updatePreference }}>{children}</Provider>;
};

export { usePreferences, type Preference };

