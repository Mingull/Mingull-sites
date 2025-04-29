"use client";

import authClient from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInPage() {
	const [isGithubLoading, setGithubLoading] = useState(false);
	const [isDiscordLoading, setDiscordLoading] = useState(false);
	return (
		<section className="py-24">
			<div className="container flex max-w-3xl justify-center xl:max-w-4xl">
				<Card className="w-full sm:w-96">
					<CardHeader>
						<CardTitle>Sign in to your account</CardTitle>
						<CardDescription>Welcome back! Please sign in to continue</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-y-4">
						<div className="grid grid-cols-2 gap-x-4">
							<Button
								size="sm"
								variant="outline"
								onClick={async () => {
									await authClient.signIn.social(
										{
											provider: "github",
											callbackURL: process.env.NEXT_PUBLIC_BASE_URL,
										},
										{
											onSuccess: () => {
												setGithubLoading(false);
												toast.success("Successfully signed in with GitHub", {
													description: "Welcome back!",
													position: "top-center",
												});
											},
											onRequest: () => {
												setGithubLoading(true);
											},
											onError: () => {
												setGithubLoading(false);
												toast.error("Failed to sign in with GitHub", {
													description: "Please try again later",
													position: "top-center",
												});
											},
										},
									);
								}}
							>
								{isGithubLoading ?
									<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
								:	<Icons.gitHub className="mr-2 h-4 w-4" />}
								GitHub
							</Button>
							<Button
								size="sm"
								variant="outline"
								onClick={async () => {
									await authClient.signIn.social(
										{
											provider: "discord",
											callbackURL: process.env.NEXT_PUBLIC_BASE_URL,
										},
										{
											onSuccess: (ctx) => {
												setDiscordLoading(false);
												toast.success("Successfully signed in with Discord", {
													description: "Welcome back!",
													position: "top-center",
												});
												console.log(ctx);
											},
											onRequest: () => {
												setDiscordLoading(true);
											},
											onError: (ctx) => {
												console.log(ctx);
												setDiscordLoading(false);
												toast.error("Failed to sign in with Discord", {
													description: "Please try again later",
													position: "top-center",
												});
											},
										},
									);
								}}
							>
								{isDiscordLoading ?
									<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
								:	<Icons.discord className="mr-2 h-4 w-4" />}
								Discord
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
