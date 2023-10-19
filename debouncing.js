let count=0;
function getData()
{
  console.log( "fetching the Data"+count)
}

const dobouncing= function(fn,delay){
    let timer;
  return function(){
  let context=this,
  args=arguments;
  clearTimeout(timer);
   timer=setTimeout(()=>{
    getData.apply(context,arguments)
  },delay)
 }
}
const betterFunction = dobouncing(getData,300)
