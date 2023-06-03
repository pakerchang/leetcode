/**
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
 * A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
 * A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array.
 * This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
 * Please solve it without the built-in Array.flat method.
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

/**
 * @description 額外創建一個 params depth 為了寄存目前扁平化的層次位置，利用遞迴的方式重新執行 Array 對象
 * @param arr
 * @param n
 * @param depth
 * @returns
 */
const flat = (arr: MultiDimensionalArray, n: number, depth: number = 0): number[] => {
  let result: number[] = [];
  for (const el of arr) {
    if (Array.isArray(el) && depth < n) {
      /**
       * 當發現遍歷對象是 Array, 同時遍歷層次為到達指定深度時，進行子層的遍歷並將其輸出到新的
       */
      result = result.concat(flat(el as MultiDimensionalArray, n, depth + 1));
    } else {
      result.push(el as number);
    }
  }
  return result;
};
