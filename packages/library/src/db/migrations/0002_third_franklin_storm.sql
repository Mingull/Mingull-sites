CREATE TABLE `repulse_exercises` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`type` enum('strength','cardio','flexibility') NOT NULL,
	`muscle_group_id` varchar(36) NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_exercises_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_friends` (
	`user_id` varchar(36) NOT NULL,
	`friend_id` varchar(36) NOT NULL,
	`status` enum('pending','accepted','blocked') NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_friends_user_id_friend_id_pk` PRIMARY KEY(`user_id`,`friend_id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_leaderboards` (
	`user_id` varchar(36),
	`type` enum('global','friends') NOT NULL,
	`score` int NOT NULL,
	`rank` int NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `repulse_muscle_groups` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_muscle_groups_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_nutrition_logs` (
	`user_id` varchar(36),
	`date` date NOT NULL,
	`calories` int NOT NULL,
	`protein_grams` int NOT NULL,
	`carbs_grams` int NOT NULL,
	`fats_grams` int NOT NULL,
	`notes` text,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime
);
--> statement-breakpoint
CREATE TABLE `repulse_profiles` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`weight` decimal(5,2) NOT NULL,
	`height` decimal(5,2) NOT NULL,
	`age` int NOT NULL,
	`gender` enum('male','female','other') NOT NULL,
	`goal` enum('gain','lose','maintain') NOT NULL,
	`activity_level` enum('none','very_low','low','medium','high','very_high') NOT NULL,
	`bio` text,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_profiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_streaks` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36),
	`type` enum('daily','weekly','monthly') NOT NULL,
	`current_streak` int NOT NULL,
	`longest_streak` int NOT NULL,
	`last_workout_date` date NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_streaks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_workout_sets` (
	`id` varchar(36) NOT NULL,
	`workout_id` varchar(36) NOT NULL,
	`exercise_id` varchar(36) NOT NULL,
	`set` int NOT NULL,
	`reps` int NOT NULL,
	`weight_kg` decimal(5,2) NOT NULL,
	`duration_seconds` int NOT NULL,
	`notes` text,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_workout_sets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `repulse_workouts` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36),
	`title` varchar(255) NOT NULL,
	`description` text,
	`date` timestamp NOT NULL,
	`duration` int NOT NULL,
	`mood` enum('great','good','okay','bad') NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`deleted_at` datetime,
	CONSTRAINT `repulse_workouts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
RENAME TABLE `collections` TO `pastelimency_collections`;--> statement-breakpoint
RENAME TABLE `paste_tags` TO `pastelimency_paste_tags`;--> statement-breakpoint
RENAME TABLE `pastes` TO `pastelimency_pastes`;--> statement-breakpoint
RENAME TABLE `tags` TO `pastelimency_tags`;--> statement-breakpoint
ALTER TABLE `pastelimency_collections` DROP FOREIGN KEY `collections_user_id_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `pastelimency_paste_tags` DROP FOREIGN KEY `paste_tags_paste_id_pastes_id_fk`;
--> statement-breakpoint
ALTER TABLE `pastelimency_paste_tags` DROP FOREIGN KEY `paste_tags_tag_id_tags_id_fk`;
--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` DROP FOREIGN KEY `pastes_user_id_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` DROP FOREIGN KEY `pastes_collection_id_collections_id_fk`;
--> statement-breakpoint
ALTER TABLE `pastelimency_collections` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `pastelimency_tags` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `pastelimency_collections` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `pastelimency_tags` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `repulse_exercises` ADD CONSTRAINT `repulse_exercises_muscle_group_id_repulse_muscle_groups_id_fk` FOREIGN KEY (`muscle_group_id`) REFERENCES `repulse_muscle_groups`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_friends` ADD CONSTRAINT `repulse_friends_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_friends` ADD CONSTRAINT `repulse_friends_friend_id_users_id_fk` FOREIGN KEY (`friend_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_leaderboards` ADD CONSTRAINT `repulse_leaderboards_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_nutrition_logs` ADD CONSTRAINT `repulse_nutrition_logs_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_profiles` ADD CONSTRAINT `repulse_profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_streaks` ADD CONSTRAINT `repulse_streaks_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_workout_sets` ADD CONSTRAINT `repulse_workout_sets_workout_id_repulse_workouts_id_fk` FOREIGN KEY (`workout_id`) REFERENCES `repulse_workouts`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `repulse_workouts` ADD CONSTRAINT `repulse_workouts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastelimency_collections` ADD CONSTRAINT `pastelimency_collections_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastelimency_paste_tags` ADD CONSTRAINT `pastelimency_paste_tags_paste_id_pastelimency_pastes_id_fk` FOREIGN KEY (`paste_id`) REFERENCES `pastelimency_pastes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastelimency_paste_tags` ADD CONSTRAINT `pastelimency_paste_tags_tag_id_pastelimency_tags_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `pastelimency_tags`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` ADD CONSTRAINT `pastelimency_pastes_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastelimency_pastes` ADD CONSTRAINT `pastelimency_pastes_collection_id_pastelimency_collections_id_fk` FOREIGN KEY (`collection_id`) REFERENCES `pastelimency_collections`(`id`) ON DELETE set null ON UPDATE no action;