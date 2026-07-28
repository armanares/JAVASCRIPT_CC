const coding = ['js' , 'java' , 'c++' , 'c' , 'python' ]
let coding_ = []

const values = coding.forEach( (lan) => (coding_.push(lan) ))
// for each doesnt return any value

// console.log(values) // print undefined 

const numbers = [1,2,3,4,5,6,7,8,9,10,11]
const evenNum = numbers.filter( (num) => num %2 == 0 ) // as it is implicit so we dont need to type return here 

// console.log(evenNum)

const book_info = [
    {
      name : "ikigai " , published : '1900' , genre : 'selfHelp'

    } ,
     {
      name : " atomic habits " , published : '2000' , genre : 'selfHelp'

    } ,
     {
      name : " Fydor dostevosky " , published : '1800' , genre : 'fiction'

    } ,
     {
      name : "the phychology of money" , published : '2005' , genre : 'finance'

    } ,
     {
      name : "odessey" , published : '1500' , genre : 'history'

    } ,
     {
      name : "fight club" , published : '1900' , genre : 'fiction'

    } ,
]
const fictionBook = book_info.filter( (book) => book.genre === 'fiction')

console.log(fictionBook)