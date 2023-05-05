/**
 * @param {number[]} nums
 * @return {number}
 * @description Sign of the Product of an Array
 * There is a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * Return signFunc(product).
 */

function arraySign(nums) {
  if (nums.includes(0)) return 0;

  let product = 1;
  nums.forEach((item) => {
    product *= item;
  });
  return product < 0 ? -1 : 1;
}

console.log(product);
