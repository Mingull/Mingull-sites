CREATE TABLE `player_server` (
	`id` varchar(36) NOT NULL,
	`player_id` varchar(36) NOT NULL,
	`server_id` varchar(36) NOT NULL,
	`first_seen` timestamp DEFAULT (now()),
	`last_seen` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `player_server_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `players` DROP FOREIGN KEY `players_server_id_servers_id_fk`;
--> statement-breakpoint
ALTER TABLE `api_keys` MODIFY COLUMN `last_request` datetime;--> statement-breakpoint
ALTER TABLE `api_keys` MODIFY COLUMN `expires_at` datetime;--> statement-breakpoint
ALTER TABLE `invitations` MODIFY COLUMN `role` text NOT NULL;--> statement-breakpoint
ALTER TABLE `player_server` ADD CONSTRAINT `player_server_player_id_players_uuid_fk` FOREIGN KEY (`player_id`) REFERENCES `players`(`uuid`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `player_server` ADD CONSTRAINT `player_server_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` DROP COLUMN `server_id`;--> statement-breakpoint
ALTER TABLE `players` DROP COLUMN `first_seen`;--> statement-breakpoint
ALTER TABLE `players` DROP COLUMN `last_seen`;