let a =90 ;

if( 4 ) {
  const b = 0
  let a = 6
  var c = 80 
  console.log('inner c: ', a )

}
console.log(a)
// console.log(b) error
//console.log(c) accessible 

// scope in console is diff and scope while running code via node in terminal is different

function one(){
  function two() {

    const dev = "deepti"

    const web = "dev"

    console.log(dev)
    console.log(web)

  }
  two()
}

one()