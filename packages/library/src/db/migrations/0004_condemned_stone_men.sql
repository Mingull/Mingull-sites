ALTER TABLE `sites` MODIFY COLUMN `domain` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `user_preferences` MODIFY COLUMN `value` text NOT NULL;