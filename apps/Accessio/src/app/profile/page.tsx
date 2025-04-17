"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@mingull/ui/components/avatar";
import { Button } from "@mingull/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/components/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/components/form";
import { Input } from "@mingull/ui/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mingull/ui/components/tabs";
import { Textarea } from "@mingull/ui/components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useAuth, usePreferences } from "@/components/context";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@mingull/ui/components/dropdown-menu";
import { Account } from "@/components/context/auth";
import { catcher } from "@/lib/catcher";
import { authClient } from "@/lib/auth/client";

const profileSchema = z.object({
	username: z.string().min(3, "Username must be at least 3 characters"),
	bio: z.string().max(150, "Bio must be under 150 characters").optional(),
	// email: z.string().email("Invalid email format"),
	image: z.string().url("Invalid image URL").optional(),
});
function SocialButton({
	provider,
	accounts,
	onChange,
}: {
	provider: "discord" | "github";
	accounts: Account[];
	onChange?: (account?: Account) => void;
}) {
	const account = accounts.find((a) => a.provider === provider);
	const connected = Boolean(account);

	return (
		<div className="flex items-center justify-between border-b pb-2">
			<div>
				<p className="font-semibold">{provider.charAt(0).toUpperCase() + provider.slice(1)}</p>
				{connected ?
					<p className="text-gray-500">Connected as {account?.accountId}</p>
				:	<p className="text-gray-500">Not connected</p>}
			</div>
			{connected ?
				<Button
					variant="outline"
					onClick={async () => {
						const { data, error } = await authClient.unlinkAccount({ providerId: provider });
						if (error) return toast.error("Failed to unlink account.");
						if (data) {
							onChange?.(accounts.find((a) => a.provider === provider));
							toast.success("Account unlinked successfully!");
						}
					}}
				>
					Unconnect {provider.charAt(0).toUpperCase() + provider.slice(1)}
				</Button>
			:	<Button
					variant="secondary"
					onClick={async () => {
						const { data, error } = await authClient.linkSocial({ provider, callbackURL: "/profile" });
						if (error) return toast.error("Failed to link account.");
						if (data) {
							onChange?.(accounts.find((a) => a.provider === provider));
							toast.success("Account linked successfully!");
						}
					}}
				>
					Connect {provider.charAt(0).toUpperCase() + provider.slice(1)}
				</Button>
			}
		</div>
	);
}

export default function Profile() {
	const { user, accounts, updateAccounts, isLoadingUser, isLoadingAccounts } = useAuth();
	const { preferences, updatePreference } = usePreferences();
	const { theme, setTheme, themes, systemTheme, forcedTheme, resolvedTheme } = useTheme();
	const [isSubmitting, setIsSubmitting] = useState(false);
	// const [accounts, setAccounts] = useState<Accounts>([]);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues: { username: "", bio: "", image: "" },
		mode: "all",
	});

	useEffect(() => {
		if (!isLoadingUser && user)
			form.reset({
				username: user.displayUsername ?? "",
				bio: user.bio ?? "",
				image: user.image ?? "",
			});
		else if (!isLoadingUser && !user) {
			toast.error("User not found. Redirecting to login.");
			router.push("/signin");
		}
	}, [user, form, router, isLoadingUser]);

	const onSubmit = async ({ username, image, bio }: z.infer<typeof profileSchema>) => {
		setIsSubmitting(true);
		const { data, error } = await catcher(authClient.updateUser({ username, image, bio }));
		setIsSubmitting(false);
		if (error) return toast.error("Failed to update profile.");

		toast.success("Profile updated successfully!");
	};

	if (!user || isLoadingUser) return <div className="flex h-screen items-center justify-center">Loading...</div>;

	return (
		<div className="flex justify-center px-4 pt-16 lg:pt-48">
			<div className="w-full max-w-7xl space-y-6">
				<Tabs defaultValue="personal" className="flex h-full min-h-full flex-col lg:flex-row">
					{/* Tabs List */}
					<TabsList className="bg-background w-full flex-row justify-start lg:h-full lg:w-1/4 lg:flex-col lg:p-4">
						<TabsTrigger value="personal" className="w-full lg:h-9 lg:flex-none">
							Personal Info
						</TabsTrigger>
						<TabsTrigger value="security" className="w-full lg:h-9 lg:flex-none">
							Security
						</TabsTrigger>
						<TabsTrigger value="preferences" className="w-full lg:h-9 lg:flex-none">
							Preferences
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
											{(user.name || user.username || "U").charAt(0).toUpperCase()}
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

						{/* Preferences Tab */}
						{/* Preferences Tab */}
						<TabsContent value="preferences">
							<Card className="w-full shadow-sm">
								<CardHeader>
									<CardTitle>Preferences Settings</CardTitle>
									<CardDescription>
										Manage your preferences for notifications, themes, and more.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									{/* Theme Preference */}
									<div className="bg-background text-foreground flex items-center justify-between rounded-lg p-4">
										<p className="font-medium">Current Theme</p>
										<div className="flex items-center space-x-3">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline" className="w-full text-sm">
														{theme ?? resolvedTheme}
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													{themes.map((theme) => (
														<DropdownMenuItem
															key={theme}
															onClick={() => {
																setTheme((prevTheme) => theme);
															}}
														>
															{theme}
														</DropdownMenuItem>
													))}
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									</div>

									{/* Preferences List */}
									{preferences.map((pref) => (
										<div
											key={pref.id}
											className="bg-background text-foreground flex items-center justify-between rounded-lg p-4"
										>
											<div className="font-medium">{pref.name}</div>
											<div className="flex items-center space-x-3">
												{pref.type === "boolean" ?
													<Button
														variant={pref.value ? "secondary" : "outline"}
														onClick={() => {
															updatePreference(pref.id, !pref.value);
														}}
														className="text-sm"
													>
														{pref.value ? "Enabled" : "Disabled"}
													</Button>
												: pref.type === "list" ?
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button variant="outline" className="w-full text-sm">
																{pref.value}
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end">
															{pref.options.map((option) => (
																<DropdownMenuItem
																	key={option}
																	onClick={() => {
																		updatePreference(pref.id, option);
																	}}
																>
																	{option}
																</DropdownMenuItem>
															))}
														</DropdownMenuContent>
													</DropdownMenu>
												:	null}
											</div>
										</div>
									))}
								</CardContent>
							</Card>
						</TabsContent>

						{/* Connections Tab */}
						<TabsContent value="connections" className="flex flex-col">
							<Card className="w-full shadow-sm">
								<CardHeader>
									<CardTitle>Connected Accounts</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<SocialButton
										provider="discord"
										accounts={accounts}
										onChange={(acc) => {
											updateAccounts();
										}}
									/>
									<SocialButton
										provider="github"
										accounts={accounts}
										onChange={(acc) => {
											updateAccounts();
										}}
									/>
								</CardContent>
							</Card>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</div>
	);
}
