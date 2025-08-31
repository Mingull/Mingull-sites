ALTER TABLE `users` ADD `onboarded_at` timestamp DEFAULT NULL;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `bio`;