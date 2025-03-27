"use client";
import { defaults } from "@/app/defaults";
import { authClient } from "@/lib/auth-client";
import { User } from "@/lib/db/schemas/auth";
import { getUser } from "@/lib/server";
import { ChevronsUpDown, SquareCode, SquareLibrary } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { toast } from "sonner";

const Navbar = ({ hideOn }: { hideOn: string[] }) => {
	const pathname = usePathname();
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [activeView, setActiveView] = useState<"paste" | "collection">("paste");

	// Fetch user session on mount
	useEffect(() => {
		getUser().then((user) => setUser(user));
	}, []);

	if (hideOn.includes(pathname)) return null;

	const handleSignOut = async () => {
		try {
			authClient.signOut();
			setUser(null);
			toast.success("Signed out successfully");
		} catch (error: unknown) {
			console.error(error);
			toast.error("Failed to sign out. Please try again.");
		}
		router.push("/signin");
	};

	const handleSwitchView = (view: "paste" | "collection") => {
		setActiveView(view);
		router.push(view === "paste" ? "/paste" : "/collection");
	};

	return (
		<header className="bg-background mb-1 shadow">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				{/* Left Section */}
				<div className="flex items-center">
					<h1 className="text-xl font-bold">{defaults.TITLE}</h1>
					{pathname.startsWith("/paste") || pathname.startsWith("/collection") ?
						<>
							<span className="text-muted-foreground ml-3">/</span>
							{/* Dropdown Switch */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="">
										{activeView === "paste" ? "Paste" : "Collection"}
										<ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="start">
									<DropdownMenuItem onClick={() => handleSwitchView("paste")}>
										<SquareCode />
										Paste
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => handleSwitchView("collection")}>
										<SquareLibrary />
										Collection
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					:	null}
				</div>

				{/* Right Section */}
				<div className="flex items-center gap-4">
					{/* User Dropdown */}
					{user ?
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage src={user.image ?? undefined} alt={user.name} />
										<AvatarFallback className="text-sm">{user.name.charAt(0)}</AvatarFallback>
									</Avatar>
									<span className="font-medium">{user.name}</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-48 shadow-md">
								<DropdownMenuItem
									onClick={() => router.push("/profile")}
									className="flex cursor-pointer items-center gap-2"
								>
									<SquareCode className="h-4 w-4" />
									Profile
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={handleSignOut}
									className="flex cursor-pointer items-center gap-2"
								>
									<SquareLibrary className="h-4 w-4" />
									Sign Out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					:	<Button onClick={() => router.push("/signin")} className="rounded-lg px-4 py-2">
							Sign In
						</Button>
					}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
