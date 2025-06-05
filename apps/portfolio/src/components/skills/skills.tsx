import { Icon } from "@mingull/ui/comps/icons/icon";
import { AngularIcon, NextJsIcon, NodeJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "@mingull/ui/icons";

export type SkillNode = {
	name: string;
	version: string;
	description: string;
	content: string | (() => React.ReactNode);
	experience: number;
	years: number;
	icon: Icon;
};

export const skills: SkillNode[] = [
	{
		name: "Typescript",
		version: "5.8.3",
		description: "Superset of JavaScript",
		experience: 90,
		years: 3,
		icon: TypeScriptIcon,
		content: () => (
			<p>
				Typescript is a superset of JavaScript that adds static typing to the language. It helps catch errors at
				compile time and improves code maintainability. I have used Typescript extensively in my projects,
				especially in React applications, to ensure type safety and better developer experience.
			</p>
		),
	},
	{
		name: "React",
		version: "19.1.0",
		description: "JavaScript library",
		experience: 80,
		years: 2.5,
		icon: ReactIcon,
		content: () => (
			<p>
				React is a JavaScript library for building user interfaces. It allows developers to create reusable UI
				components and manage the state of applications efficiently. I have built several projects using React,
				leveraging its component-based architecture and virtual DOM for optimal performance.
			</p>
		),
	},
	{
		name: "Next.js",
		version: "15.3.3",
		description: "React framework",
		experience: 75,
		years: 1.5,
		icon: NextJsIcon,
		content: () => (
			<p>
				Next.js is a React framework that enables server-side rendering and static site generation for React
				applications. It provides a powerful routing system and optimizes performance out of the box. I have
				used Next.js to build highly performant web applications with a great developer experience.
			</p>
		),
	},
	{
		name: "Tailwind CSS",
		version: "4.1.8",
		description: "Utility-first CSS framework",
		experience: 85,
		years: 3,
		icon: TailwindIcon,
		content: () => (
			<p>
				Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom
				designs. It promotes a different approach to styling by encouraging the use of utility classes directly
				in the markup. I have used Tailwind CSS in several projects to create responsive and visually appealing
				user interfaces.
			</p>
		),
	},
	{
		name: "Node.js",
		version: "22.16.0",
		description: "JavaScript runtime engine",
		experience: 70,
		years: 2,
		icon: NodeJsIcon,
		content: () => (
			<p>
				Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on
				the server side, enabling the creation of scalable and high-performance web applications. I have used
				Node.js in various projects, particularly for building RESTful APIs and real-time applications.
			</p>
		),
	},
	{
		name: "Angular",
		version: "19.0.0",
		description: "Javascript framework",
		experience: 20,
		years: 0.9,
		icon: AngularIcon,
		content: () => (
			<p>
				Angular is a platform for building mobile and desktop web applications. It provides a comprehensive set
				of tools and libraries for developing dynamic and responsive user interfaces. I have worked with Angular
				in several projects, utilizing its powerful features like dependency injection and reactive programming
				to create robust applications.
			</p>
		),
	},
];
