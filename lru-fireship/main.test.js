import { expect, test } from 'vitest';
import { cumulativeSum } from './cumSum';

test('cumulative sum of an array', () => {
  // write the expect statements
  expect(cumulativeSum([1, 2, 3, 4, 5])).toBe(15);
  expect(cumulativeSum([-2, -4, -8])).toBe(-14);
});
