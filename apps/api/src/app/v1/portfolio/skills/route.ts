import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { skillSchema } from "@/lib/schemas/skills";
import { createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { NextResponse } from "next/server";
import { z } from "zod";

export const GET = withRateLimit<{ searchParams: { locale?: string } }>(async () => {
	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			message: "Posts fetched successfully",
			data: skills,
		}),
		{
			status: getHttpCode("Ok"),
			statusText: getStatus("Ok"),
		},
	);
});

const skills: z.infer<typeof skillSchema>[] = [
	{
		name: "Typescript",
		version: "5.8.3",
		summary: "Superset of JavaScript",
		experience: 90,
		years: 3,
		icon: "TypeScriptIcon",
		content:
			"Typescript is a superset of JavaScript that adds static typing to the language. It helps catch errors at compile time and improves code maintainability. I have used Typescript extensively in my projects, especially in React applications, to ensure type safety and better developer experience.",
		cta: {
			text: "Learn more about TypeScript",
			link: "https://www.typescriptlang.org/",
		},
	},
	{
		name: "React",
		version: "19.1.0",
		summary: "JavaScript library",
		experience: 80,
		years: 2.5,
		icon: "ReactIcon",
		content:
			"React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently. I have built several projects using React, leveraging its component-based architecture and virtual DOM for optimal performance.",
		cta: {
			text: "Learn more about React",
			link: "https://reactjs.org/",
		},
	},
	{
		name: "Next.js",
		version: "15.3.3",
		summary: "React framework",
		experience: 75,
		years: 1.5,
		icon: "NextJsIcon",
		content:
			"Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides a powerful routing system and optimizes performance out of the box. I have used Next.js to build highly performant web applications with a great developer experience.",
		cta: {
			text: "Learn more about Next.js",
			link: "https://nextjs.org/",
		},
	},
	{
		name: "Tailwind CSS",
		version: "4.1.8",
		summary: "Utility-first CSS framework",
		experience: 85,
		years: 3,
		icon: "TailwindIcon",
		content:
			"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. It promotes a different approach to styling by encouraging the use of utility classes directly in the markup. I have used Tailwind CSS in several projects to create responsive and visually appealing user interfaces.",
		cta: {
			text: "Learn more about Tailwind CSS",
			link: "https://tailwindcss.com/",
		},
	},
	{
		name: "Node.js",
		version: "22.16.0",
		summary: "JavaScript runtime engine",
		experience: 70,
		years: 2,
		icon: "NodeJsIcon",
		content:
			"Node.js is a JavaScript runtime built on Chrome&apos;s V8 engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance web applications. I have used Node.js in various projects, particularly for building RESTful APIs and real-time applications.",
		cta: {
			text: "Learn more about Node.js",
			link: "https://nodejs.org/",
		},
	},
	{
		name: "MySQL",
		version: "8.0.34",
		summary: "Popular open-source SQL database",
		experience: 60,
		years: 1.5,
		icon: "MySQLIcon",
		content:
			"MySQL is a widely used relational database management system. It provides a robust and scalable solution for storing and managing data in web applications. I have experience working with MySQL, designing databases, and writing complex queries to retrieve and manipulate data efficiently.",
		cta: {
			text: "Learn more about MySQL",
			link: "https://www.mysql.com/",
		},
	},
	{
		name: "Angular",
		version: "19.0.0",
		summary: "Javascript framework",
		experience: 20,
		years: 0.9,
		icon: "AngularIcon",
		content:
			"Angular is a platform for building mobile and desktop web applications. It provides a comprehensive set of tools and libraries for developing dynamic and responsive user interfaces. I have worked with Angular in several projects, utilizing its powerful features like dependency injection and reactive programming to create robust applications.",
		cta: {
			text: "Learn more about Angular",
			link: "https://angular.io/",
		},
	},
];
