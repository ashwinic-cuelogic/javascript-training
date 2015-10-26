Number.prototype.float = function() {
    return this.toFixed(2);
}
var a = 3;
console.log(a.float());
console.log(a);
