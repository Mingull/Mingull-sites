"use client";

import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSlugify } from "@mingull/ui/hooks";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label } from "@mingull/ui/comps";

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name too long"),
});

type CreateOrganizationFormProps = {
	onSuccess(): void;
};

export function CreateOrganizationForm({ onSuccess }: CreateOrganizationFormProps) {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "" },
	});

	const name = form.watch("name");
	const slug = useSlugify(name);

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsLoading(true);
		try {
			await authClient.organization.create({ name: data.name, slug });
			toast.success("Organization created successfully!");
			onSuccess();
		} catch {
			toast.error("Failed to create organization. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="e.g. Stark Industries" disabled={isLoading} autoFocus />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="space-y-1">
					<Label>Slug</Label>
					<div className="text-muted-foreground text-sm">
						<span className="text-foreground font-mono text-lg">{slug || "stark-industries"}</span>
					</div>
					<p className="text-muted-foreground text-xs">This will be used as the organization&apos;s URL identifier.</p>
				</div>

				<div className="pt-2">
					<Button type="submit" disabled={isLoading} className="w-full" aria-busy={isLoading}>
						{isLoading ?
							<span className="flex items-center justify-center gap-2">
								<Loader2 className="size-4 animate-spin" />
								Creating...
							</span>
						:	"Create Organization"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
