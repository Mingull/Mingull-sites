type CreateOptions = Partial<{
    random: () => number;
    counter: () => number;
    length: number;
    fingerprint: string;
}>;
/**
 * Wrapper for the \@paralleldrive/cuid2 library
 * Create a new CUID generator
 * @param options The options for the generator
 * @returns The CUID generator
 */
export declare const createCuidGenerator: (options?: CreateOptions) => {
    /**
     * Generate a new cuid2
     * @returns The generated cuid2 using the \@paralleldrive/cuid2 library
     */
    createId: () => string;
    /**
     * Check if the given string is a valid cuid2
     * @param cuid The string to check
     * @returns `true` if the string is a valid cuid2, `false` otherwise
     */
    isCuid: (cuid: string) => cuid is Cuid2;
    /**
     * Get the constants for the cuid2
     * @returns The constants for the cuid2
     */
    getConstants: () => {
        defaultLength: number;
        bigLength: number;
        maxLength: number | undefined;
    };
};
export type Cuid2 = string & {
    __brand: "cuid2";
};
export declare const createId: () => string, getConstants: () => {
    defaultLength: number;
    bigLength: number;
    maxLength: number | undefined;
}, isCuid: (cuid: string) => cuid is Cuid2;
export {};
//# sourceMappingURL=cuid2.d.ts.map