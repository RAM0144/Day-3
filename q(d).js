//Retrun all the prime numbers in an array

let a =[1,2,3,4,5,6,7,8,9,10];
let prime = [];
function findprime(num) {
   let primenumber =num / 2;
   for (let x=2; x <= primenumber; x++) {
    if(num % x==0) {
       return false;
    }
   }
   return true;
}
for (let index = 0; index < a.length; index++) {
  if (findprime(a[index])){
   prime.push(a[index]);
}
}
console.log(prime);