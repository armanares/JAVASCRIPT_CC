if( true) {
  console.log(`yes`)
}
else {
console.log(`no`)
}
/// if  , else if ,  else 

switch ( 1 ) {
  case 1 : console.log(`hii`)
       break;
  case 2 : console.log(`hii`)
       break;

  default : console.log(`defalt`)
}

// TRUTHY VALUES  & FALSEY VALUES

// falsey values -> 0 , -0 , false , "" , Bigint On , null , undefined , NaN

//truthey values -> (1 ,3 ,2....) , " " , "false" ,"dajsnfj" , true ,{} ,[] ,function(){}


// nullish coaleasing operator ( ?? ) : null undefined

let val ;


// val = 4 ?? 6

val = null ?? 9
val = undefined ?? 5
val = 4 ?? 3 ?? 1
val = null ?? undefined

console.log(val)

//ternary operator

const price = 100 

price < 80 ? console.log(`price is less than 80`) : console.log(`price is more than 80`)

