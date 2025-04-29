import { authClient } from "@mingull/lib/auth/client";
import "dotenv/config";

export const {
	$Infer,
	$fetch,
	admin,
	changeEmail,
	changePassword,
	deleteUser,
	forgetPassword,
	getSession,
	linkSocial,
	listAccounts,
	listSessions,
	resetPassword,
	revokeSession,
	revokeSessions,
	sendVerificationEmail,
	signIn,
	signOut,
	signUp,
	updateUser,
	useSession,
	verifyEmail,
} = authClient;

export default authClient;
