const user=[{
  firstname:"kanchan"
  ,lastname:"rana",
  age:26}
,{
firstname:"jaskirat"
  ,lastname:"kaur",
  age:26}
,{
firstname:"harpreet"
  ,lastname:"kaur",
  age:14}
,{
firstname:"gagan"
  ,lastname:"kaur",
  age:4}
,
]
//list of full name
const lname=user.map(x=>x.lastname)
console.log(lname)

//how many people with the same name
const newage=user.reduce(function(acc,curr){
  if(acc[curr.age]){
     acc[curr.age]= ++acc[curr.age]
  }
  else {
  acc[curr.age]=1}
  return acc;
},{})

console.log(newage)
