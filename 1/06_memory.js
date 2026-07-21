//stack(premitive).  || heap(non-premitive)

//stack

/* when we access we got the copied value , so the changing value 
doesnt change the actual or original value */

let name  = "aaris"
let name2 = name 
name2 = "ares"

console.log(name)
console.log(name2)


//heap

/* when we access we got the reference to the original value ,
 so changing the value does changes the original value */

 let id = {
  name : "aaris" ,
  age : 19
 }
let id2 = id
 
id2.name = "ares"

console.log(id)
console.log(id2)


 