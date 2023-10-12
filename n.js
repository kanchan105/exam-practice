const abc={
  name:"john",
  age:27,
  
}

function info(){
  console.log(this.name+" "+this.age+" ")
}

const xyz={
  name:"kanchan"
  ,age:26
}

binded =info.bind(xyz,)
binded()
