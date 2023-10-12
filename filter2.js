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

const result= user.filter(x=>x.age>20).map((x)=>x.firstname)
console.log(result)

