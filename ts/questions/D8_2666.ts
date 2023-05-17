/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 */
// 基本思路是建立一個 State 監管執行的 function 在初始化後是否被執行過，所以需要額外新增一個變數，當 function 被執行後更新，並攔阻之後的呼叫

function checkOnce(): { isFunctionExecuted: boolean; setExecute: () => void } {
  let isFunctionExecuted = false;
  function setExecute() {
    isFunctionExecuted = true;
  }
  // 因為 once 的調用，實際上 isFunctionExecuted 的值並不會繼承下來，在 once 調用時會重新建立 checkOnce 的實例，以致於 isFunctionExecuted 的值始終會是 false
  // 導致攔阻並不會真的發生
  return { isFunctionExecuted, setExecute };
}

function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  // const { isFunctionExecuted, setExecute } = checkOnce();
  let isFunctionExecuted = false;
  return function (...args) {
    if (isFunctionExecuted) return undefined;
    // setExecute();
    isFunctionExecuted = true;
    return fn(...args);
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 * Output: [{"calls":1,"value":6},{"calls":2,"value":11}]
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
