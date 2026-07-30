//rough work


const arr = ['arman' , 5 , 'aaris']
 
for (const value of arr ) {
  console.log(value)
}

const mymap = new Map();

mymap.set(1 , "arman")
mymap.set(2 , "ares")
mymap.set(2 , "aaris")

for (const [key,value] of mymap) {
  console.log(key  , value)
}

const myobj = {
  name : 'aaris' ,
  room : 'cse21'
}

for (const key in myobj) {
  
  
  console.log( key , myobj[key])
}
  
const arrobj = [
  {
    name : 'aaris',
    age : 19
  } ,
  {
    name : 'simo',
    age : 21
  }
]


arrobj.forEach(
  (value) => {
    console.log(value.name)
    console.log(value.age)

  }
)