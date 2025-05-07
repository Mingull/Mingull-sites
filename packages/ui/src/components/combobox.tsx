"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@mingull/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@mingull/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@mingull/ui/popover";

import { cn } from "@mingull/lib/utils";

export function Combobox({
	options,
	defaultOption,
	placeholder = "Select...",
	selected,
	onChange,
}: {
	options: { label: string; value: string }[];
	defaultOption?: { label: string; value: string };
	placeholder?: string;
	selected?: { label: string; value: string };
	onChange: (option: { label: string; value: string }) => void;
}) {
	const [open, setOpen] = useState(false);
	const currentSelection = selected ?? defaultOption;

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
					{currentSelection?.label ?? placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandList>
						<CommandEmpty>No options found.</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={() => {
										onChange(option);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											currentSelection?.value === option.value ? "opacity-100" : "opacity-0",
										)}
									/>
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
