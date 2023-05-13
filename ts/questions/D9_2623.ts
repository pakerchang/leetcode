/**
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 * sum accepts two integers a and b and returns a + b.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

// type Fn = (...params: any) => any;

// function memoize(fn: Fn): Fn {
//   const cacheObj = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (key in cacheObj) {
//       return cacheObj[key];
//     } else {
//       const functionOutput = fn(...args);
//       cacheObj[key] = functionOutput;
//       return functionOutput;
//     }
//   };
// }

type Fn<T> = (...params: any) => T;

function memoize<T>(fn: Fn<T>): Fn<T> {
  const cache: Map<string, T> = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const result = cache.get(key);

    if (result !== undefined) return result;
    const val = fn(...args);
    cache.set(key, val);
    return val;
  };
}

// type Fn = (...params: any) => any
//
// function memoize(fn: Fn): Fn {
//     const memos = new Map<number, number>();
//     return function(...args) {
//         const k = args.reduce((a,c)=> a*100000+c);
//         const mv = memos.get(k);
//         if(mv != null){
//             return mv;
//         }
//         const v = fn(...args);
//         m.set(k,v);
//         return v;
//     }
// }
