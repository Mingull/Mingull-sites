declare module "*.jpg" {
	const value: StaticImageData;
	export default value;
}
declare module "*.jpeg" {
	const value: StaticImageData;
	export default value;
}
declare module "*.png" {
	const value: StaticImageData;
	export default value;
}
declare module "*.webp" {
	const value: StaticImageData;
	export default value;
}
declare module "*.svg" {
	import type { SVGProps } from "react";
	const value: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	export default value;
}
