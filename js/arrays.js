/*Загальна сума покуп*/

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let sum = 0;
// #1
// for (let i = 0; i < cart.length; i += 1) {
//   sum += cart[i];
// }
// console.log(sum);
// #2
// for (const value of cart) {
//   sum += value;
// }
// console.log(sum);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//     total += numbers[i];
//   }
// }

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   console.log(number);
//   total += number;
// }

// console.log(total);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i]);
//   if (loginToFind === logins[i]) {
//     message = `Пользователь ${'aj4xth3m4n'} найден.`;
//     break;
//   }
//   message = `Пользователь ${'aj4xth3m4n'} не найден.`;
// }
// console.log(message);

// for (const login of logins) {
//   console.log(login);
//   if (loginToFind === login) {
//     message = `Пользователь ${'aj4xth3m4n'} найден.`;
//     break;
//   }
//   message = `Пользователь ${'aj4xth3m4n'} не найден.`;
// }

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${'aj4xth3m4n'} найден.`
//   : `Пользователь ${'aj4xth3m4n'} не найден.`;

// console.log(message);

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumb = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (smallestNumb > numbers[i]) {
//     smallestNumb = numbers[i];
//   }
// }

// for (const number of numbers) {
//   console.log(number);
//   if (smallestNumb > number) {
//     smallestNumb = number;
//   }
// }

// console.log(smallestNumb);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';
// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// const string = friends.join(',');

// console.log(string);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
let letters = string.split('');
let inverseString = '';
console.log(letters);

for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     inverseString += letter.toUpperCase();
  //   } else {
  //     inverseString += letter.toLowerCase();
  //    };

  inverseString =
      ? (inverseString += letter.toUpperCase())
      : (inverseString += letter.toLowerCase());
}

console.log(inverseString);
