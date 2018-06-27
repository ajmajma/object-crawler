window.objectNodeCheck = {};

const createNestedObject = function(base = {}, names) {
  for (let i = 0; i < names.length; i++) {
    base = base[names[i]] = base[names[i]] || {};
  }
};

function constructObject(iterator) {
  createNestedObject(window.objectNodeCheck, iterator);
}

export function tracePropAccess(obj, path = []) {
  return new Proxy(obj, {
    get(target, propKey, receiver) {
      const temp = Reflect.get(target, propKey, receiver);
      const newPath = path.concat(propKey);

      if ((temp && typeof temp === "object") || typeof temp === Array) {
        return tracePropAccess(temp, newPath);
      }

      constructObject(newPath);
      return temp;
    }
  });
}

// To use - re-assign your object
// check window.objectNodeCheck

// const testObj = {
//   a: 1,
//   b: {
//     a: "no",
//     b: "yes"
//   },
//   c: {
//     a: "green",
//     b: {
//       a: "blue",
//       b: "orange"
//     }
//   }
// };

// const tracer = tracePropAccess(testObj);

// tracer.b.a;

// tracer.a;

// tracer.c.b.a;

// print out
// console.log(window.objectNodeCheck);
