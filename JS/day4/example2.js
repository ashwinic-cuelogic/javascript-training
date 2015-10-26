
var mark = {
    name: "Mark",
    age: 32
};

var ryan = { nationality : "Indian"};

var mergeObjects = function ( ObjectA, ObjectB ) {

  newobj = JSON.parse(JSON.stringify(ObjectA ));
  
 for (var property in ObjectB) { newobj[property] = ObjectB[property]; }
 
  return newobj;
}

var obj = mergeObjects( mark, ryan );
console.log(obj);
