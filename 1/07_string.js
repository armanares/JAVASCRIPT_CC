const name = "arman"
const age = 19

console.log(`you know who the fu*k I am , i'm ${name} , the fu**ing ${name} and i'm ${age} years old`)

const newname = new String("aaris")

console.log(newname);
console.log(newname.length);

console.log(newname.charAt(3));
console.log(newname.indexOf('r'));

console.log(newname.toUpperCase());

const substr = newname.substring(1,5)

console.log(substr)

const anotherstring = newname.slice(-8 , 1)
console.log(anotherstring)

const spacestring = "    aaris  "
console.log(spacestring.trim()) // exclude spaces

