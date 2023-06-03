/**
 * Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subArrays each of length size.
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 * Please solve it without using lodash's _.chunk function.
 */

function chunk(arr: any[], size: number): any[][] {
  // 根據 arr.length / size 的結果生成一個迴圈，依照 size 的長度將等數內容包裝成一個子陣列，假如 size 不能整除 arr 則最後一筆子陣列必須小於 size
  // 透過 slice 切割陣列，但需要記錄最後切割的 index 並 +1，同時這件事情需要在 slice 被切割完之前持續運作下去
  const chunkArr: any[] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
}
