/**
 * Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.
 * The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2.
 * For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object.
 * When comparing two arrays, the indices of the arrays are considered to be their keys.
 * The end result should be a deeply nested object where each leaf value is a difference array.
 * You may assume that both objects are the output of JSON.parse.
 */

function objDiff(obj1: any, obj2: any): any {
  if (obj1 === undefined || obj2 === undefined || obj1 === obj2) return {};
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return [obj1, obj2];
  if (!Object.keys(obj1).length && !Object.keys(obj2).length) return {};
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

  const diff: { [key: string]: any } = {};
  for (let key in obj1) {
    const result = objDiff(obj1[key], obj2[key]);
    if (Object.keys(result).length) {
      diff[key] = result;
    }
  }

  return diff;
}
