/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible.
 * The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * count(): returns the count of un-expired keys.
 */


class TimeLimitedCache {
  private cache: Map<number, { value: number; timer: ReturnType<typeof setTimeout> }>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const result: boolean = this.cache.has(key);
    if (result) clearTimeout(this.cache.get(key)?.timer);
    this.cache.set(key, {
      value,
      timer: setTimeout(() => {
        this.cache.delete(key);
      }, duration),
    });
    return result;
  }

  get(key: number): number {
    return this.cache.get(key)?.value || -1;
  }

  count(): number {
    return this.cache.size;
  }
}
