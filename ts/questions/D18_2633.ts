/**
 * Given an object, return a valid JSON string of that object. You may assume the object only includes strings, integers, arrays, objects, booleans, and null.
 * The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().
 * Please solve it without using the built-in JSON.stringify method.
 */

function jsonStringify(obj: any): string {
  if (obj === null) return "null";

  if (typeof obj === "number" || typeof obj === "boolean") return String(obj);

  if (typeof obj === "string") return `"${obj}"`;

  if (Array.isArray(obj)) {
    let elements: string[] = [];
    for (const key in obj) {
      elements.push(jsonStringify(obj[key]));
    }
    return `[${elements.join(",")}]`;
  }

  const flatObj = Object.keys(obj);
  let elements: string[] = [];
  for (const key in flatObj) {
    const value = jsonStringify(obj[flatObj[key]]);
    elements.push(`"${flatObj[key]}":${value}`);
  }
  return `{${elements.join(",")}}`;
}
