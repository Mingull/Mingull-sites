"use client";
import { defaults } from "@/app/defaults";
import { authClient } from "@/lib/auth/client";
import { catcher } from "@/lib/catcher";
import { ChevronsUpDown, SquareCode, SquareLibrary } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "./context/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@mingull/ui/components/avatar";
import { Button } from "@mingull/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@mingull/ui/components/dropdown-menu";

const Navbar = ({ hideOn }: { hideOn: string[] }) => {
	const pathname = usePathname();
	const router = useRouter();
	const { user, setUser } = useAuth();
	const [activeView, setActiveView] = useState<"pastes" | "collections">("pastes");

	if (hideOn.includes(pathname)) return null;

	const handleSignOut = async () => {
		const { error } = await catcher(authClient.signOut());
		if (error) {
			toast.error("Failed to sign out. Please try again.");
			return;
		}
		setUser(null);
		toast.success("Signed out successfully");
		router.push("/signin");
	};

	const handleSwitchView = (view: "pastes" | "collections") => {
		setActiveView(view);
		router.push(view === "pastes" ? "/pastes" : "/collections");
	};

	return (
		<header className="bg-background mb-1 shadow">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				{/* Left Section */}
				<div className="flex items-center">
					<h1 className="text-xl font-bold">
						<Link href={"/"}>{defaults.TITLE}</Link>
					</h1>
					{pathname.startsWith("/paste") || pathname.startsWith("/collection") ?
						<>
							<span className="text-muted-foreground ml-3">/</span>
							{/* Dropdown Switch */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="">
										{activeView === "pastes" ? "Pastes" : "Collections"}
										<ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="start">
									<DropdownMenuItem onClick={() => handleSwitchView("pastes")}>
										<SquareCode />
										Paste
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => handleSwitchView("collections")}>
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
