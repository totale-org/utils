////////////////////////////////
//           Basics           //
////////////////////////////////
/**
 * Checks if a value is a string.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a string, otherwise `false`.
 */
export const isString = (value: unknown): value is string =>
  typeof value === "string";

/**
 * Checks if a string is empty.
 *
 * @param str - The string to check.
 * @returns `true` if the string is empty, otherwise `false`.
 */
export const isEmpty = (str: string): boolean => str.length === 0;

/**
 * Checks if a string is empty or contains only whitespace characters.
 *
 * @param str - The string to check.
 * @returns `true` if the string is empty or contains only whitespace characters, otherwise `false`.
 */
export const isEmptyTrimmed = (str: string): boolean => str.trim().length === 0;
