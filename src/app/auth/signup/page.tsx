"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
	const [step, setStep] = useState(1);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const handleSignUp = async () => {
		setLoading(true);
		setError(null);

		const { error } = await authClient.signUp.email({
			email,
			password,
			name,
			image: `https://api.dicebear.com/7.x/identicon/svg?seed=${username}`,
		});

		if (error) {
			setError(error.message ?? "An error occurred. Please try again.");
			setLoading(false);
			return;
		}

		router.push("/dashboard");
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="w-full max-w-md space-y-6 bg-white p-8 shadow-lg">
				<h2 className="text-center text-2xl font-bold">Sign Up</h2>

				{/* Stepper UI */}
				<div className="flex justify-center gap-2">
					{[1, 2, 3, 4].map((s) => (
						<div
							key={s}
							className={cn("h-2 w-8 rounded-full", step >= s ? "bg-blue-600" : "bg-gray-300")}
						/>
					))}
				</div>

				{error && <p className="text-center text-red-500">{error}</p>}

				{/* Step 1: Name & Username */}
				{step === 1 && (
					<>
						<Input
							type="text"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Button onClick={nextStep} disabled={!name || !username} className="w-full">
							Next
						</Button>
					</>
				)}

				{/* Step 2: Email */}
				{step === 2 && (
					<>
						<Input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="flex justify-between">
							<Button onClick={prevStep} variant="outline">
								Back
							</Button>
							<Button onClick={nextStep} disabled={!email} className="w-24">
								Next
							</Button>
						</div>
					</>
				)}

				{/* Step 3: Password */}
				{step === 3 && (
					<>
						<Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="flex justify-between">
							<Button onClick={prevStep} variant="outline">
								Back
							</Button>
							<Button onClick={nextStep} disabled={!password} className="w-24">
								Next
							</Button>
						</div>
					</>
				)}

				{/* Step 4: Confirmation */}
				{step === 4 && (
					<>
						<p className="text-center">Confirm your details:</p>
						<div className="rounded-lg border p-4">
							<p>
								<strong>Name:</strong> {name}
							</p>
							<p>
								<strong>Username:</strong> {username}
							</p>
							<p>
								<strong>Email:</strong> {email}
							</p>
						</div>
						<div className="flex justify-between">
							<Button onClick={prevStep} variant="outline">
								Back
							</Button>
							<Button onClick={handleSignUp} disabled={loading} className="w-24">
								{loading ? "Signing Up..." : "Submit"}
							</Button>
						</div>
					</>
				)}

				<p className="text-center text-sm">
					Already have an account?{" "}
					<Link href="/auth/signin" className="text-blue-600 hover:underline">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
}
