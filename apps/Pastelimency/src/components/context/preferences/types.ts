export type Preference<T extends string = string> = {
	id: string;
	name: string;
} & (PreferenceString | PreferenceBoolean | PreferenceNumber | PreferenceList<T>);

type PreferenceString = {
	type: "string";
	defaultValue: string;
	value: string;
};
type PreferenceBoolean = {
	type: "boolean";
	defaultValue: boolean;
	value: boolean;
};
type PreferenceNumber = {
	type: "number";
	defaultValue: number;
	value: number;
};
type PreferenceList<TOptions extends string> = {
	type: "list";
	options: Required<TOptions[]>;
	defaultValue: NoInfer<TOptions>;
	value: NoInfer<TOptions>;
};

export type InitialPreference<T extends string = string> = { id: string; name: string } & (
	| InitPreferenceString
	| InitPreferenceBoolean
	| InitPreferenceNumber
	| InitPreferenceList<T>
);
type InitPreferenceString = {
	type: "string";
	defaultValue: string;
};
type InitPreferenceBoolean = {
	type: "boolean";
	defaultValue: boolean;
};
type InitPreferenceNumber = {
	type: "number";
	defaultValue: number;
};
type InitPreferenceList<TOptions extends string> = {
	type: "list";
	options: Readonly<TOptions[]>;
	defaultValue: NoInfer<TOptions>;
};
