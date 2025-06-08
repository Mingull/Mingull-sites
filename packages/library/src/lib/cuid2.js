import { getConstants as getConst, init } from "@paralleldrive/cuid2";
/**
 * Wrapper for the \@paralleldrive/cuid2 library
 * Create a new CUID generator
 * @param options The options for the generator
 * @returns The CUID generator
 */
export const createCuidGenerator = (options) => {
    const { length, ...rest } = options ?? { length: 24 };
    return {
        /**
         * Generate a new cuid2
         * @returns The generated cuid2 using the \@paralleldrive/cuid2 library
         */
        createId: init({ length, ...rest }),
        /**
         * Check if the given string is a valid cuid2
         * @param cuid The string to check
         * @returns `true` if the string is a valid cuid2, `false` otherwise
         */
        isCuid: checkCuid({ maxLength: length }),
        /**
         * Get the constants for the cuid2
         * @returns The constants for the cuid2
         */
        getConstants: () => ({ maxLength: length, ...getConst() }),
    };
};
const checkCuid = ({ minLength = 2, maxLength = 24 }) => (cuid) => {
    const length = cuid.length;
    const regex = /^[0-9a-z]+$/;
    try {
        if (typeof cuid === "string" && length >= minLength && length <= maxLength && regex.test(cuid))
            return true;
    }
    finally {
    }
    return false;
};
export const { createId, getConstants, isCuid } = createCuidGenerator({ length: 48 });
