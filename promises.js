const cart = ['shoes', 'pant', 'kurta']
createOrder(cart)
.then(function (orderId) {
  console.log(orderId)
  return orderId;
})
.catch(function(err)
{
 console.log(err.message)
})
.then(function(orderId)
{
  return proceedToPayment(orderId) 
})
.then(function(paymentinfo)
{
  console.log(paymentinfo)
})
.then(function()
{
  console.log("hello dream girl")
})



function createOrder(cart) {
  
    const pr = new Promise(function (resolve, 
     reject) { //createorder
    //validate cart
    if (!validateCart(cart)) {
       const err=new Error("cart is not valid")
      reject(err)
    }

    const orderId="12345"
    if(orderId)
    {
      setTimeout( function(){ resolve(orderId)},5000)
     
    }

  });
  return pr
}

function proceedToPayment()
{
  return new Promise(function(resolve,reject){
    resolve("payment Successful");
  })
}

function validateCart(cart)
{
  return true
}