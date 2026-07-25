// we use iffi fuction to reduse the pollution in global scope coz of name conflicts
// immediately imvoked function expression

// function Greeting() {
//   console.log(`hii aaris`)
// }
// Greeting()

(function Greeting() {
  console.log(`hii aaris`)
})();

( ()=> {
console.log(`hii aaris`)
}
) () ;

(
  function sum(int1 ,int2 ) {
    console.log(int1 + int2)
  }
) (5 , 9) ;

