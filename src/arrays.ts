////////////////////////////////
//           Types            //
////////////////////////////////
export type RecursiveArray<T> = Array<RecursiveArray<T> | T>;

////////////////////////////////
//           Basics           //
////////////////////////////////
/**
 * Checks if an array is empty.
 *
 * @param arr - The array to check.
 * @returns `true` if the array is empty, `false` otherwise.
 */
export const isEmpty = <T>(arr: T[]): arr is [] => arr.length === 0;

////////////////////////////////
//           Index            //
////////////////////////////////
/**
 * Returns the first index of an array (`-1` if the array is empty).
 *
 * @param arr - The array to check.
 * @returns The first index (`0`) if the array is not empty, otherwise `-1`.
 */
export const firstIndex = <T>(arr: T[]): number => (isEmpty(arr) ? -1 : 0);

/**
 * Checks if an index is the first index of an array (`false` if the array is empty).
 *
 * @param arr - The array to check.
 * @param index - The index to check.
 * @returns `true` if the index is the first index of the array, otherwise `false`.
 */
export const isFirstIndex = <T>(arr: T[], index: number): boolean =>
  isEmpty(arr) ? false : index === firstIndex(arr);

/**
 * Returns the last index of an array (`-1` if the array is empty).
 *
 * @param arr - The array to get the last index from.
 * @returns The last index of the array.
 */
export const lastIndex = <T>(arr: T[]): number => arr.length - 1;

/**
 * Checks if an index is the last index of an array (`false` if the array is empty).
 *
 * @param arr - The array to check.
 * @param index - The index to check.
 * @returns `true` if the index is the last index of the array, otherwise `false`.
 */
export const isLastIndex = <T>(arr: T[], index: number): boolean =>
  isEmpty(arr) ? false : index === lastIndex(arr);

////////////////////////////////
//           Items            //
////////////////////////////////
/**
 * Returns the first item of an array (`null` if the array is empty).
 *
 * @param arr - The array from which to retrieve the first item.
 * @returns The first item of the array, or `null` if the array is empty.
 */
export const firstItem = <T>(arr: T[]): T | null =>
  isEmpty(arr) ? null : arr[0]!;

/**
 * Returns the last item in an array (`null` if the array is empty).
 *
 * @param arr The array from which to retrieve the last item.
 * @returns The last item in the array, or `null` if the array is empty.
 */
export const lastItem = <T>(arr: T[]): T | null =>
  isEmpty(arr) ? null : arr[lastIndex(arr)]!;

/**
 * Returns the nth item from an array (`null` if the index is out of bounds).
 *
 * @param arr - The array from which to retrieve the item.
 * @param n - The index of the item to retrieve.
 * @returns The nth item from the array if it exists, otherwise null.
 */
export const nthItem = <T>(arr: T[], n: number): T | null =>
  n >= 0 && n < arr.length ? arr[n]! : null;

////////////////////////////////
//        Intersection        //
////////////////////////////////
/**
 * Computes the intersection of multiple arrays.
 *
 * @param arrays - The arrays to intersect.
 * @returns An array containing the elements that are present in all of the input arrays.
 *
 * @example
 * ```typescript
 * const result = intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * console.log(result); // Output: [3]
 * ```
 */
export const intersection = <T>(...arrays: T[][]): T[] => {
  if (isEmpty(arrays)) return [];
  return arrays.reduce((acc, arr) => acc.filter((v) => arr.includes(v)));
};

/**
 * Checks if there is any intersection between multiple arrays.
 *
 * @param arrays - The arrays to check for intersection.
 * @returns `true` if there is at least one common element in all arrays, `false` otherwise.
 */
export const haveIntersection = <T>(...arrays: T[][]): boolean =>
  !isEmpty(intersection(...arrays));

////////////////////////////////
//         Duplicates         //
////////////////////////////////
/**
 * Removes duplicate elements from an array.
 *
 * @param arr - The array from which duplicates should be removed.
 * @returns A new array with duplicate elements removed.
 */
export const removeDuplicates = <T>(arr: T[]): T[] => Array.from(new Set(arr));

/**
 * Removes duplicates from an array of objects based on a specified key. Keeps the first occurrence of each key.
 *
 * @param arr - The array of objects.
 * @param key - The key to compare for duplicates.
 * @returns The array with duplicates removed.
 */
export const removeDuplicatesByKey = <T>(arr: T[], key: keyof T): T[] => {
  const seen = new Set();
  return arr.filter((obj) => {
    const value = obj[key];
    return seen.has(value) ? false : seen.add(value);
  });
};
