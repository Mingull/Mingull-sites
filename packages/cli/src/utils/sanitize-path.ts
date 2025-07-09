export const sanitizePath = (input: string) => input.replace(/^\.?[\\/]+/, "").replace(/\\/g, "/");
