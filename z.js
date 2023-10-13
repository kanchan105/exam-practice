// let promise= new Promise(function(resolve,reject)
// {
//   setTimeout(()=>{
//     resolve(1),1000
//   });
// }).then(function(result)
// {
//   console.log(result)
//   return result*2;
// }).then(function(result)
// {
//   console.log(result);
//   return result*2
// })
const a=60
const b=20

function add()
{
  const promise=new Promise(function(resolve,reject)  
  {
    if(a<b)
    { x=a+b
      resolve(x)
    }
    else
    { 
      const err=new Error("sorry i cant do this addition")
      reject(err)
    }
  })
  return promise
}


const promise=add()
promise.then(function(x)
{
  console.log(x)
}).catch(function(err)
{
  console.log(err)
})
