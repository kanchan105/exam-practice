father={
  value:200,
  square(){
    return this.value*this.value
  }
}

const child={
  __proto__:father,
  value:400
}
console.log(child.square())
    