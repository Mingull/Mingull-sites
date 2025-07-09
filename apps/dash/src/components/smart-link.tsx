"use client";
import { Link } from "@/i18n/navigation";
import { ComponentProps } from "react";

export const SmartLink = ({
	href,
	site = "web",
	...rest
}: ComponentProps<typeof Link> & { site: "account" | "docs" | "web" }) => {
	const isExternal = /^(https?:)?\/\//.test(href.toString());

	console.log({ isExternal });

	return <Link href={href} target="_blank" {...rest} />;
};

export const SmartLinkProvider = ({ children, sites }: Readonly<{ children: React.ReactNode; sites?: string[] }>) => {
	return <>{children}</>;
};
