//`counter++` 和 `counter += 1` 都是用於對變數進行增量操作的運算符，它們的差異在於它們的返回值和副作用的不同。

// 1. `counter++` 是後置遞增運算符。它會先返回原始的值，然後再將變數進行增量操作。例如，如果 `counter` 的值為 5，則 `counter++` 的結果將是 5，並且 `counter` 的值將變為 6。後置遞增運算符的副作用是會修改原始變數的值。

// 2. `counter += 1` 是賦值運算符的組合形式，表示將 `counter` 的值加上 1，然後將結果賦值給 `counter`。例如，如果 `counter` 的值為 5，則 `counter += 1` 的結果將是 6，並且 `counter` 的值也將變為 6。賦值運算符的副作用是同時修改變數的值。

// 總結而言，`counter++` 返回原始值並對變數進行增量操作，而 `counter += 1` 同時返回增量後的值並對變數進行增量操作。

/**
 * @param {number} n
 * @return {Function} counter
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
