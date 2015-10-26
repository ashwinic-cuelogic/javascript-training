Number.prototype.float = function() {
    return parseInt(this);
}
var a = 3.10;
console.log(a.float());
console.log(a);
