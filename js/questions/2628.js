// 给定两个对象 o1 和 o2 ，请你检查它们是否 完全相等 。
//
// 对于两个 完全相等 的对象，它们必须包含相同的键，并且相关的值也必须 完全相等 。如果两个对象通过了 === 相等性检查，它们也被认为是 完全相等 的。
//
// 你可以假设这两个对象都是 JSON.parse 的输出。换句话说，它们是有效的 JSON 。
//
// 请你在不使用 lodash 的 _.isEqual() 函数的前提下解决这个问题。

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */

// function areDeeplyEqual(o1, o2) {
// 必須完全相等，包括基礎型別
// 可以不用按照順序
// type check 是嚴謹的，例如 string[] !==  number[]
// check param type
// 需要先排除 array, object
// }

var areDeeplyEqual = function (o1, o2) {
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  if (!isObject(o1) || !isObject(o2)) return o1 === o2;
  if (o1 === o2) return true;

  //此时 o1与o2 都是对象或者数组，而且不相等

  if (o1 instanceof Array !== o2 instanceof Array) return false;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  // 先取出 o1 和 o2 的key，比较个数
  if (o1 instanceof Array) {
    if (o1.length !== o2.length) return false;
  } else {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) return false;
  }

  // 递归比较
  for (let key in o1) {
    const res = areDeeplyEqual(o1[key], o2[key]);
    console.log(o1[key], o2[key]);
    if (!res) return false;
  }
  // 全相等
  return true;
};

areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] });
console.log(
  areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] })
);
