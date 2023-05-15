/**
 * Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
 */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

const t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
