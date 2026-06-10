const Tindruser = {
  Username: {
    fullname: {
      firstname: "John",
      lastname: "Doe"
    },
    Gender: "Male",
    Age: 30,
    city: "New York"
  }
};

// console.log(Tindruser.Username);
// console.log(Tindruser.Username.fullname);
// console.log(Tindruser.Username.fullname.firstname);



const usr1 ={1: "a" ,2: "b"}
const usr2 ={4: "c" ,5: "d"}
const user3 = {usr1, usr2};
const user4 = Object.assign({}, usr1, usr2);
const user5 = {...usr1, ...usr2};
console.log(user5);
