const prices: (number | string)[] = [1,2,3,4,5, 'asd'];
prices.push(1);
prices.push('1');

let user: [string,number,boolean];
// user = ['faustoMB', 15];
// user = ['12' , 15];

// user = [];
// user = ['fausto'];
// user = ['faustoMB', 15];
user = ['fausto' , 12, true];
const [username, age] =  user;
console.log(username);
console.log(age)