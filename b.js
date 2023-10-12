var a = 1;
function b() 
{  // Hoisted  function a() {}
  a = 10; 
  return;
}

b();
console.log(a)