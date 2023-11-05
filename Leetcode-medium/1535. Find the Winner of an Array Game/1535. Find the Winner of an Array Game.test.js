import { expect, it, describe } from 'vitest'
import { getWinner } from './1535. Find the Winner of an Array Game'

describe('getWinner', () => {

    // Returns the winner of the game when k is less than or equal to the length of the array
    it('should return the winner when k is less than or equal to the length of the array', () => {
      const arr = [2, 5, 3, 1, 6];
      const k = 3;
      const result = getWinner(arr, k);
      expect(result).toBe(5);
    });

    // Returns the only element in the array when k is equal to 1
    it('should return the only element in the array when k is equal to 1', () => {
      const arr = [2, 5, 3, 1, 6];
      const k = 1;
      const result = getWinner(arr, k);
      expect(result).toBe(5);
    });

    it('測試 K 等於10^9', () => {
        const arr = [1,11,22,33,44,55,66,77,88,99];
        const k = 1000000000;
        const result = getWinner(arr, k);
        expect(result).toBe(99);
      });
});
