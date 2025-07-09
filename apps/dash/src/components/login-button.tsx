"use client";
import { listSessions, signOut, useSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@mingull/ui/comps/avatar";
import { Button } from "@mingull/ui/comps/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@mingull/ui/comps/dropdown-menu";
import { LoaderCircle, LogIn, LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SmartLink } from "./smart-link";

export default function LoginButton() {
	const { data: session, error, isPending } = useSession();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		console.log(listSessions());
	}, [mounted]);

	if (!mounted) return null;

	if (isPending) return <LoadingButton />;
	if (error) return <ErrorButton />;

	return session ?
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage src={session.user.image ?? undefined} />
						<AvatarFallback>{session.user.name}</AvatarFallback>
					</Avatar>
					<span className="sr-only">user button</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<SmartLink site="account" href="/">
							<UserIcon className="mr-2 size-4" />
							Profile
						</SmartLink>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={async () => await signOut()}>
						<LogOutIcon className="mr-2 size-4" />
						logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		:	<SignInButton />;
}

function LoadingButton() {
	return (
		<Button size="sm" variant="ghost">
			<LoaderCircle className="size-4 animate-spin" />
			<span className="sr-only">loading</span>
		</Button>
	);
}

function ErrorButton() {
	toast.error("An error occurred while fetching user data", {
		description: "Please try to refresh the page or sign in again",
		position: "top-center",
	});

	return (
		<Button size="sm" variant="ghost" asChild>
			<Link href="/sign-in">
				<LogIn className="size-4" />
			</Link>
		</Button>
	);
}

function SignInButton() {
	return (
		<Button size="sm" variant="ghost" asChild>
			<Link href="/sign-in">
				<LogIn className="size-4" />
			</Link>
		</Button>
	);
}
