import { describe, it, expect } from 'vitest';
import { Sets } from '../src';

describe('Sets.isSet', () => {
  it('should return true for Sets', () => {
    expect(Sets.isSet(new Set())).toBe(true);
    expect(Sets.isSet(new Set([1, 2, 3]))).toBe(true);
  });

  it('should return false for non-Set values', () => {
    expect(Sets.isSet([])).toBe(false);
    expect(Sets.isSet({})).toBe(false);
    expect(Sets.isSet('string')).toBe(false);
    expect(Sets.isSet(123)).toBe(false);
    expect(Sets.isSet(true)).toBe(false);
    expect(Sets.isSet(false)).toBe(false);
    expect(Sets.isSet(null)).toBe(false);
    expect(Sets.isSet(undefined)).toBe(false);
  });
});

describe('isEmpty', () => {
  it('should return true for an empty Set', () => {
    expect(Sets.isEmpty(new Set())).toBe(true);
  });

  it('should return false for non-empty Sets', () => {
    expect(Sets.isEmpty(new Set([1]))).toBe(false);
    expect(Sets.isEmpty(new Set([1, 2, 3]))).toBe(false);
  });
});
