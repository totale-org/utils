import { describe, it, expect } from "vitest";
import { Nullish } from "../src/index.js";

describe("Basics", () => {
  describe("isUndefined", () => {
    it("should return true for undefined", () => {
      expect(Nullish.isUndefined(undefined)).toBe(true);
    });

    it("should return false for non-undefined values", () => {
      expect(Nullish.isUndefined([])).toBe(false);
      expect(Nullish.isUndefined({})).toBe(false);
      expect(Nullish.isUndefined(new Set())).toBe(false);
      expect(Nullish.isUndefined("string")).toBe(false);
      expect(Nullish.isUndefined(123)).toBe(false);
      expect(Nullish.isUndefined(true)).toBe(false);
      expect(Nullish.isUndefined(false)).toBe(false);
      expect(Nullish.isUndefined(null)).toBe(false);
    });
  });

  describe("isNull", () => {
    it("should return true for null", () => {
      expect(Nullish.isNull(null)).toBe(true);
    });

    it("should return false for non-null values", () => {
      expect(Nullish.isNull([])).toBe(false);
      expect(Nullish.isNull({})).toBe(false);
      expect(Nullish.isNull(new Set())).toBe(false);
      expect(Nullish.isNull("string")).toBe(false);
      expect(Nullish.isNull(123)).toBe(false);
      expect(Nullish.isNull(true)).toBe(false);
      expect(Nullish.isNull(false)).toBe(false);
      expect(Nullish.isNull(undefined)).toBe(false);
    });
  });

  describe("isNullish", () => {
    it("should return true for null", () => {
      expect(Nullish.isNullish(null)).toBe(true);
    });

    it("should return true for undefined", () => {
      expect(Nullish.isNullish(undefined)).toBe(true);
    });

    it("should return false for non-nullish values", () => {
      expect(Nullish.isNullish([])).toBe(false);
      expect(Nullish.isNullish({})).toBe(false);
      expect(Nullish.isNullish(new Set())).toBe(false);
      expect(Nullish.isNullish("string")).toBe(false);
      expect(Nullish.isNullish(123)).toBe(false);
      expect(Nullish.isNullish(true)).toBe(false);
      expect(Nullish.isNullish(false)).toBe(false);
    });
  });
});
