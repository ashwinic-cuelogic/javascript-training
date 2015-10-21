var obj = {'function':10, 
           alert :  function() {
           console.log('hii');
          }
};
obj.alert();
console.log(obj.function);
