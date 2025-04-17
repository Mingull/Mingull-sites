"use client";
import { getUser } from "@/lib/actions/server";
import { authClient } from "@mingull/lib/auth/client";
import { User } from "@mingull/lib/db/schemas/auth";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type AuthContextType = {
	user: User | null;
	isLoadingUser: boolean;
	isLoadingAccounts: boolean;
	accounts: Account[];
	setUser: Dispatch<SetStateAction<User | null>>;
	setAccounts: Dispatch<SetStateAction<Account[]>>;
	updateAccounts: () => Promise<void>;
};
export type Account = {
	id: string;
	provider: string;
	createdAt: Date;
	updatedAt: Date;
	accountId: string;
	scopes: string[];
};
const { Provider, useFlexibleContext: useAuth } = createFlexibleContext<AuthContextType | undefined>({
	defaultValue: undefined,
	errorMessage: "useAuth must be used within an AuthProvider",
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const [isLoadingAccounts, setIsLoadingAccounts] = useState(true);
	const [accounts, setAccounts] = useState<Account[]>([]);

	useEffect(() => {
		setIsLoadingUser(true);
		setIsLoadingAccounts(true);
		getUser()
			.then(setUser)
			.catch(() => {
				setIsLoadingUser(false);
				setUser(null);
			})
			.finally(() => setIsLoadingUser(false));
		authClient
			.listAccounts()
			.then(({ data }) => setAccounts(data || []))
			.catch((err) => {
				setIsLoadingAccounts(false);
				setAccounts([]);
			})
			.finally(() => {
				setIsLoadingAccounts(false);
			});
	}, []);

	const updateAccounts = async () => {
		const { data } = await authClient.listAccounts();
		setAccounts(data || []);
	};

	return (
		<Provider value={{ user, setUser, accounts, setAccounts, updateAccounts, isLoadingUser, isLoadingAccounts }}>
			{children}
		</Provider>
	);
};

export { useAuth };
