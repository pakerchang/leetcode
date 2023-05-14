/**
 * Given a function fn, return a curried version of that function.
 * A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.
 * In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.
 */

// Curring 簡而言之便是將多個 parameters 逐一分離並將剩餘的 parameters 作為 callback function 的一部分 傳遞至下一層的 function,
// 而經過 Curring 的 function 在 params 預設總項被滿足前，只會作為預先宣告等待調用的 function 存在，直到 params 滿足或大於定義的 props 數
// 同時也可以將之預設宣告成不同實體，以不同 composable 的方式複用
// More Detail: https://zh.javascript.info/currying-partials
// 基本脈絡： 找出取得 parameters 全部內容的方式，並依照解構數量判斷是否繼續拆分或是回傳 funciton

function curries(fn: Function): Function {
  return function curried(...args) {
    if (args.length < fn.length) {
      return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
    }
    return fn(...args);
  };
}

// currying, recursion
function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length < fn.length) {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
    return fn(...args);
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
