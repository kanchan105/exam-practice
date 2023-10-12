let arr=[2,3,2,4,5,3,3,5,3,5]

const newarr=arr.map((x)=> x*2
);

const even=arr.filter((x)=>x%2==0)
const greater4=arr.filter((x)=>x>4)
 
console.log(newarr)
console.log(even)
console.log(greater4)