// 

console.log(a.push(500))
console.log(a.push(600))
console.log(a.push(700))
a.pop()
console.log(a)
for(let i in a)
{
  console.log(i)

}
console.log(String(a))
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ?
sum=0;
const a=[100,200,300,400]
console.log(a.reduce((acc,curr)=>acc=acc+curr,0))
