var getDate = function(timestamp) {
var date = new Date(timestamp);
  console.log(date.getDate() + "/" + date.getMonth()+ "/" + date.getFullYear());
}
getDate(1378375440000);
