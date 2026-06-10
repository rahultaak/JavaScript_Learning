//object literal
//const syb = symbol("id");
const personel ={
name : "Rahul",
//[syb1] :  "id",
"gender" : "Male",
age :  35,
email : "rahultaak06@gmail.com",
City : "Delhi"

}

//console.log(personel.name);

//console.log(personel.gender)
console.log(personel["gender"])
console.log(personel["email"])
//console.log(personel.syb1);

//object.freeze(personel);

personel.name = "Rahul Taak";



personel.greeting = function(){
    console.log(`my name is ${personel.name}`);
}

console.log(personel.greeting());