const Arr = [1,2,3,4,5]
const Heroes = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];

// console.log(Arr);
// console.log(Heroes);
// console.log(Heroes[2]);
// console.log(Arr.length);
// console.log(Heroes.length);
// console.log(Arr[4]);

//Array Methods

//PUSH

Arr.push(6);
//console.log(Arr);

Arr.push(7,8,9);
//console.log(Arr);

//Pop
Arr.pop();
//console.log(Arr);

//unshift
Arr.unshift(9);
//console.log(Arr);  

//shift
Arr.shift();
//console.log(Arr);   

//includes

// console.log(Arr.includes(8));
// console.log(Heroes.includes("Thor"));


//const newArr = Arr.join();
// console.log(newArr);
// console.log(typeof newArr);


//slice
console.log(Arr);
const newArr1 = Arr.slice(1,5)
//console.log(newArr1);


//splice
const Newarr2 = Arr.splice(1,3)
console.log(Newarr2);
