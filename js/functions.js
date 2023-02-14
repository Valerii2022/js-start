

function calculateTotalPrice(order, order2) {
  console.log([...order, ...order2]);
  let total = 0;
  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }
  return total;
}

console.log(calculateTotalPrice([164, 48, 168, 7], [58, 17, 28, 52, 25]));

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

// function filterArray(numbers, value) {
//   let array = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }
// console.log(filterArray([18, 6, 7, 8, 10], 7));
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
//   let array = [];
//   for (let i = 0; i <= array1.length - 1; i++) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   return array;
//   console.log(array);
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const value of planets) {
//   console.log(value);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
//     total += price;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function calculateTotalPrice2(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice2([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvenNumbers(6, 8));

// function includes(array, value) {
//   let result;
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (array[i] === value) {
//       result = true;
//       return true;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }
// console.log(includes([7, 5, 76, 9], 77));

// function totalSalary(numbers) {
//   let total = 0;
//   for (let value of numbers) {
//     if (value % 2 === 0) {
//       total += value;
//     }
//   }
//   return total;
// }

// console.log(totalSalary([14, 25, 7, 89, 69, 36, 12]));

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */


// const inversedString = function (string) {
//     let inverseString = '';
//     let letters = string.split('');

//     for (const letter of letters) {
//         inverseString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return inverseString;
// }

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// console.log(inversedString('qWeRTyuIO'));

// const makeSlug = function (string) {
//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(makeSlug('Алюмінієва одностороння стремянка для дому.'));

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const arraysSum = function (array1, array2) {
//     const array = array1.concat(array2);
//     let sum = 0;
//     for (const value of array) {
//         sum += value;
//     }

//     return sum;
// }

// console.log(arraysSum([4, 8, 77, 5, 12], [42, 18, 7, 11, 32, 15]));

// console.log(arraysSum);