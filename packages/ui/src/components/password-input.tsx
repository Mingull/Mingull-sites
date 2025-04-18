"use client";

import * as React from "react";
import { Input } from "@mingull/ui/components/input";
import { cn } from "@mingull/lib";
import { Button } from "@mingull/ui/components/button";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleTogglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className="relative">
			<Input type={showPassword ? "text" : "password"} className={cn("pr-10", className)} {...props} />
			<Button
				type="button"
				variant="ghost"
				size="icon"
				className="absolute right-0 top-0 hover:bg-transparent"
				onClick={handleTogglePasswordVisibility}
			>
				{showPassword ?
					<EyeOff className="text-muted-foreground size-4" />
				:	<Eye className="text-muted-foreground size-4" />}
				<span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
			</Button>
		</div>
	);
};

export { PasswordInput };
