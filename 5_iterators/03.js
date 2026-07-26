// forof loop
const array = [ "arman" ,1 ,4 ,"simo"]
for (const value of array) {
  // console.log(value)
}

const greetings = "hii ,handsome ! "
for (const greet of greetings) {
  // console.log(greet)
}

//  map -> key value pair , with unique value

const map = new Map();

map.set('In' , 'India')
map.set('Usa' , 'united states of america')
map.set('fr' , 'France')

// console.log(map)

for (const key of map) {
// console.log(key)
  
}

for (const [key,value] of map) {

// console.log(key , ' : ' , value)
  
}

const myObject = {
  cpp : 'c++' ,
  js : 'javaScript' ,
  rb : 'ruby'
}

// for (const [key,value] of myObject) {

// // console.log(key , ' : ' , value)
  
// } forof doesnt work for object as it shows objects are not iterable

// we use forin for iteration of object

for (const key in myObject) {

console.log(key , " : " ,myObject[key])
  
} 