import { Records } from "../src/index.js";

////////////////////////////////
//        Type Checks         //
////////////////////////////////
const typeChecker = <T>(_: T) => null;

// DeepPartial
type FullRecord = {
  a: {
    b: {
      c: number;
    };
  };
};

typeChecker<Records.DeepPartial<FullRecord>>({});
typeChecker<Records.DeepPartial<FullRecord>>({ a: {} });
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: {} } });
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: { c: 1 } } });
// @ts-expect-error
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: { c: "1" } } });
// @ts-expect-error
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: { c: 1, d: 2 } } });
// @ts-expect-error
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: { c: 1 }, d: 2 } });
// @ts-expect-error
typeChecker<Records.DeepPartial<FullRecord>>({ a: { b: { c: 1 } }, d: 2 });

// DeepRequired
type PartialRecord = {
  a?: {
    b?: {
      c?: number;
    };
  };
};

typeChecker<Records.DeepRequired<PartialRecord>>({ a: { b: { c: 1 } } });
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({});
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({ a: {} });
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({ a: { b: {} } });
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({ a: { b: { c: 1, d: 2 } } });
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({ a: { b: { c: 1 }, d: 2 } });
// @ts-expect-error
typeChecker<Records.DeepRequired<PartialRecord>>({ a: { b: { c: 1 } }, d: 2 });
