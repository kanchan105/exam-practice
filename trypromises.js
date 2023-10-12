let arr=[1,2,3,4]
double(arr)
.then(function(arr)
{
  console.log(arr)
  return arr
})
.then(function(arr)
{
  x=square(arr)
  return x;
  
})
.then(function(x)
{
  console.log(x)
})

.catch(function(err)
{
  console.log(err)
})


function double(arr)
{
  return new Promise(function(resolve,reject)
  {
    if(arr)
    {
      resolve(arr=arr.map((x)=>x*2))
    }
    else {
      err="this array is empty"
       reject(err)
    }
    
  }
  )
}

function square(arr)
{
  return new Promise(function(resolve,reject)
  {  
   
    if(arr){
    resolve(arr=arr.map((x)=>x*x))
  }
  })
}