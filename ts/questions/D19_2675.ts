/**
 * 2675. Array of Objects to Matrix
 * Write a function that converts an array of objects arr into a matrix m.
 * arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.
 * The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects.
 * If there is nesting, the column names are the respective paths in the object separated by ".".
 * Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object.
 * If a given object doesn't contain a value for a given column, the cell should contain an empty string "".
 * The columns in the matrix should be in lexicographically ascending order.
 */

type MatrixReturnType = (string | number | boolean | null)[][];

function getPaths(input: any, path: string[] = []): string[][] {
  if (typeof input !== "object" || input === null) {
    return [path];
  }

  let paths: string[][] = [];
  for (const key in input) {
    const newPaths = getPaths(input[key], path.concat(key));
    paths = paths.concat(newPaths);
  }
  return paths;
}

function getValueByPath(input: any, path: string[]): string | number | boolean | null {
  let value = input;
  for (const key of path) {
    // We need to cast the key to a number if it can be a valid array index
    const index = isNaN(Number(key)) ? key : Number(key);
    value = value[index];
    if (value === undefined) {
      return "";
    }
  }
  return value;
}

function jsonToMatrix(arr: any[]): MatrixReturnType {
  const allPaths = arr
    .reduce((acc, cur) => acc.concat(getPaths(cur)), [] as string[][])
    .map((path) => path.join("."));

  const uniquePaths = Array.from(new Set<string>(allPaths)).sort();

  const matrix: MatrixReturnType = [uniquePaths as string[]];

  for (const obj of arr) {
    const row = uniquePaths.map((path) => getValueByPath(obj, path.split(".")));
    matrix.push(row);
  }

  return matrix;
}
