"use client";
import { User } from "@/lib/db/schemas/auth";
import { getUser } from "@/lib/server";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ hideOn }: { hideOn: string[] }) => {
	const pathname = usePathname();
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	// Fetch user session on mount
	useEffect(() => {
		getUser().then((user) => setUser(user));
	}, []);

	if (hideOn.includes(pathname)) return null;

	return (
		<header className="bg-white shadow">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<h1 className="text-xl font-bold">Pastebin Clone</h1>
				{user ?
					<div className="flex items-center gap-3">
						{user.image && <img src={user.image} alt="User Avatar" className="h-8 w-8 rounded-full" />}
						<span className="font-medium">{user.name}</span>
					</div>
				:	<Button onClick={() => router.push("/auth/signin")}>Sign In</Button>}
			</div>
		</header>
	);
};
export default Navbar;
