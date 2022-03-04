function extractValuesForKey(object, value) {
  if (object.constructor !== Object) {
    throw new TypeError(
      "extractValuesForKey() can only operate on object with Object as constructor"
    );
  }
  let resultMap = new Map();
  let newPath = "";
  var path = [];

  function search(myObject) {
    for (var key in myObject) {
      path.push(key);
      if (key === value) {
        if (path.length > 1) {
          path.pop();
          newPath = path.join("/");
        }
        resultMap.set(newPath, myObject[key]);
        path = [];
      }
      if (myObject[key].constructor === Object) {
        search(myObject[key]);
      }
      path.pop();
    }
  }
  search(object);
  return resultMap;
}

const myObject = {
  uuid: 1,
  innerOne: {
    someKey: "some text",
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        uuid: 3,
      },
    },
  },
};
const result1 = extractValuesForKey(myObject, "uuid");
console.log(result1);

const myObject2 = {
  uuid: 1,
  innerOne: {
    someKey: "some text",
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        fourOther: {
          uuid: 3,
        },
      },
    },
  },
};
const result2 = extractValuesForKey(myObject2, "uuid");
console.log(result2);
