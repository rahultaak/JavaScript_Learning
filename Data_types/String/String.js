let fname= "rahul";
let Lname = "Taak";
let fullname = fname + Lname;
let Value = 50;
//console.log(fname +  Lname + "Value: " + Value);

//console.log(`my name is ${fullname} and my age is ${Value}`);

// const Test = new String("Takshila");
//Length
// console.log(Test.length);
// console.log(Test[5]);

//Uppercase
//console.log(Test.toUpperCase())
// console.log(fullname.length)
// console.log(fullname.toUpperCase())

//Lowercase
// console.log(fullname.toLowerCase());

//character and index position

// console.log(fullname.charAt(3));
// console.log(fullname.indexOf('T'))

//Substring

let newName = fullname.substring(0,6)
console.log(newName)

//slice

let Laname = fullname.slice(-8 , 4)
console.log(Laname);


// trim
let trim1 = "    today     "
console.log(trim1)
console.log(trim1.trim())

//replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

//include
const url1 = "https://hitesh.com/hitesh%20choudhary"
console.log(url1.includes('.com'))

//Split
let system = "system-hila-denge";
console.log(system.split('-'))