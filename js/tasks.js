// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

/*                          #1

 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

// let enterNumber = prompt('Enter number');
// enterNumber = Number(enterNumber);
// console.log(enterNumber);
// let enterPow = prompt('Enter pow');
// enterPow = Number(enterPow);
// console.log(enterPow);
// const powNumber = Math.pow(enterNumber, enterPow);
// console.log(`Result ${powNumber}`);
// const result = enterNumber ** enterPow;
// console.log(`Result ${result}`);
// alert(`${result}`)

/*                        #2

 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// if (number < x1) {
//   console.log(`Value ${number} lower than ${x1}`);
// } else if (number > x2) {
//   console.log(`Value ${number} bigger than ${x2}`);
// } else if (number > x1 && number < x2) {
//   console.log(`Value ${number} between ${x1} and ${x2}`);
// } else if (number === x1 || number === x2) {
//   console.log(`Value ${number} is equal to ${x1} or ${x2}`);
// }

/*                         #3

 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */
// 'Все хорошо, снимаем деньги... Спасибо за покупку!'

// let balance = 10000;
// const payment = 12000;
// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
// );
// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов`);
//   console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');

/*                          #4
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

// let totalSpent = 1000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log('Бронзовый партнер, скидка 2%');
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   console.log('Серебрянный партнер, скидка 5%');
// } else if (totalSpent >= 5000) {
//   discount = 0.1;
//   console.log('Золотой партнер, скидка 10%');
// } else {
//   discount = 0;
//   console.log('У вас еще нет партнерской скидки');
// }
// payment -= payment * discount;
// totalSpent += payment;
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );
// console.log(`Общая сумма потраченного ${totalSpent}`);

/*                        #5


 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 1;
// let price;
// if (stars === 1) {
//   price = 20;
//   console.log(`${price}$`);
// } else if (stars === 2) {
//   price = 30;
//   console.log(`${price}$`);
// } else if (stars === 3) {
//   price = 50;
//   console.log(`${price}$`);
// } else if (stars === 4) {
//   price = 70;
//   console.log(`${price}$`);
// } else if (stars === 5) {
//   price = 120;
//   console.log(`${price}$`);
// } else {
//   console.log('Такого кол-ва звезд нет');
// }
// switch (stars) {
//   case 1:
//     price = 20;
//     console.log(`${price}$`);
//     break;
//   case 2:
//     price = 30;
//     console.log(`${price}$`);
//     break;
//   case 3:
//     price = 50;
//     console.log(`${price}$`);
//     break;
//   case 4:
//     price = 70;
//     console.log(`${price}$`);
//     break;
//   case 5:
//     price = 120;
//     console.log(`${price}$`);
//     break;
//   default:
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(typeof price);

/*                       #6

 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 78;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     console.log(`${price}$`);
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     console.log(`${price}$`);
//     break;
//   case 5:
//     price = 120;
//     console.log(`${price}$`);
//     break;
//   default:
//     console.log('Такого кол-ва звезд нет');
// }

/*                       #7

 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// const option = 2;
// let message;

// if (option === 1) {
//   message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
// } else if (option === 2) {
//   message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
// } else if (option === 3) {
//   message = 'Посылка будет отправлена сегодня';
// } else {
//   message = 'Вам перезвонит менеджер';
// }
// console.log(message);
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;
//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;
//   default:
//     message = 'Вам перезвонит менеджер';
// }
// console.log(message);

/*                         #8

 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// const employees = 10;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i++) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(salary);
//   totalSalary += salary;
// }
// console.log(`Total 10 - ${totalSalary}`);

/*                       #9

 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// const min = 0;
// const max = 8;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   total += i;
// }

// console.log(`total ${total}`);

/*                         #10

 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// const balance = 1000;
// let payment = 2150;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
// );

// if (payment <= balance) {
//   console.log(`На счету осталось ${balance - payment} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');

/*                                 #11
  Методи рядків та чейнінг
  Напиши скрипт, який розраховує індекс маси тіла людини
  Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах
  Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)
  Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома
  Індекс маси тіла необхідно округлити до однієї цифри після коми
  */

