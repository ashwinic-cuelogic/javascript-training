'use strict';
var array = ['00','01','11','10','11','00'];
var arr = [[],[]];
var j = 0;
var k = 0;
var newarr = array.join("").split("");
for(i=0;i<newarr.length;i++){
  arr[0][j] = newarr[i];
  j++;
  arr[1][k] = newarr[++i];
  k++;  
}
 console.log(arr);
