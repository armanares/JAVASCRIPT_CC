const date = new Date()

console.log(date)

console.log(date.toDateString())

console.log(date.toLocaleDateString())

console.log(date.getFullYear())

console.log(date.toString())

console.log(date.toLocaleTimeString())

const mydate = new Date(2005 , 7 ,5) 

console.log(mydate.toLocaleDateString())

console.log(typeof mydate)
console.log(typeof date)

const  timestamp  = Date.now();

console.log(timestamp)

console.log(mydate.getTime())

console.log(Math.floor(timestamp/1000))

const newdate = new Date()

console.log(newdate.getMonth()+1)
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getDay())

newdate.toLocaleString('default' , {
    weekday : "long"
})











