function calculateResult( val1 , val2 , ...num1 ) {
  return num1 ;
}
// ... is rest operator here 
console.log(calculateResult(5,5,4,3,2)) 

// 5 , 5 goes in val1 and val2 

const user =  {
  name: "arman" ,
  roll : 10 
}

 // passsing object in a function

function handleObject(anyobject) {
  console.log(`my name is ${anyobject.name} and my roll is ${anyobject.roll}`)
  console.log(`my name is ${anyobject.names} and my roll is ${anyobject.roll}`)

}

handleObject(user);

handleObject({
  name:"arman",
  roll : 10

})

// passing array

const Array = [200,209 ,208,207]

function returnSecondValue(getArray ){
  return getArray[1] ;
}

console.log(returnSecondValue(Array))


