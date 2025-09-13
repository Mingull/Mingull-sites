"use client";

import { cn } from "@mingull/lib";
import { Button } from "@mingull/ui/comps/button";
import { ChevronDown, ChevronRight, Copy } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

export type CodeBlockContext = {
	source: string;
	language: string;
	expanded: boolean;
	copyState: "idle" | "copying" | "copied" | "failed";
	mode: "template" | "minimized" | "one-line";
	copy: () => Promise<void>;
	setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	setCopyState: React.Dispatch<React.SetStateAction<"idle" | "copying" | "copied" | "failed">>;
};

export const CodeBlockContext = createContext<CodeBlockContext | undefined>(undefined);

export const useCodeBlock = () => {
	const context = useContext(CodeBlockContext);
	if (!context) {
		throw new Error("useCodeBlock must be used within a CodeBlockProvider");
	}
	return context;
};

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the code block.
	 */
	children?: React.ReactNode;
	/**
	 * The source code of the code block.
	 */
	source: string;
	/**
	 * The programming language of the code block.
	 */
	language: string;
	/**
	 * The mode of the code block.
	 * - `template`: The default mode, shows the full code block.
	 * - `minimized`: Shows a minimized version of the code block.
	 * - `one-line`: Shows the code block as a single line. No line breaks are allowed.
	 */
	mode: "template" | "minimized" | "one-line";
}

export function CodeBlock({ source, language = "tsx", mode = "template", children, className, ...props }: CodeBlockProps) {
	const [expanded, setExpanded] = useState(mode === "template");
	const [copyState, setCopyState] = useState<"idle" | "copying" | "copied" | "failed">("idle");

	const copy = async () => {
		try {
			setCopyState("copying");
			await navigator.clipboard.writeText(source);
			setCopyState("copied");
			setTimeout(() => setCopyState("idle"), 1500);
		} catch (e) {
			setCopyState("failed");
			console.error("Failed to copy text:", e);
		}
	};

	return (
		<CodeBlockContext.Provider value={{ source, language, expanded, copyState, mode, copy, setExpanded, setCopyState }}>
			<div className={cn("bg-muted relative w-full overflow-hidden rounded-lg border font-mono text-sm", className)} {...props}>
				{children}
			</div>
		</CodeBlockContext.Provider>
	);
}

export function CodeBlockHeader() {
	const { language, copy, copyState, setExpanded, expanded, mode } = useCodeBlock();
	return (
		<div className="bg-muted/50 flex items-center justify-between border-b px-2 py-1 text-xs">
			<span className="text-muted-foreground font-medium">{language}</span>
			<div className="flex gap-1">
				<Button size="sm" variant="ghost" className="h-6 px-2 text-xs" onClick={copy}>
					<Copy className="mr-1 h-3 w-3" />
					{copyState === "copying" ?
						"Copying..."
					: copyState === "copied" ?
						"Copied!"
					: copyState === "failed" ?
						"Failed"
					:	"Copy"}
				</Button>
				{mode === "minimized" ?
					<Button size="sm" variant="ghost" className="h-6 px-2 text-xs" onClick={() => setExpanded((e) => !e)}>
						{expanded ?
							<>
								<ChevronDown className="mr-1 h-3 w-3" />
								Collapse
							</>
						:	<>
								<ChevronRight className="mr-1 h-3 w-3" />
								Expand
							</>
						}
					</Button>
				:	null}
			</div>
		</div>
	);
}

export function CodeBlockContent() {
	const { language, expanded, source } = useCodeBlock();
	return (
		<pre className={cn("m-0! overflow-x-auto text-sm leading-relaxed transition-all duration-200 ease-in-out", expanded ? "max-h-[600px]" : "p-0! max-h-0")}>
			<code className={`language-${language} block`}>{source.trim()}</code>
		</pre>
	);
}
