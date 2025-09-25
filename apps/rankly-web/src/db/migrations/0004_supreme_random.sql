CREATE TABLE `organization_roles` (
	`id` varchar(36) NOT NULL,
	`organization_id` varchar(36) NOT NULL,
	`role` text NOT NULL,
	`permission` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp,
	`deleted_at` timestamp,
	CONSTRAINT `organization_roles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `accounts` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `accounts` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `api_keys` MODIFY COLUMN `prefix` varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE `api_keys` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `api_keys` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `leaderboards` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `leaderboards` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `members` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `members` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `organizations` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `organizations` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `servers` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `servers` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `sessions` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `sessions` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `verifications` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `verifications` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `player_stats` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `player_stats` MODIFY COLUMN `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `invitations` ADD `created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE `invitations` ADD `updated_at` timestamp;--> statement-breakpoint
ALTER TABLE `invitations` ADD `deleted_at` timestamp;--> statement-breakpoint
ALTER TABLE `organization_roles` ADD CONSTRAINT `organization_roles_organization_id_organizations_id_fk` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `userId_prefix_idx` ON `api_keys` (`user_id`,`prefix`);