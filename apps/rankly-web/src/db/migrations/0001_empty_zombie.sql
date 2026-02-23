CREATE TABLE `feature_flags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(128) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`category_id` int,
	`enabled` boolean NOT NULL DEFAULT true,
	`default_value` boolean NOT NULL DEFAULT false,
	`is_permanent` boolean DEFAULT false,
	`rollout_percentage` int DEFAULT 100,
	`created_by` varchar(128),
	`updated_by` varchar(128),
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `feature_flags_id` PRIMARY KEY(`id`),
	CONSTRAINT `feature_flags_key_unique` UNIQUE(`key`)
);
--> statement-breakpoint
CREATE TABLE `flag_audit_log` (
	`id` int AUTO_INCREMENT NOT NULL,
	`feature_flag_id` int NOT NULL,
	`action` varchar(64) NOT NULL,
	`actor` varchar(128) NOT NULL,
	`reason` text,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `flag_audit_log_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `flag_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(64) NOT NULL,
	`name` varchar(128) NOT NULL,
	`description` varchar(255),
	CONSTRAINT `flag_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `flag_categories_key_unique` UNIQUE(`key`)
);
--> statement-breakpoint
CREATE TABLE `flag_overrides` (
	`id` int AUTO_INCREMENT NOT NULL,
	`feature_flag_id` int NOT NULL,
	`target_type` varchar(32) NOT NULL,
	`target_id` varchar(128) NOT NULL,
	`value` boolean NOT NULL,
	`expires_at` timestamp,
	`created_by` varchar(128),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `flag_overrides_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `flag_rules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`feature_flag_id` int NOT NULL,
	`variant_id` int,
	`target_type` varchar(32) NOT NULL,
	`allowed_roles` json NOT NULL DEFAULT ('[]'),
	`plan` varchar(64) NOT NULL DEFAULT 'free',
	`rollout_percentage` int DEFAULT 100,
	`description` varchar(255),
	CONSTRAINT `flag_rules_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `flag_variants` (
	`id` int AUTO_INCREMENT NOT NULL,
	`feature_flag_id` int NOT NULL,
	`key` varchar(64) NOT NULL,
	`description` varchar(255),
	`weight` decimal(3,2) DEFAULT 0.5,
	CONSTRAINT `flag_variants_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tenant_flags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`feature_flag_id` int NOT NULL,
	`tenant_id` varchar(36) NOT NULL,
	`type` enum('user','organization') NOT NULL,
	`override_value` varchar(255) DEFAULT 'true',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tenant_flags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `servers` MODIFY COLUMN `lifecycle_status` int;--> statement-breakpoint
ALTER TABLE `servers` MODIFY COLUMN `runtime_status` int;--> statement-breakpoint
ALTER TABLE `organizations` ADD `plan` varchar(64) DEFAULT 'free' NOT NULL;--> statement-breakpoint
ALTER TABLE `feature_flags` ADD CONSTRAINT `feature_flags_category_id_flag_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `flag_categories`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `flag_audit_log` ADD CONSTRAINT `flag_audit_log_feature_flag_id_feature_flags_id_fk` FOREIGN KEY (`feature_flag_id`) REFERENCES `feature_flags`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `flag_overrides` ADD CONSTRAINT `flag_overrides_feature_flag_id_feature_flags_id_fk` FOREIGN KEY (`feature_flag_id`) REFERENCES `feature_flags`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `flag_rules` ADD CONSTRAINT `flag_rules_feature_flag_id_feature_flags_id_fk` FOREIGN KEY (`feature_flag_id`) REFERENCES `feature_flags`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `flag_rules` ADD CONSTRAINT `flag_rules_variant_id_feature_flags_id_fk` FOREIGN KEY (`variant_id`) REFERENCES `feature_flags`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `flag_variants` ADD CONSTRAINT `flag_variants_feature_flag_id_feature_flags_id_fk` FOREIGN KEY (`feature_flag_id`) REFERENCES `feature_flags`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tenant_flags` ADD CONSTRAINT `tenant_flags_feature_flag_id_feature_flags_id_fk` FOREIGN KEY (`feature_flag_id`) REFERENCES `feature_flags`(`id`) ON DELETE cascade ON UPDATE no action;