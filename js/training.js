// function totalPayment(total) {
//   let totalPrice = total;
//   let array = [];
//   let x;
//   let shopper1;
//   let shopper2;
//   let shopper3;
//   x = totalPrice / 31;
//   shopper1 = x;
//   shopper2 = x * 5;
//   shopper3 = x * 25;
//   array = [
//     Number(Math.round(shopper1 * 100) / 100),
//     Number(Math.round(shopper2 * 100) / 100),
//     Number(Math.round(shopper3 * 100) / 100),
//   ];
//   return array;
// }
// console.log(totalPayment(319.31));

let userName;
let age;
let userAge;
let ageEnd;
console.log((userName = prompt('add you name')));
console.log((userAge = prompt('year of birth')));
age = 2023 - userAge;
if (age === 1) {
  console.log(`${userName}: one year old.`);
} else {
  console.log(`${userName}: ${age} years old.`);
}
