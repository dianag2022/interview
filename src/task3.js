function extractValuesForKey(object, value) {
    console.log(object.constructor.name)

    if(object.constructor !== Object) {
        throw new TypeError('extractValuesForKey() can only operate on object with Object as constructor');
    }
    let resultMap = new Map();
    let newPath = '';
    var path = [];

    function search(myObject) {
        for (var key in myObject) {
            path.push(key);
            if(key === value) {
                if(path.length > 1) newPath = path.join('/');
                resultMap.set(newPath, myObject[key])
                path = [];
            }
            if(myObject[key].constructor === Object) {
                search(myObject[key]);
            }
        }
    }
    search(object);
    return resultMap;
}

const Myobject = {
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
const result1 = extractValuesForKey(Myobject, 'uuid');
console.log(result1);
