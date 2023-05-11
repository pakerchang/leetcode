/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

// 算是一種解構嵌套的過程，其內執行狀況相當於：
//  解構 functions 並按照 index 遞增並將 x 逐次 props 進去
//  所以帳面上嵌套的狀況相當於
//  functions = [f(x),g(x),h(x)]
//  解構嵌套後會轉換成 -> f(g(h(x)))
//  照著下面的 example 展開則是 -> f(x) -> g((x + 1) * (x + 1)) -> h( 2 * g)
//  執行則是從展開得最子層開始執行，遵循著傳參由右到左的特性

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x: number): number {
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
/**
 * const fn = compose([ x => x + 1, g => g * g ,h  => 2 * x])
 * fn(4) // 9
 * 展開則是 f(4) -> g(x * x) -> h(2 * x)
 * 執行則是逆向回來，所以是傳參顯示則是：
 *   h(2 * 4) => g(8 * 8) => f(8 + 1) => 65
 */
