"use client";
import { Button } from "@mingull/ui/components/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mingull/ui/components/select";
import { Textarea } from "@mingull/ui/components/textarea";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { toast } from "sonner";
import { User } from "@mingull/lib/db/schemas/auth";
import { getUser } from "@/lib/actions/server";

const pasteValidation = z.object({
	content: z.string().min(1, "Content must not be empty"),
	syntax: z.string().min(1, "Syntax must be selected"),
});

export default function Home() {
	const [content, setContent] = useState("");
	const [syntax, setSyntax] = useState("plaintext");
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	useEffect(() => {
		getUser().then((user) => {
			setUser(user);
		});
		// getUserAccounts().then(setAccounts);
	}, []);

	const handleCreatePaste = async () => {
		if (!content.trim()) return;

		try {
			if (!user) return router.push("/signin?ref=paste");

			const { data } = await axios.post("/api/paste", {
				content,
				syntax,
				isPublic: false,
			});

			if (data.id) {
				router.push(`/paste/${data.id}`);
			}
		} catch (error) {
			toast.error("Failed to create paste. Please try again.");
			console.error("Error creating paste:", error);
		}
	};

	return (
		<div className="h-full">
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
