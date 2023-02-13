


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

// const string = 'qWeRTzxCv';
// let letters = string.split('');
// let inverseString = '';
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     inverseString += letter.toUpperCase();
  //   } else {
  //     inverseString += letter.toLowerCase();
  //    };

  // const isInLowerCase = letter === letter.toLowerCase();
//   inverseString += letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(inverseString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// const title = 'Top 10 benefits of React framework';
// let slug = '';

// slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);


/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const arrayOne = [4, 8, 77, 61, 12];
// const arrayTwo = [42, 18, 7, 11, 32, 15];
// const array = arrayOne.concat(arrayTwo);
// let sum = 0;

// for (const value of array) {
//   sum += value;
// }

// console.log(sum);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
//   'Карточка-6',
// ];

// console.table(cards);

// const cardToRemove = 'Карточка-5';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// const cardToInsert = 'Карточка-7';
// const index = 2;


// cards.splice(index, 2, cardToInsert);

// console.table(cards);

/*  
  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 
  Метод split
*/

// const values = "8 11";
// const valuesArray = values.split(' ');

// let square = Number(valuesArray[0]) * Number(valuesArray[1]);

// // !!! another var
// // let square = 1;
// // for (const value of valuesArray) {
// //   square *= value;
// // }
// console.log(square);

/*
  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i+1}: ${fruits[i]}`);
// }

/*
  Напиши скрипт, який виводить у консоль ім'я та телефонний 
  номер користувача. У змінних names і phones зберігаються 
  рядки імен та телефонних номерів, розділені комами. 
  
  Порядковий номер імен та телефонів у рядках вказують на 
  відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = "Jacob,William,Solomon,Kate";
// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// for (let i = 0; i < namesArray.length; i += 1) {
//    console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }


/*
  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.
  методи pop shift join
*/

// const stringEl = "Welcome to the future";

// const stringArray = stringEl.split(' ');

// stringArray.pop();

// stringArray.shift();

// const newString = stringArray.join(' ');

// console.log(newString);


/*
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.
  Методи split reverse join
*/

// // Variant with words
// const string = "Welcome to the future";

// console.log(string);

// // let stringArray = string.split('');

// // console.log(stringArray);

// // stringArray = stringArray.reverse('');

// // console.log(stringArray);

// // stringArray = stringArray.join('');

// const stringArray = string.split('').reverse('').join('');

// console.log(stringArray);

// Variant with letters
// const string = "Welcome to the future";

// let stringArray = string.split(' ');

// stringArray = stringArray.reverse(' ');

// stringArray = stringArray.join(' ');

// console.log(stringArray);


// const string = "Welcome to the future";

// let newString = "";

// for (let index = 0; index < string.length; index += 1) {
//   // 1 iteration - W, ""
//   // 2 iteration - e, "W"
//   // 3 iteration - l, "eW"
//   // final result - `lew`

//   newString = string[index] + newString;
// }

// console.log(newString);


/*
  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [100, 120, 10, 7, 85, -15];

// let minNumber = numbers[0];

// for (const number of numbers) {
//   if (minNumber > number) {
//     minNumber = number
//   }
// }
// console.log(minNumber);
