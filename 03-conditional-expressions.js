const prompt=require("prompt-sync")({sigint:true});
console.log(alert === window.alert); 

let a = prompt("Hey whats your age ?")
a=Number.parseInt(a) //coverting to number

if(a>0)
{
    // alert("This is a valid age")  works in browser
}
