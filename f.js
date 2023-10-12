 result=function (number){
  return square= number*number
}

console.log(result(17))

function factorial( number){
    if(number<2)
    {return 1}
    else {
     return number=number* factorial(number-1)
    }
    
    }

//  console.log(factorial(4));

//  console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// var square = function (n) {
//   return n * n;
// }