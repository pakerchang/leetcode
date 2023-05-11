/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 *
 * @param {function[]} functions
 * @return {number}
 * @description
 * 算是一種解構嵌套的過程，其內執行狀況相當於：
 *  解構 functions 並按照 index 遞增並將 x 逐次 props 進去
 */

/**
 * const fn = compose([ x => x + 1, g => g * g, h => 2 * x])
 * 展開則是 f(g(h(4))) -> f(x) -> g(x * x) -> h(2 * x)
 * 執行則是逆向回來，所以是傳參顯示則是：
 *   h(2 * 4) => g(8 * 8) => f(8 + 1) => 65
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0)
    return function (x) {
      return x;
    };
  return function (x: number): number {
    // Other way without reduce,
    // return functions.reduceRight((result, fn) => fn(result), x);

    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);

console.log(fn(4));
