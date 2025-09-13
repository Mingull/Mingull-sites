"use client";

import { Link as IntlLink } from "@/i18n/navigation";
import { forwardRef } from "react";

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<typeof IntlLink>>(function LinkWrapper({ children, ...props }, ref) {
	return (
		<IntlLink ref={ref} {...props} className={props.className}>
			{children}
		</IntlLink>
	);
});
