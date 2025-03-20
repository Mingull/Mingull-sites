"use client";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const [content, setContent] = useState("");
	const [syntax, setSyntax] = useState("plaintext");
	const router = useRouter();

	const handleCreatePaste = async () => {
		if (!content.trim()) return;

		const res = await fetch("/api/paste", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ content, syntax, isPublic: false }),
		});

		if (res.ok) {
			const { id } = await res.json();
			router.push(`/paste/${id}`);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Main Content */}
			<div className="mx-auto max-w-2xl space-y-4 p-6">
				<Textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Paste your text here..."
					className="h-48"
				/>
				<Select onValueChange={setSyntax} value={syntax}>
					<SelectTrigger>
						<SelectValue placeholder="Select Syntax" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="plaintext">Plain Text</SelectItem>
						<SelectItem value="markdown">Markdown</SelectItem>
						<SelectItem value="javascript">JavaScript</SelectItem>
						<SelectItem value="python">Python</SelectItem>
						<SelectItem value="java">Java</SelectItem>
						<SelectItem value="c">C</SelectItem>
					</SelectContent>
				</Select>
				<Button onClick={handleCreatePaste} className="w-full">
					Create Paste
				</Button>
			</div>
		</div>
	);
}