// let weight = '243.3';
// let height = '24,7';
// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));
// const index = Number((weight / height**2).toFixed(1));
// console.log(index);

/*                             #12
  Використовуючи конструкцію if...else та prompt, напиши код, який 
  запитуватиме: 'Який стандарт мови JavaScript?'. Якщо користувач вводить
  ECMAScript, то показуй alert з рядком 'Вірно!', інакше - 'Не знаєте? ECMAScript!'
*/

// let message = prompt('Який стандарт мови JavaScript?');;
// if (message === 'ECMAScript') {
//     alert('Вірно!');
// } else {
//     alert('Не знаєте? ECMAScript!');
//  }

/*                               #13
  Напиши скрипт, який приводить у консоль рядок 'Це додатнє число', якщо
  в prompt користував ввів число більше за нуль. Якщо було введено нуль,
  виводь у консоль рядок 'Це нуль'. Якщо передали від'ємне число, у консолі
  має бути рядок 'Це від`ємне число'
*/
// let message = Number(prompt('Add number'));

// if (message > 0) {
//     console.log('Це додатнє число');
// } else if (message === 0) {
//     console.log('Це нуль');
// } else {
//     console.log('Це від`ємне число');
// }

/*                              #14
  Напиши скрипт, який перевіряє чи закінчується значення змінної link
  символом '/'. Якщо ні, додай у кінець посилання цей символ  
*/

// let link = prompt('Add something');

// if (!link.endsWith('/')) {
//     link += '/';
// }
// console.log(link);

/*                             #15
  Напиши скрипт для відображення дедлайну - часу здачі проєкту. Використовуй
  конструкцію switch...case
  Якщо до дедлайну 0 днів - виведи рядок 'Cьогодні'
  Якщо до дедлайну 1 день - виведи рядок 'Завтра'
  Якщо до дедлайну 2 дні - виведи рядок 'Післязавтра'
  Якщо до дедлайну 3+ днів - виведи рядок 'Можна відпочити :)'
*/

// let message = Number(prompt('Add deadline'));

// switch (message) {
//     case 0:
//         alert('Cьогодні');
//         break;
//     case 1:
//         alert('Завтра');
//         break;

//     case 2:
//         alert('Післязавтра');
//         break;

//     default:
//         alert('Можна відпочити :)');
//         break;
// }

/*                         #16
  Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат 
  */

// let sum = 0;
// for (let i = 1; i <= 10; i += 1){
//     sum += i;
// }
// console.log(sum);

/*                       #17
  Напиши цикл for який виводить у консоль браузера числа за зростанням від
  min дo max, але якщо число кратне 5
*/

// const min = 2;
// const max = 98;

// for (let i = min; i <= max; i += 1){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

/*                      #18   
  Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
  які є кратними 7
*/

// const from = 2;
// const to = 57;
// let total = 0;

// for (let i = from; i <= to; i += 1){
//     if (i % 7 === 0) {
//         console.log(i);
//         total += 1;
//     }
// }

// console.log(`Total - ${total}`);
// console.log

/*                    #19 
  Напишіть скрипт для світлофора, де користувач може ввести назву кольору
  у prompt і в залежності від того який був введений колір відображатимуться
  різні повідомлення через alert. Використовуй конструкцію switch case
  
  red - 'STOP!!!!'
  green - 'GO!'
  yellow - 'Wait a little!'
*/

// let message = prompt('Add color').toLowerCase();
// console.log(message);

// switch (message) {
//   case 'red':
//     alert('STOP!!!!');
//     break;

//   case 'green':
//     alert('GO!')
//     break;

//   case 'yellow':
//     alert('Wait a little!');
//     break;

//   default:
//     alert('Wrong color!!!');
//     break;
// }

/*                      #20
  Напиши скрипт який буде просити нас ввести число більше за 100, доки
  ми таке не введемо
    
  Скористайся циклом while
*/

// let number = Number(prompt('Write your number bigger than 100'));

// while (number < 100) {
//   number = Number(prompt('Write your number bigger than 100'));
// }
// console.log(number);

/*                   №21
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());

// cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());
