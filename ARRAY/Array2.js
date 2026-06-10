const Heroes = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];
const Villains = ["Thanos", "Loki", "Ultron", "Red Skull", "Green Goblin"];

//Heroes.push(Villains);
//console.log(Heroes);

//Heroes.concat(Villains);
//console.log(Heroes);


//Spread Operator
const allHeroes = [...Heroes, ...Villains];
//console.log(allHeroes); 


//FLAT OPERATOTOR

const nestedArr = [1,2,3,[4,5,6],[7,8,9]];
const newArrwy1 = nestedArr.flat(Infinity);
console.log(newArrwy1);



//console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));


let Num1=100;
let Num2=200;
let Num3=300;

console.log(Array.of(Num1,Num2,Num3));