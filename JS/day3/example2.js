'use strict';
function Student( name, branch ) {
  this.name = name;
  this.branch = branch;
}
Student.prototype.printName = function() {
  return 'Name : - ' + this.name ;
}

ryan = new Student( 'Ryan', 'Computers');
console.log(ryan.printName());
mark = new Student( 'Mark', 'Computers');
console.log(mark.printName());
