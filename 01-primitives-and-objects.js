//nn bb ss u - primitive data types
//null number boolean bigint string symbol undefined

let a=null
let b=345
let c=true;
let d=BigInt("345")+BigInt("5")
let e="vaibhav"
let f=Symbol("I am vaibhav")
let g=undefined // can also be written as (let g)

console.log(a,b,c,d,e,f,g)

console.log(typeof d) // to find type of a variable


//Objects - non primitive data types

const item={
    "Vaibhav":"yo",
    "harry":98
}

console.log(item["Vaibhav"])
console.log(item["harry"])