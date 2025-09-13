"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@mingull/ui/comps/button";

export function Logout() {
	const handleLogout = async () => {
		await authClient.signOut();
	};
	return <Button onClick={handleLogout}>Log out</Button>;
}
