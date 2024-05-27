const sampleObject = {
  key1: "val1",
  key2: "val2",
  key3: "val3",
};

function objectMethods(obj) {
  console.log(" original obj : " + obj);

  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
  console.log(obj.hasOwnProperty("property")); //property=keys of the object
  let newObj = Object.assign({}, obj, { newProp: "newVal" }); //the {newProp:"newVal"} gets added to the given object obj
  console.log(newObj);
}

objectMethods(sampleObject);
