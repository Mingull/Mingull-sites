"use client";

import { useEffect, useState } from "react";
import * as UI from "@mingull/ui/comps";

interface DemoProps {
	component: keyof typeof UI; // Component name like 'Button', 'Badge', etc.
	[key: string]: any; // Props to pass to the component
}

const Demo: React.FC<DemoProps> = ({ component, ...props }) => {
	console.log("Loading component:", component);
	const [LoadedComponent, setLoadedComponent] = useState<React.ComponentType<any> | null>(null);

	useEffect(() => {
		// Ensure the component is available in UI
		const Component = UI[component as keyof typeof UI];

		if (Component) {
			setLoadedComponent(() => Component as React.ComponentType<any>); // Set the component correctly
		} else {
			console.warn(`Component "${component}" not found in UI.`);
			setLoadedComponent(null); // Set to null if component doesn't exist
		}
	}, [component]);

	if (!LoadedComponent) {
		return <div>Component not found or loading...</div>;
	}

	return <LoadedComponent {...props} />;
};

export default Demo;
