import React from "react";

export type IconProps = {
	className?: string;
	size?: number | string;
	strokeWidth?: number;
	color?: string;
	style?: React.CSSProperties;
};

export type ElementName = "path" | "circle" | "rect" | "line" | "polygon" | "polyline" | "ellipse" | "g" | "text";

export type IconNode = [elementName: ElementName, props: React.SVGProps<SVGElement> & { key: string }][];
export type Icon = (props: IconProps) => React.ReactNode;

export const createIcon = (name: string, node: IconNode, defaultProps?: IconProps): Icon => {
	return ({ size, color, className, style, ...rest }: IconProps) => {
		const hasColorClass = className?.match(/\b(text|bg)-\S+/);

		const combinedStyle: React.CSSProperties = {
			...style,
			...(hasColorClass ? {} : { color: color ?? defaultProps?.color }),
		};

		return (
			<svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size ?? defaultProps?.size ?? 24}
				height={size ?? defaultProps?.size ?? 24}
				fill="currentColor"
				className={className}
				style={combinedStyle}
				aria-label={name}
				{...rest}
			>
				<title>{name}</title>
				{node.map(([type, props]) => React.createElement(type, props))}
			</svg>
		);
	};
};
