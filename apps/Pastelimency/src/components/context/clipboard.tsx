import { catcher } from "@mingull/lib";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";

const { Provider, useFlexibleContext: useClipboard } = createFlexibleContext<{
	copy: (text: string) => void;
}>({ errorMessage: "useClipboard must be used within a ClipboardProvider" });

export const ClipboardProvider = ({ children }: { children: React.ReactNode }) => {
	const copy = async (text: string) => {
		const { error } = await catcher(navigator.clipboard.writeText(text));
		if (error) {
			console.error("Failed to copy:", error);
		}
	};

	return <Provider value={{ copy }}>{children}</Provider>;
};

export { useClipboard };
