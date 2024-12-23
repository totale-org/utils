////////////////////////////////
//           Basics           //
////////////////////////////////
/**
 * Checks if a value is a set.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a set, otherwise `false`.
 */
export const isSet = <T>(value: unknown): value is Set<T> =>
  value instanceof Set;

/**
 * Checks if a set is empty.
 *
 * @param set - The set to check.
 * @returns `true` if the set is empty, otherwise `false`.
 */
export const isEmpty = <T>(set: Set<T>): set is Set<never> => set.size === 0;
