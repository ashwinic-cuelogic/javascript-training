var mark = {
    name: "Mark",
    age: 32
};

var ryan = {};

var copyObjects = function ( sourceObj, destObj) {

  destObj = sourceObj;
  
  return destObj;
}

var obj = copyObjects( mark, ryan );
console.log(obj);
