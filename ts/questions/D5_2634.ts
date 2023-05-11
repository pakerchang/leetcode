/**
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
 * The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
 * Please solve it without the built-in Array.filter method.
 * @param {number[]} arr
 * @param {Function} fn
 * @returns {number[]}
 */

type FilterType<T> = (n: T, i: number) => boolean;

function filterCase<T>(arr: T[], fn: FilterType<T>): T[] {
  const filterResult: T[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterResult.push(arr[i]);
    }
  }
  return filterResult;
}

// without generic
function filterCase2(
  arr: number[],
  fn: (n: number, i: number) => any
): number[] {
  const filterResult: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filterResult.push(arr[i]);
  }
  return filterResult;
}
