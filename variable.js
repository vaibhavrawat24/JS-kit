let a=67 //defining variable in js
console.log(a)  //printing variable in js

a="vaibhav"  //changing a to string
console.log(a)

//let is block scopped
//var is globally scopped
//const cannot be redeclared or editted

var b="hehe"
let c="no"
const author="me"
// author="no"  //throws error because const cant be changed

{
    var b=97    //value of b is changed globally
    let c=78    //value of c inside the scope is changed
    console.log(b)
    console.log(c)
}

console.log(b)
console.log(c)