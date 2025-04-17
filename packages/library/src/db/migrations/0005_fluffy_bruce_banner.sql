ALTER TABLE `sites` ADD `summary` text AFTER `description`;--> statement-breakpoint
ALTER TABLE `sites` ADD `keywords` json AFTER `themes`;