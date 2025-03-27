"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authClient } from "@/lib/auth-client";
import { User, Account } from "@/lib/db/schemas/auth";
import { getUser } from "@/lib/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { catcher } from "@/lib/catcher";

const profileSchema = z.object({
	username: z.string().min(3, "Username must be at least 3 characters"),
	bio: z.string().max(150, "Bio must be under 150 characters").optional(),
	// email: z.string().email("Invalid email format"),
	image: z.string().url("Invalid image URL").optional(),
});

export default function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [accounts, setAccounts] = useState<Account[]>([]);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues: { username: "", bio: "", image: "" },
		mode: "all",
	});

	useEffect(() => {
		getUser().then((user) => {
			if (!user) return router.push("/signin");
			setUser(user);
			form.reset({
				username: user.displayUsername ?? "",
				bio: user.bio ?? "",
				image: user.image ?? "",
			});
		});
		// getUserAccounts().then(setAccounts);
	}, [form, router]);

	const onSubmit = async ({ username, image, bio }: z.infer<typeof profileSchema>) => {
		setIsSubmitting(true);
		const { data, error } = await catcher(authClient.updateUser({ username, image, bio }));
		if (error) return toast.error("Failed to update profile.");

		setIsSubmitting(false);
		toast.success("Profile updated successfully!");
	};

	if (!user) return null;

	return (
		<div className="flex justify-center px-4 pt-16 lg:pt-48">
			<div className="w-full max-w-7xl space-y-6">
				<Tabs defaultValue="personal" className="flex h-full min-h-full flex-col lg:flex-row">
					{/* Tabs List */}
					<TabsList className="bg-background w-full flex-row lg:h-full lg:w-1/4 lg:flex-col lg:p-4 justify-start">
						<TabsTrigger value="personal" className="w-full lg:h-9 lg:flex-none">
							Personal Info
						</TabsTrigger>
						<TabsTrigger value="security" className="w-full lg:h-9 lg:flex-none">
							Security
						</TabsTrigger>
						<TabsTrigger value="connections" className="w-full lg:h-9 lg:flex-none">
							Connections
						</TabsTrigger>
					</TabsList>

					{/* Tab Contents */}
					<div className="h-full flex-1">
						{/* Personal Info Tab */}
						<TabsContent value="personal">
							<Card className="w-full shadow-sm">
								<CardHeader className="flex flex-col items-center">
									<Avatar className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
										<AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} />
										<AvatarFallback className="text-sm">
											{user.name.charAt(0).toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<CardTitle className="mt-2 text-xl">{user.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input disabled value={user.email} />
												</FormControl>
											</FormItem>

											<FormField
												control={form.control}
												name="username"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Username</FormLabel>
														<FormControl>
															<Input {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="bio"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Bio</FormLabel>
														<FormControl>
															<Textarea
																{...field}
																placeholder="Tell us about yourself..."
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<Button type="submit" className="w-full" disabled={isSubmitting}>
												{isSubmitting ? "Saving..." : "Save Changes"}
											</Button>
										</form>
									</Form>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Security Tab */}
						<TabsContent value="security">
							<Card className="w-full shadow-sm">
								<CardHeader>
									<CardTitle>Security Settings</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-500">
										Change your password, enable 2FA, and manage security settings.
									</p>
									<Button className="mt-4 w-full">Change Password</Button>
									<Button variant="secondary" className="mt-2 w-full">
										Enable 2FA
									</Button>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Connections Tab */}
						<TabsContent value="connections" className="flex flex-col">
							<Card className="w-full shadow-sm">
								<CardHeader>
									<CardTitle>Connected Accounts</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{accounts.length > 0 ?
											accounts.map((account) => (
												<li key={account.id} className="flex justify-between border-b pb-2">
													<span>{account.providerId}</span>
													<span className="text-gray-500">{account.accountId}</span>
												</li>
											))
										:	<p className="text-gray-500">No connected accounts.</p>}
									</ul>
									<Button className="mt-4 w-full">Connect New Account</Button>
								</CardContent>
							</Card>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</div>
	);
}
