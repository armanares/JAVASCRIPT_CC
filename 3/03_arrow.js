const user = {
  name : "aaris" ,
  age : 20 ,
  welcomemessage: function() {
    console.log(`${this.name} , welcome to website `)
    console.log(this)
  }
}
user.welcomemessage()
user.name= "simo "
user.welcomemessage()

// here in Node.js global object is global but in browser global object is window
  console.log(this)

function chai_() {
  console.log(this)
  
}
chai_()

const chai = function() {
  usename = "sandy"
  console.log(this.username)
  console.log(this)

  
  
}
chai()

const CHAI = () => {
  usename = "sand"
  console.log(this.username)
  console.log(this)
  
}
CHAI()



// implicit and explicit return in arrow function 

//explicit
const add = (num1 , num2 ) => {
  return num1 + num2 
}
 console.log(add(4,6) )
//implicit
const addTwoNum = (num1 , num2 ) => (num1 + num2 ) 
console.log(addTwoNum(9,8))


