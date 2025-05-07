import { createLucideIcon, IconNode } from "lucide-react";

const _iconNode: IconNode = [
	[
		"path",
		{
			fill: "#fff",
			d: "M21 12a9 9 0 1 1-6.219-8.56",
			key: "path0",
		},
	],
];

const SpinnerIcon = createLucideIcon("spinner", _iconNode);
export { _iconNode, SpinnerIcon as default };
