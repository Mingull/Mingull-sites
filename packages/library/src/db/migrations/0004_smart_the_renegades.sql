ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_active_organization_id_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_active_organization_id_organizations_id_fk` FOREIGN KEY (`active_organization_id`) REFERENCES `organizations`(`id`) ON DELETE set null ON UPDATE no action;