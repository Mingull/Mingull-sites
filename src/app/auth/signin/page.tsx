"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const searchParams = useSearchParams();
	const router = useRouter();
	const error = searchParams.get("error");

	const handleEmailSignIn = async () => {
		setLoading(true);
		const { data, error } = await authClient.signIn.email({
			email,
			password,
		});

		if (error) {
			alert("Invalid credentials. Please try again.");
			setLoading(false);
		} else {
			router.push("/");
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow">
				<h1 className="text-center text-2xl font-bold">Sign In</h1>

				{error && <p className="text-center text-red-500">Login failed. Please try again.</p>}

				{/* Email & Password Sign-In */}
				<div className="space-y-4">
					<Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleEmailSignIn} className="w-full" disabled={loading}>
						{loading ? "Signing in..." : "Sign in with Email"}
					</Button>
				</div>

				{/* Divider */}
				<div className="relative my-4 flex items-center">
					<div className="flex-grow border-t border-gray-300"></div>
					<span className="px-2 text-sm text-gray-500">or</span>
					<div className="flex-grow border-t border-gray-300"></div>
				</div>

				{/* Discord OAuth Sign-In */}
				<Button onClick={() => authClient.signIn.social({ provider: "discord" })} className="w-full">
					Sign in with Discord
				</Button>

				<p className="text-center text-sm text-gray-500">
					Don't have an account?{" "}
					<Link href="/auth/signup" className="text-blue-600 hover:underline">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
}
