var countSubstring = function (string, word) {
  var objString = {};
   var substrings = string.split(word);
   objString.count = substrings.length - 1;
   if( 0 === objString.count) 
      return -1;
   objString.lastIndex = string.lastIndexOf(word);
   return objString;
}
console.log( countSubstring('I live in India', 'i') );
