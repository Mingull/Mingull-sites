import type { birthday } from "../server/birthday.js";
type BirthdayPlugin = typeof birthday;
export declare const birthdayClient: () => {
    id: "birthdayPlugin";
    $InferServerPlugin: ReturnType<BirthdayPlugin>;
};
export {};
//# sourceMappingURL=birthday.d.ts.map