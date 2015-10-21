'use strict';
calculate = function () {

 values = Array.prototype.slice.call(arguments);
 operator = values.shift();
  try {
    if( values.length < 2 ) throw 'Invalid arguments';
  }
  catch( error ) {
    console.log(error);
  }
  var result = values.reduce(function(previous, current){
    try {
      if ( ( 'number' != typeof current ) || ( 'number' != typeof previous ) ) {
        
        throw 'Not a number';
      }
    }
    catch( error ) {
      console.log(error);
    }
  return eval ( previous + operator + current );
  });
  
  console.log(result);
}


calculate('*',1,4,8);