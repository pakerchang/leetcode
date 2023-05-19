/**
 * Given a function fn and a time in milliseconds t, return a debounced version of that function.
 * A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters.
 * For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
 */
type F = (...p: any[]) => any;

/**
 * @function debounce
 * @param fn 
 * @param t 
 * @returns 
 * @description 因封裝調用，所以初始化時會先預設 time，並在調用後重新定義另一蹭 timeout，實際需求只要重置初始狀態的 timeout 即可
 * 所以只需要綁定一個 id 在 debounce 內讓 clearTimeout 可以找到對應的 Task 即可
 */
function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}
