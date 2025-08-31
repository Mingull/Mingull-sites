"use client";

import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Organization } from "@mingull/lib";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@mingull/ui/comps/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@mingull/ui/comps/sidebar";
import { toast } from "sonner";

interface OrganizationSwitcherProps {
	organizations: Organization[];
}

export function SquadSwitcher({ organizations }: OrganizationSwitcherProps) {
	const { data: activeSquad, isPending, error } = authClient.useActiveOrganization();

	const handleSwitch = async (organizationId: string) => {
		try {
			const { error } = await authClient.organization.setActive({
				organizationId,
			});

			if (error) {
				console.error(error);
				toast.error("Failed to switch organization");
				return;
			}

			toast.success("Organization switched successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to switch organization");
		}
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
								<GalleryVerticalEnd className="size-4" />
							</div>
							<div className="flex flex-col gap-0.5 leading-none">
								<span className="font-medium">Organization</span>
								<span className="text-muted-foreground">{activeSquad?.name ?? "No Organization"}</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)" align="start">
						{organizations.map((org) => (
							<DropdownMenuItem key={org.id} onSelect={() => handleSwitch(org.id)}>
								{org.name} {org.id === activeSquad?.id && <Check className="ml-auto" />}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
