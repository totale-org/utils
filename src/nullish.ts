////////////////////////////////
//           Basics           //
////////////////////////////////
/**
 * Checks if a value is `undefined`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

/**
 * Checks if a value is strictly `null`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 */
export const isNull = (value: unknown): value is null => value === null;

/**
 * Checks if a value is `null` or `undefined`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 */
export const isNullish = (value: unknown): value is null | undefined =>
  isNull(value) || isUndefined(value);
