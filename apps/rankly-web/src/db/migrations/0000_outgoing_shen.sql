CREATE TABLE `accounts` (
	`id` varchar(36) NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` datetime,
	`refresh_token_expires_at` datetime,
	`scope` text,
	`password` text,
	`metadata` text,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `accounts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `api_keys` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`name` text,
	`start` text,
	`prefix` text,
	`key` text NOT NULL,
	`refill_interval` int,
	`refill_amount` int,
	`last_refill_at` timestamp,
	`enabled` boolean,
	`rate_limit_enabled` boolean,
	`rate_limit_time_window` int,
	`rate_limit_max` int,
	`request_count` int,
	`remaining` int,
	`permissions` text,
	`metadata` text,
	`last_request` datetime DEFAULT CURRENT_TIMESTAMP,
	`expires_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `api_keys_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`uuid` varchar(36) NOT NULL,
	`username` varchar(32) NOT NULL,
	`server_id` varchar(36) NOT NULL,
	`linked_user_id` varchar(36),
	`first_seen` timestamp DEFAULT (now()),
	`last_seen` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_uuid` PRIMARY KEY(`uuid`)
);
--> statement-breakpoint
CREATE TABLE `server_status` (
	`id` int NOT NULL,
	`name` varchar(128) NOT NULL,
	CONSTRAINT `server_status_id` PRIMARY KEY(`id`),
	CONSTRAINT `server_status_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `servers` (
	`id` varchar(36) NOT NULL,
	`server_uuid` varchar(64) NOT NULL,
	`setup_token` varchar(64) NOT NULL,
	`owner_id` varchar(36) NOT NULL,
	`activated` boolean NOT NULL DEFAULT false,
	`name` varchar(255) NOT NULL,
	`hostname` varchar(255),
	`ip` varchar(45),
	`port` int DEFAULT 25565,
	`version` varchar(50),
	`plugins` json,
	`banner_url` varchar(2048),
	`icon_url` varchar(2048),
	`motd` text,
	`status` int NOT NULL,
	`player_count` int DEFAULT 0,
	`max_players` int DEFAULT 0,
	`last_heartbeat` timestamp,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `servers_id` PRIMARY KEY(`id`),
	CONSTRAINT `servers_server_uuid_unique` UNIQUE(`server_uuid`),
	CONSTRAINT `servers_setup_token_unique` UNIQUE(`setup_token`)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`token` varchar(255) NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`expires_at` timestamp NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `sessions_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`name` text NOT NULL,
	`username` varchar(255),
	`display_username` text,
	`email` varchar(255) NOT NULL,
	`email_verified` boolean NOT NULL,
	`image` text,
	`role` text,
	`banned` boolean,
	`ban_reason` text,
	`ban_expires` timestamp DEFAULT NULL,
	`onboarded_at` timestamp DEFAULT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verifications` (
	`id` varchar(36) NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` timestamp NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `verifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leaderboards` (
	`id` int NOT NULL,
	`server_id` varchar(36) NOT NULL,
	`title` varchar(255) NOT NULL,
	`type` varchar(50) NOT NULL,
	`public` tinyint NOT NULL DEFAULT 1,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `leaderboards_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `player_stats` (
	`id` varchar(36) NOT NULL,
	`player_id` varchar(36) NOT NULL,
	`server_id` varchar(36) NOT NULL,
	`type` varchar(36) NOT NULL,
	`value` varchar(36) NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `player_stats_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `api_keys` ADD CONSTRAINT `api_keys_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_linked_user_id_users_id_fk` FOREIGN KEY (`linked_user_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `servers` ADD CONSTRAINT `servers_owner_id_users_id_fk` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `servers` ADD CONSTRAINT `servers_status_server_status_id_fk` FOREIGN KEY (`status`) REFERENCES `server_status`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `leaderboards` ADD CONSTRAINT `leaderboards_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `player_stats` ADD CONSTRAINT `player_stats_player_id_players_uuid_fk` FOREIGN KEY (`player_id`) REFERENCES `players`(`uuid`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `player_stats` ADD CONSTRAINT `player_stats_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers`(`id`) ON DELETE cascade ON UPDATE no action;