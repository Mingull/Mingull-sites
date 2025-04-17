CREATE TABLE `sites` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`domain` varchar(255),
	`description` text,
	`themes` json,
	`logo` varchar(255),
	`favicon` varchar(255),
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `sites_id` PRIMARY KEY(`id`),
	CONSTRAINT `sites_name_unique` UNIQUE(`name`),
	CONSTRAINT `sites_domain_unique` UNIQUE(`domain`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `birthday` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `accounts` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `api_keys` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `sessions` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `users` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `verifications` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `collections` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `pastes` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `preferences` ADD `description` text;--> statement-breakpoint
ALTER TABLE `preferences` ADD `site` varchar(36);--> statement-breakpoint
ALTER TABLE `tags` ADD `deleted_at` datetime;--> statement-breakpoint
ALTER TABLE `preferences` ADD CONSTRAINT `preferences_name_unique` UNIQUE(`name`);--> statement-breakpoint
ALTER TABLE `preferences` ADD CONSTRAINT `preferences_site_sites_id_fk` FOREIGN KEY (`site`) REFERENCES `sites`(`id`) ON DELETE cascade ON UPDATE cascade;