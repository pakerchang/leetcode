/**
 * Write a function that checks if a given value is an instance of a given class or superclass.
 * For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
 * There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.
 * @param obj
 * @param classFunction -- props class type
 */

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false;
  /**
   * with parameter classFunction
   */
  let objPrototype = Object.getPrototypeOf(obj);
  while (objPrototype !== null) {
    if (objPrototype.constructor === classFunction || typeof objPrototype === classFunction) return true;
    objPrototype = Object.getPrototypeOf(objPrototype);
  }
  return false;
}

function checkIfInstanceOf_2(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== "function") return false;
  const primitiveTypeMap = {
    boolean: Boolean,
    number: Number,
    string: String,
    symbol: Symbol,
    bigint: BigInt,
  };
  if (typeof obj in primitiveTypeMap && (primitiveTypeMap[typeof obj] === classFunction || classFunction === Object)) return true;
  return obj instanceof classFunction;
}
