/**
 * Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.
 * Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.
 * For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.
 * You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.
 */

type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  // const result: unknown[] = [];
  // new Promise((resolve) => {
  //   for (let i = 0; i < functions.length; i++) {
  //     const solved = functions[i];
  //     resolve(solved().then((resp) => result.push(resp)));
  //   }
  // });
  // return Promise.all(result);
  let i = 0;

  const worker = async () => {
    while (i < functions.length) {
      await functions[i++]();
    }
  };

  const workers = Array.from({ length: Math.min(n, functions.length) }, worker);
  return Promise.all(workers);
}

const sleep = (t) => new Promise((res) => setTimeout(res, t));

promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log);

// function promisePool(functions: F[], n: number): Promise<any> {
//   const iterator = functions[Symbol.iterator]();
//
//   let worker = async (): Promise<any> => {
//     for (const func of iterator) {
//       await func();
//     }
//   };
//
//   let workers: Promise<any>[] = [];
//   while (n-- > 0) {
//     workers.push(worker());
//   }
//
//   return Promise.all(workers);
// }type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const promises = new PromisePool(functions, n);
  return promises.start();
}

class PromisePool {
  private completed = 0;
  private index = 0;
  private resolve: () => void;

  constructor(private functions: F[], private n: number) {
    if (n < 1) this.n = 1;
    else if (n > functions.length) this.n = functions.length;
  }

  public async start(): Promise<void> {
    if (!this.functions.length) return Promise.resolve();
    for (let i = 0; i < this.n; i++) {
      const func = this.functions[i];
      this.runFunction(func);
    }
    this.index = this.n - 1;
    return new Promise((resolve) => (this.resolve = resolve));
  }

  private runFunction(func: F): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await func();

      // Check if complete
      this.completed++;
      if (this.completed === this.functions.length) {
        if (this.resolve) this.resolve();
      }

      // Run next
      this.index++;
      if (this.index < this.functions.length) {
        const nextFunc = this.functions[this.index];
        this.runFunction(nextFunc);
      }
    });
  }
}
