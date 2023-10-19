let arr=[12,34,56,34,23]
 double(arr)
.then(function(arr)
{
  console.log(arr)
  return arr
})
.then(function(arr){
 let z=square(arr)
    return z
  })
  .then(function(z)
  {
    console.log(z)
  })



function double(a){

  const promise=new Promise(function(resolve,reject)
  {
    if(arr)
    {
      resolve (arr.map((x)=>x*2))
    }
    else 
    {
      const msg=new Error("this array is empty")
      reject(msg)
    }
  })
return promise
}

function square(arra)
{
  return new Promise(function(resolve,reject)
  {
    resolve(arra.map((x)=>x*x))
  })
}