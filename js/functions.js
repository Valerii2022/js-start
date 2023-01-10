// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   return a + b + c;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }

// console.log(makeMessage('Nick', 700));

// let value = 0;
function calculateTotal(number) {
  for (let i = 1; i <= number; i += 1) {
    //  value += i;
    //   return value;
    return (number += i);
  }
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
