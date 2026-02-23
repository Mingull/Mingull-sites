import { skillSchema } from "@/lib/schemas/skills";
import { z } from "zod";
import { calculateYearsOfExperience } from "./route";

export const nlSkills: z.infer<typeof skillSchema>[] = [
	{
		name: "Typescript",
		version: "5.8.3",
		summary: "Superset of JavaScript",
		experience: { value: 90, years: 3 },
		icon: "TypeScriptIcon",
		content:
			"Typescript is een superset van JavaScript die statische typage toevoegt aan de taal. Het helpt fouten op te sporen tijdens het compileren en verbetert de onderhoudbaarheid van code. Ik heb Typescript uitgebreid gebruikt in mijn projecten, vooral in React-toepassingen, om typeveiligheid en een betere ontwikkelaarservaring te garanderen.",

		cta: {
			text: "Lees meer over TypeScript",

			link: "https://www.typescriptlang.org/",
		},
	},
	{
		name: "React",
		version: "19.1.0",
		summary: "JavaScript library",
		experience: { value: 80, years: calculateYearsOfExperience("2023-08-24")}, //2.5 },
		icon: "ReactIcon",
		content:
			"React is een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces. Het stelt ontwikkelaars in staat om herbruikbare UI-componenten te maken en de status van applicaties efficiënt te beheren. Ik heb verschillende projecten gebouwd met React, waarbij ik gebruik maakte van de componentgebaseerde architectuur en virtuele DOM voor optimale prestaties.",

		cta: {
			text: "Lees meer over React",
			link: "https://reactjs.org/",
		},
	},
	{
		name: "Next.js",
		version: "15.3.3",
		summary: "React framework",
		experience: { value: 75, years: 1.5 },
		icon: "NextJsIcon",
		content:
			"Next.js is een React-framework dat server-side rendering en statische sitegeneratie voor React-toepassingen mogelijk maakt. Het biedt een krachtig routersysteem en optimaliseert de prestaties direct uit de doos. Ik heb Next.js gebruikt om zeer performante webapplicaties te bouwen met een geweldige ontwikkelaarservaring.",
		cta: {
			text: "Lees meer over Next.js",
			link: "https://nextjs.org/",
		},
	},
	{
		name: "Tailwind CSS",
		version: "4.1.8",
		summary: "Utility-first CSS framework",
		experience: { value: 85, years: 3 },
		icon: "TailwindIcon",
		content:
			"Tailwind CSS is een utility-first CSS-framework dat low-level utility classes biedt om aangepaste ontwerpen te bouwen. Het bevordert een andere benadering van styling door het gebruik van utility classes direct in de markup aan te moedigen. Ik heb Tailwind CSS in verschillende projecten gebruikt om responsieve en visueel aantrekkelijke gebruikersinterfaces te creëren.",
		cta: {
			text: "Lees meer over Tailwind CSS",
			link: "https://tailwindcss.com/",
		},
	},
	{
		name: "Node.js",
		version: "22.16.0",
		summary: "JavaScript runtime engine",
		experience: { value: 70, years: 2 },
		icon: "NodeJsIcon",
		content:
			"Node.js is een JavaScript-runtime gebouwd op de V8-engine van Chrome. Het stelt ontwikkelaars in staat om JavaScript aan de serverzijde uit te voeren, waardoor het mogelijk is om schaalbare en high-performance webapplicaties te creëren. Ik heb Node.js in verschillende projecten gebruikt, vooral voor het bouwen van RESTful API's en real-time applicaties.",
		cta: {
			text: "Lees meer over Node.js",
			link: "https://nodejs.org/",
		},
	},
	{
		name: "MySQL",
		version: "8.0.34",
		summary: "Popular open-source SQL database",
		experience: { value: 60, years: 1.5 },
		icon: "MySQLIcon",
		content:
			"MySQL is een veelgebruikt relationeel databasebeheersysteem. Het biedt een robuuste en schaalbare oplossing voor het opslaan en beheren van gegevens in webapplicaties. Ik heb ervaring met het werken met MySQL, het ontwerpen van databases en het schrijven van complexe queries om gegevens efficiënt op te halen en te manipuleren.",
		cta: {
			text: "Lees meer over MySQL",
			link: "https://www.mysql.com/",
		},
	},
	{
		name: "Angular",
		version: "19.0.0",
		summary: "Javascript framework",
		experience: { value: 20, years: 0.9 },
		icon: "AngularIcon",
		content:
			"Angular is een platform voor het bouwen van mobiele en desktop webapplicaties. Het biedt een uitgebreide set tools en bibliotheken voor het ontwikkelen van dynamische en responsieve gebruikersinterfaces. Ik heb gewerkt met Angular in verschillende projecten, waarbij ik de krachtige functies zoals dependency injection en reactivity programming heb gebruikt om robuiste applicaties te creëren.",
		cta: {
			text: "Lees meer over Angular",
			link: "https://angular.io/",
		},
	},
];
