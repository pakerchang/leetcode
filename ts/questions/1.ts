/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param nums
 * @param target
 * @returns
 */

function twoSum(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    /**
     * 逆向求出 complement，透過等式 nums[i] + complement = target
     */
    const complement = target - nums[i];
    if (numMap.has(complement)) return [numMap.get(complement) as number, i];

    numMap.set(nums[i], i);
  }

  return [];
}
