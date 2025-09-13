import { defineConstants } from "@mingull/constants";
import { StatefulSchema } from "@mingull/constants/utils";
import { routing } from "@/i18n/routing";
import { z } from "zod";

const ErrorPageSchema = z.object({
	code: z.number().int().positive(),
	text: z.string().min(1),
});

const ModalSchema = z.object({
	TITLE: z.string().min(1),
	DESCRIPTION: z.string().min(1),
	CONFIRM: z.string().min(1),
	CANCEL: z.string().min(1),
});

export const schema = z
	.object({
		TITLE: z.string().min(1),
		SUBTITLE: z.string().min(1),
		SUMMARY: z.string().min(1),
		DESCRIPTION: z.array(z.string().min(1)),
		KEYWORDS: z.array(z.string().min(1)),
		TOOLTIPS: z.record(z.string().min(1), z.string().min(1)),
		LOADING_STATES: z.array(StatefulSchema(["leaderboard", "streaks", "auth", "stats", "history", "workouts", "profile", "dashboard", "general"], { texts: z.array(z.string().min(1)) })),
		SUCCESS_STATES: z.array(StatefulSchema([["auth", ["sign-in", "sign-up"]]], { texts: z.array(z.string().min(1)) })),
		ERROR_STATES: z.array(StatefulSchema([["auth", ["sign-in", "sign-up"]], "unknown"], { texts: z.array(z.string().min(1)) })),
		MODALS: z.object({
			CONFIRM_LOGOUT: ModalSchema,
			DELETE_ACCOUNT: ModalSchema,
		}),
		ERROR_PAGES: z.object({
			NOT_FOUND: ErrorPageSchema,
			SERVER_ERROR: ErrorPageSchema,
			UNAUTHORIZED: ErrorPageSchema,
			FORBIDDEN: ErrorPageSchema,
		}),
	})
	.strict();

