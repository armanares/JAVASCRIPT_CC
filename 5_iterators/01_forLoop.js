// for loop ->  

for ( let i = 0 ; i < 10 ; i++ ) {
  console.log(`index is ${i}`);
  if(i==5) {
    continue
  }
  if(i==8) {
  console.log(`exit at index ${i}`);
    break;
  }
}

/// thats it 