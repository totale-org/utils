import { describe, it, expect } from "vitest";
import { Strings } from "../src/index.js";

describe("Basics", () => {
  describe("isString", () => {
    it("should return true for strings", () => {
      expect(Strings.isString("")).toBe(true);
      expect(Strings.isString("hello")).toBe(true);
    });

    it("should return false for non-string values", () => {
      expect(Strings.isString([])).toBe(false);
      expect(Strings.isString({})).toBe(false);
      expect(Strings.isString(new Set())).toBe(false);
      expect(Strings.isString(123)).toBe(false);
      expect(Strings.isString(true)).toBe(false);
      expect(Strings.isString(false)).toBe(false);
      expect(Strings.isString(null)).toBe(false);
      expect(Strings.isString(undefined)).toBe(false);
    });
  });

  describe("isEmpty", () => {
    it("should return true for an empty string", () => {
      expect(Strings.isEmpty("")).toBe(true);
    });

    it("should return false for a non-empty string", () => {
      expect(Strings.isEmpty("hello")).toBe(false);
    });

    it("should return false for a string with only whitespace", () => {
      expect(Strings.isEmpty("   ")).toBe(false);
    });
  });

  describe("isEmptyTrimmed", () => {
    it("should return true for an empty string", () => {
      expect(Strings.isEmptyTrimmed("")).toBe(true);
    });

    it("should return true for a string with only whitespace", () => {
      expect(Strings.isEmptyTrimmed("   ")).toBe(true);
    });

    it("should return false for a non-empty string", () => {
      expect(Strings.isEmptyTrimmed("hello")).toBe(false);
    });

    it("should return false for a string with leading and trailing whitespace", () => {
      expect(Strings.isEmptyTrimmed("  hello  ")).toBe(false);
    });
  });
});
