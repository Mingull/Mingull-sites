import { ResetPasswordForm } from "@/components/forms/reset-password";
import { LanguageSelector } from "@/components/language-selector";
import { BackgroundBeams } from "@mingull/ui/comps";

export default function ResetPasswordPage() {
	return (
		<div className="bg-background relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<div className="absolute right-4 top-4 z-20">
				<LanguageSelector />
			</div>
			<div className="z-10 w-full max-w-md">
				<ResetPasswordForm />
			</div>

			<BackgroundBeams />
		</div>
	);
}
