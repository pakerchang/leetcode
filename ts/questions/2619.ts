/**
 * @description Array Prototype Last
 * @description Access into Array Prototype and add new function
 * Check Array content is empty
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}
Array.prototype.last = function <T>(): T | -1 {
  // 一開始是使用三元運算子，但這算是一種語法糖，在 runtime 上會比正常寫法多花上一些資源
  // 目前擺放的是一般寫法
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }

  // const length = this.length;
  //     if(!length) return -1;
  //     return this[length - 1]
  // 註解中使用的是先行取出陣列長度，取出後在使用 if 處理，某種原因造成這樣的 runtime 在變效率上會高過上面的程式碼
};

export {};
