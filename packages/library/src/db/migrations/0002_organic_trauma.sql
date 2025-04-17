ALTER TABLE `users` DROP COLUMN IF EXISTS `first_name`;--> statement-breakpoint
ALTER TABLE `users` ADD COLUMN `name` text NOT NULL AFTER `id`;--> statement-breakpoint 
ALTER TABLE `users` DROP COLUMN `last_name`;