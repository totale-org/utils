////////////////////////////////
//           Types            //
////////////////////////////////
/**
 * Represents a type that recursively makes all properties of a record optional.
 *
 * @template T - The type to be transformed into a deeply partial type.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * A utility type that recursively makes all properties of a record required.
 *
 * @template T - The object type whose properties will be made required.
 *
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: DeepRequired<T[P]>;
};
