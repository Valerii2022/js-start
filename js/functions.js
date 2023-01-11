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

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([164, 48, 168]));

// function longestWord(string) {
//   const str = string.split(' ');
//   console.log(str);
//   let longest = 0;
//   let word = 0;
//   for (var i = 0; i <= str.length - 1; i++) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }

// let string = 'The world is miness';
// string = string.split(' ');
// console.log(string);
// let longest = 0;
// let word = 0;
// for (let i = 0; i <= string.length - 1; i += 1) {
//   console.log(string[i]);
//   console.log(string[i].length);
//   if (longest < string[i].length) {
//     longest = string[i].length;
//     word = string[i];
//   }
// }
// console.log(word);

function filterArray(numbers, value) {
  for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
    //  if (numbers[i] <= value) {
    //    numbers.splice(numbers[i]);
    //  } else {
    //    numbers.push(numbers[i]);
    //  }
  }
  return numbers;
}
console.log(filterArray([6, 7, 8, 10], 7));
