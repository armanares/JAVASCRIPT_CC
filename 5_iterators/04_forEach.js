//for each loop

const array = ['mit ' ,  'harvard' , 'caltech' ,'cornell']

array.forEach( function(item) {
  // console.log(item)
} )

array.forEach ( ( /*it can be anything*/value) => {
  // console.log(value)

} )

function printArray(item) {
  // console.log(item)
}
array.forEach(printArray)


array.forEach( (item , index , array ) => {
  console.log(item , index , array)
})

const arrObj = [
  {
    college : "mit" ,
    country : "usa"
  },
  {
    college : "harvard" ,
    country : "usa"
  },
  {
    college : "tum" ,
    country : "germany"
  },
]

arrObj.forEach( (item) => {
  console.log(item.college)
  
  console.log(item.country)
  
  console.log(" ")
})
