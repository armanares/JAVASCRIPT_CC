
const mySymbol = Symbol("mykey")

const data = {

  name : "aaris" ,
  age : 19 ,
  email : "zaddyarman@gmail.com" ,
  [mySymbol] : "mykey1" , 

  favCont : "ITALIANA" ,
  favWORD : "Cullo" ,
  favUni : "uniMessina"
}

console.log(data)

console.log(data[mySymbol])


data.email = "ares@gmail.com"

console.log(data)
console.log(data.email)
console.log(data["email"])

data.greeting = function() {
  console.log("hi there !")
}

console.log(data.greeting())
console.log(data.greeting)

// -------**---------

const college = {
  country : "italiana" ,
  state : "Messina" ,
  unis : {
     campus : "messina"
  }

}
console.log(college.unis.campus)


const obj_in_arrray = [
  {name: "ares"} , 
  { name : "sandy" } ,
  {name : "aaris"}
]

console.log(obj_in_arrray)


const tinder = {} 
tinder.userId = "ares6923"
tinder.age = 19 
tinder.gender = "male"
tinder.country = "Italiana"
tinder.email = "ares@gmail.com"

console.log(tinder.email)

tinder.isLoggedIn = true

//object inside object 

const user1 = {
  username : "ares121" , 
  fullname : {
    firstname : "aaris" ,
    lastname : "ferranate"
  }
}

console.log(user1.fullname.firstname)

// merging two object

const obj1 = {1 : 2 , 2 : 2}
const obj2 = {0 : 1 , 3 : "aaris"}

const obj3 = {...obj1 , ...obj2} 
console.log(obj3)


// object inside array

const instausers = [
  {
    userid : "aaris12"
  } ,
  {
    userid: "samxz"
  } ,
  {
    userid: "ritick"
  }
]
console.log(instausers[1].userid)
console.log(instausers)

console.log(Object.keys(user1))
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

