const arr=[2,3,6,3,9,7,86]


// function x()
// {
//   sum=0;
//   for(i=0;i<arr.length;i++)
//   {
//     sum= sum+arr[i]
//   } 
//   return sum
// }
const m=arr.reduce(function(acc,curr){
  acc=acc+curr;
  return acc;
},0)
console.log(m)

const output=arr.reduce(function(acc,curr){
  if(curr>acc)
  {
    acc=curr
  }
  return acc
},0)
console.log(output)