export const constants = defineConstants({
	routing,
	schema,
	shared: {
		TITLE: "Repulse",
		KEYWORDS: ["Repulse", "fitness tracker", "workout logger", "superhero streaks", "PR tracker", "stat dashboard", "gym leaderboard", "Next.js fitness app"],
	},
	en: {
		SUBTITLE: "Track. Train. Triumph. Your command center for gains, stats, and streak dominance.",
		SUMMARY: "Welcome to Repulse, your not-so-humble sidekick for tracking workouts, smashing streaks, and flexing on your friends. Designed for fitness freaks with a flair for flair.",
		DESCRIPTION: [
			"Repulse is your personal command center. Built to log sets, track streaks, and push PRs harder than a Kryptonian leg day.",
			"Crush your lifts, outwork your rivals, and get roasted if you dare slack off. Stats don't lie and neither do the leaderboards.",
			"Engineered with Next.js, armed with shadcn/ui, and guarded by BetterAuth. This isn't just fitness, this is your heroic journey.",
			"Side effects may include: increased strength, boosted ego, and spontaneous mirror flexing. Proceed like a legend.",
		],
		TOOLTIPS: {
			FEATURE_FLAG: "Toggle experimental features. May cause spontaneous PRs or spontaneous confusion.",
			LOGS: "Relive your origin story. Every lift, logged. Every streak, tracked.",
			SAVE_CHANGES: "Save your gains or risk falling into the Multiverse of Missed Progress.",
			STREAKS: "Because true heroes never skip a day. Track your consistency like a training montage.",
			WORKOUT_STATS: "Visualize your transformation arc—no radioactive spiders required.",
			LEADERBOARD: "Ascend the charts and claim your rightful place on Mount Flexmore.",
			PROFILE_SETTINGS: "Customize your secret identity... and maybe your theme song.",
			REST_DAYS: "Plan your recovery days. Even gods need naps after leg day.",
			SHARE_PROGRESS: "Brag responsibly. Share your gains, not just your smoothies.",
			DELETE_ACCOUNT: "Snap your account out of existence. Proceed with Thanos-like certainty.",
		},
		LOADING_STATES: [
			{ type: "leaderboard", texts: ["Assembling power rankings...", "Measuring friend flex factor...", "Calculating gym dominance..."] },
			{ type: "streaks", texts: ["Analyzing streaks...", "Measuring dedication levels...", "Detecting workout dodging..."] },
			{ type: "auth", texts: ["Verifying superhero ID...", "Checking credentials with SHIELD...", "Loading your alter ego..."] },
			{ type: "stats", texts: ["Crunching numbers...", "Plotting your power curve...", "Tracking muscle progression..."] },
			{ type: "history", texts: ["Opening your fitness archive...", "Rewinding reps...", "Highlighting your finest moments..."] },
			{ type: "workouts", texts: ["Loading your next mission...", "Equipping today's workout loadout...", "Bracing your muscles..."] },
			{ type: "profile", texts: ["Syncing secret identity...", "Updating hero stats...", "Polishing your public profile..."] },
			{ type: "dashboard", texts: ["Powering up your dashboard...", "Reassembling your data...", "Centering your command console..."] },
			{
				type: "general",
				texts: ["Repulsor engines charging...", "Fetching hero data...", "Activating gain protocol...", "Prepping gym intelligence module...", "Fueling up your fitness feed..."],
			},
		],
		SUCCESS_STATES: [
			{ type: "auth:sign-in", texts: ["Welcome back, hero!", "Identity verified. Ready to lift!", "Authentication successful, time to conquer."] },
			{ type: "auth:sign-up", texts: ["Welcome aboard, hero!", "Registration complete. Your journey begins!", "Account created. Let's get those gains!"] },
		],
		ERROR_STATES: [
			{ type: "auth:sign-in", texts: ["Invalid credentials. Please try again.", "Authentication failed. Are you even a hero?", "Oops! Something went wrong."] },
			{ type: "auth:sign-up", texts: ["Registration failed. Check your details.", "Sign-up error. Are you sure you're a hero?", "Something went wrong during sign-up."] },
			{ type: "unknown", texts: ["An unknown error occurred. Please try again later.", "Unexpected issue. Our team is on it.", "Something went wrong. We're investigating."] },
		],
		MODALS: {
			CONFIRM_LOGOUT: {
				TITLE: "Leave the Lair?",
				DESCRIPTION: "Logging out now will end your heroic streak... or just your session.",
				CONFIRM: "Log out anyway",
				CANCEL: "Stay and lift",
			},
			DELETE_ACCOUNT: {
				TITLE: "Snap It Out of Existence?",
				DESCRIPTION: "This will delete your account and all heroic history. Are you sure?",
				CONFIRM: "Delete My Legacy",
				CANCEL: "I changed my mind",
			},
		},
		ERROR_PAGES: {
			NOT_FOUND: { code: 404, text: "Page not found. Maybe it skipped leg day and vanished in shame." },
			SERVER_ERROR: { code: 500, text: "Server blew a fuse mid-rep. Applying ice, rebooting core systems..." },
			UNAUTHORIZED: { code: 401, text: "Hold up, hero. You need credentials to enter this training base." },
			FORBIDDEN: { code: 403, text: "This zone is restricted, even to enhanced individuals like yourself." },
		},
	},
	nl: {
		SUBTITLE: "Track. Concurreer. Herhaal. Jouw Stark-waardige commandocentrum voor reps, streaks en statistische dominantie.",
		SUMMARY:
			"Welkom bij Repulse: de licht sarcastische kracht-tracker die je niet wist dat je nodig had. Log je workouts, bouw streaks op, volg je eigen progressie en versla je vrienden moeiteloos op het leaderboard. Dit is geen fitness-app. Dit is een missie-logboek.",
		DESCRIPTION: [
			"Ontmoet Repulse, een workout tracker met net genoeg attitude om je erop te wijzen als je been-dag overslaat.",
			"Van dagelijkse toewijding tot PR-glorie, dit dashboard is jouw hub voor stats, streaks en subtiele flexmomenten.",
			"Gebouwd met Next.js, strak gestyled met shadcn/ui, en beveiligd door BetterAuth (want gains zijn heilig). Jij brengt het zweet, Repulse brengt de statistieken.",
			"Disclaimer: Gebruik van Repulse kan leiden tot overmatige competitie, spierpijn en arrogante screenshots. Ga als een held te werk.",
		],
		TOOLTIPS: {
			FEATURE_FLAG: "Schakel dit in als je functies wilt testen waar zelfs Stark zijn twijfels bij heeft.",
			PROJECTS: "Jouw workout programma’s en routines. Stel ze samen als een missieplan.",
			LOGS: "Je volledige workoutlog. Geen ontsnappen aan gemiste sessies hier.",
			RESTART_SERVICE: "Als je twijfelt, herstart de server. Werkt altijd voor Jarvis.",
			SAVE_CHANGES: "Bewaar je genialiteit of je fouten. Het wordt hoe dan ook vastgelegd.",
			STREAKS: "Dagelijks, wekelijks, maandelijks, jaarlijks – hoe vaak laat je jezelf echt zien?",
			WORKOUT_STATS: "Zie hoe vaak je elke oefening hebt gedaan. En misschien waarom je knieën pijn doen.",
			LEADERBOARD: "Klim omhoog. Word de held die je gymgroep verdient.",
		},
		LOADING_STATES: [
			{ type: "leaderboard", texts: ["Kalibreren van ego-boost leaderboard...", "Je rangschikken ten opzichte van vrienden...", "Flexpunten tellen..."] },
			{ type: "streaks", texts: ["Analyseren van streak-variabelen...", "Dagelijkse inzet meten...", "Zoeken naar gemiste workouts..."] },
			{ type: "auth", texts: ["Beoordelen van je heldencredentials...", "Controleren of je waardig bent...", "Identiteitsprofiel aanscherpen..."] },
			{ type: "stats", texts: ["Cijfers kraken...", "Vooruitgangskrommen plotten...", "Je vergelijken met jezelf uit het verleden..."] },
			{ type: "history", texts: ["Door de archieven graven...", "Je inspanningen frame voor frame herbeleven...", "De hoogtepunten ophalen..."] },
			{ type: "workouts", texts: ["Je volgende set laden...", "Het pijnmenu openen...", "Vandaag's routine uitpakken..."] },
			{ type: "profile", texts: ["Profielgegevens synchroniseren...", "Je alter ego updaten...", "Je publieke stats polijsten..."] },
			{ type: "dashboard", texts: ["Je dashboard samenstellen...", "Het commandocentrum voeden...", "Je streaks, stats en sass samenvoegen..."] },
			{
				type: "general",
				texts: ["Repulsorsystemen opwarmen...", "Je zweetdata synchroniseren...", "Je fitnessfeed voeden...", "Je volgende PR berekenen...", "Je workoutwijsheid laden..."],
			},
		],
		SUCCESS_STATES: [{ type: "auth:sign-in", texts: ["Welkom terug, held!", "Je bent geverifieerd. Klaar voor actie!", "Authenticatie succesvol."] }],
		ERROR_STATES: [
			{ type: "auth:sign-in", texts: ["Ongeldige inloggegevens. Probeer het opnieuw.", "Authenticatie mislukt. Ben je wel een held?", "Oeps! Er ging iets mis."] },
			{ type: "auth:sign-up", texts: ["Registratie mislukt. Controleer je gegevens.", "Aanmeldfout. Ben je zeker dat je een held bent?", "Er ging iets mis tijdens het aanmelden."] },
			{ type: "unknown", texts: ["Een onbekende fout is opgetreden. Probeer het later opnieuw.", "Onverwacht probleem. Ons team is ermee bezig.", "Er ging iets mis. We onderzoeken het."] },
		],
		MODALS: {
			CONFIRM_LOGOUT: {
				TITLE: "Leave the Lair?",
				DESCRIPTION: "Logging out now will end your heroic streak... or just your session.",
				CONFIRM: "Log out anyway",
				CANCEL: "Stay and lift",
			},
			DELETE_ACCOUNT: {
				TITLE: "Snap It Out of Existence?",
				DESCRIPTION: "This will delete your account and all heroic history. Are you sure?",
				CONFIRM: "Delete My Legacy",
				CANCEL: "I changed my mind",
			},
		},
		ERROR_PAGES: {
			NOT_FOUND: { code: 404, text: "Deze pagina heeft z'n workout gemist. Of het heeft het nooit geprobeerd. Totale reps: 0." },
			SERVER_ERROR: { code: 500, text: "De server heeft een spier verrekt. We gaan koelen, masseren en rebooten." },
			UNAUTHORIZED: { code: 401, text: "Toegang geweigerd. Je hebt een geldige login of een SHIELD-pas nodig." },
			FORBIDDEN: { code: 403, text: "Geen toegang. Dit gebied is verboden terrein, zelfs voor verbeterde individuen." },
		},
	},
});
