const abc=()=>{
  console.log("hello")
}
abc();
const a=(a,b)=>{
  console.log(a+b)
}
a(10,20);
// (()=>{
//  console.log("kanchan")
// })();

const max=(a,b)=>(
  a>b?a:b)

console.log(max(10,12))

const arr=[10,20,34,293]
const sum=arr.reduce((a,b)=>
a+b)
console.log(sum)
