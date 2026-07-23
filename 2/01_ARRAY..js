// array decleration 

const number = [2 , 4 ,5 ,6 ,8 ]

const name = ["arman" , "ares" , "aaris" ] 

const iterator = name.keys();

for(const key of iterator) {
  console.log(` ${key} : ${name[key]}`)
}

const newarray = new Array(2 , 3 , 4 , "miami" , "sandy")

console.log(number)
console.log(name)
console.log(newarray)

console.log(name[1])
console.log(newarray[1])

console.log(number.includes(5))
console.log(number.indexOf(0))
console.log(number.indexOf(2))

console.log(name.indexOf('ares'))
console.log(name.indexOf('arman'))
console.log(name.indexOf('simo'))

// push (add element at last) , pop (remove element from last)

name.push("simo");
console.log(name)

name.pop()
console.log(name)



// unshift (add element at beg), shift *(remove the element from beg)

// name.unshift('sam')
// name.unshift('samy')
// name.unshift('samyy')



// console.log(name)

// name.shift()
// console.log(name)
// name.shift()
// console.log(name)
// name.shift()
// console.log(name)
// name.shift()
// console.log(name)
name.shift()
console.log('a',name)


// join (convets array to string )


const newnumber = number.join() 
console.log(typeof number)
console.log(typeof newnumber)

// slice , splice

const num1 = number.slice(1,4)

const num2 = number.slice(1,3)

const num3 = number.splice(1,3)

console.log(num1)
console.log('A',number)

console.log(num2)
console.log('B',number)

// console.log(num3)
console.log('C',number)



// -------- * -----------

const D_college = ["mit" , "harvard" , "dartmouth" , "cornel " ];
const D_college2 = ["U_berlin" , "Messina_U" , "TUM"  ];


console.log(D_college)
console.log(D_college2)

console.log('a',D_college2.push(D_college))

// const D_college3 = Concat(D_college,D_college2) why error ? 
const D_college3 = D_college.concat(D_college2)

console.log(D_college3)


const D_college4 = [...D_college,...D_college2]
console.log(D_college4)


const Europe_D = ['ITALIANA' , 'ESPAIN' , 'FRANCE' , 'AUSTRIA' , 'NETHERLAND' , ['GERMANY','PORTUGAL ',['BELGIUM']]]
console.log(Europe_D)

console.log(Europe_D.flat())

// from // of

console.log(Array.isArray("arman"))
console.log(Array.from("arman"))
console.log(Array.from({name : "arman"})) //

const x = 1
const y = 3

console.log(Array.of(x,y))
