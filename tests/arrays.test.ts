import { test, expect, describe } from 'vitest';
import { Arrays } from '../src/index.js';

describe('Basics', () => {
  describe('isEmpty', () => {
    test('returns true for an empty array', () => {
      expect(Arrays.isEmpty([])).toBe(true);
    });

    test('returns false for a non-empty array', () => {
      expect(Arrays.isEmpty([1])).toBe(false);
    });
  });
});

describe('Index', () => {
  describe('lastIndex', () => {
    test('returns -1 for an empty array', () => {
      expect(Arrays.lastIndex([])).toBe(-1);
    });

    test('returns the last index for a non-empty array', () => {
      expect(Arrays.lastIndex([1, 2, 3])).toBe(2);
    });
  });

  describe('isLastIndex', () => {
    test('returns false for an empty array', () => {
      expect(Arrays.isLastIndex([], 0)).toBe(false);
    });

    test('returns true if the index is the last index', () => {
      expect(Arrays.isLastIndex([1, 2, 3], 2)).toBe(true);
    });

    test('returns false if the index is not the last index', () => {
      expect(Arrays.isLastIndex([1, 2, 3], 1)).toBe(false);
    });
  });
});

describe('Items', () => {
  describe('firstItem', () => {
    test('returns null for an empty array', () => {
      expect(Arrays.firstItem([])).toBe(null);
    });

    test('returns the first item for a non-empty array', () => {
      expect(Arrays.firstItem([1, 2, 3])).toBe(1);
    });
  });

  describe('lastItem', () => {
    test('returns null for an empty array', () => {
      expect(Arrays.lastItem([])).toBe(null);
    });

    test('returns the last item for a non-empty array', () => {
      expect(Arrays.lastItem([1, 2, 3])).toBe(3);
    });
  });

  describe('nthItem', () => {
    test('returns null for a negative index', () => {
      expect(Arrays.nthItem([1, 2, 3], -1)).toBe(null);
    });

    test('returns null if the index is out of bounds', () => {
      expect(Arrays.nthItem([1, 2, 3], 3)).toBe(null);
    });

    test('returns the nth item if it exists', () => {
      expect(Arrays.nthItem([1, 2, 3], 1)).toBe(2);
    });
  });
});

describe('Intersection', () => {
  describe('intersection', () => {
    test('returns an empty array for no arguments', () => {
      expect(Arrays.intersection()).toEqual([]);
    });

    test('returns an empty array for multiple empty arrays', () => {
      expect(Arrays.intersection([], [], [])).toEqual([]);
    });

    test('returns full array for one array', () => {
      expect(Arrays.intersection([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('returns an empty array if there are no common elements', () => {
      expect(Arrays.intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    test('returns the common elements between two arrays', () => {
      expect(Arrays.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
  });

  describe('haveIntersection', () => {
    test('returns false for no arguments', () => {
      expect(Arrays.haveIntersection()).toBe(false);
    });

    test('returns false for multiple empty arrays', () => {
      expect(Arrays.haveIntersection([], [], [])).toBe(false);
    });

    test('returns false if there are no common elements', () => {
      expect(Arrays.haveIntersection([1, 2, 3], [4, 5, 6])).toBe(false);
    });

    test('returns true if there are common elements', () => {
      expect(Arrays.haveIntersection([1, 2, 3], [2, 3, 4])).toBe(true);
    });
  });
});

describe('Duplicates', () => {
  describe('removeDuplicates', () => {
    test('returns an empty array for an empty array', () => {
      expect(Arrays.removeDuplicates([])).toEqual([]);
    });

    test('returns the same array if there are no duplicates', () => {
      expect(Arrays.removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('removes duplicates from the array', () => {
      expect(Arrays.removeDuplicates([1, 2, 3, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('removeDuplicatesByKey', () => {
    test('returns an empty array for an empty array', () => {
      expect(Arrays.removeDuplicatesByKey([], 'id')).toEqual([]);
    });

    test('returns the same array if there are no duplicates', () => {
      expect(
        Arrays.removeDuplicatesByKey([{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
      ).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    test('removes duplicates from the array (keeps first occurrence)', () => {
      expect(
        Arrays.removeDuplicatesByKey(
          [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' },
            { id: 2, name: 'David' },
            { id: 3, name: 'Eve' },
          ],
          'id',
        ),
      ).toEqual([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ]);
    });
  });
});
