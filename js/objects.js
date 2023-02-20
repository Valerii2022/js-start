


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Grip", price: 1200, quantity: 9 },
//   { name: "Droid", price: 400, quantity: 7 },

// ];

// function getProductPrice(productName) {
// let price;
//     for (const product of products) {
//         if (productName === product.name) {
//             price = product.price;
//             return price;
//         } else {
//             price = null;
//         }

//     }
// return price;

// }
// console.log(getProductPrice("Engine"));
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Grip"));

/*Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let result = [];
//   for (const product of products) {
//     console.log(product);
//   }

//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// Autocheck modul #3 task 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//     ],

//   getPotions() {
//     return this.potions;
//   },

//     addPotion(newPotion) {

//       for (let i = 0; i < this.potions.length; i += 1) {

//           if (Object.values(this.potions[i]).includes(newPotion.name)) {
//               return `Error! Potion ${newPotion} is already in your inventory!`;
//           }

//       };

//     this.potions.push(newPotion);

//   },

//     removePotion(potionName) {
//         let potionIndex = this.potions.indexOf(potionName);

//         for (let i = 0; i < this.potions.length; i++) {
//             potionIndex = this.potions.indexOf(this.potions[i])

//             console.log(this.potions[i].name);
//             console.log(potionIndex);

//             if (this.potions[i].name === potionName) {

//                 this.potions.splice(potionIndex, 1);
//                 return;

//             }
//         };

//         return `Potion ${potionName} is not in inventory!`;

//     },

//   updatePotionName(oldName, newName) {
//       let potionIndex = 0;

//       for (let i = 0; i < this.potions.length; i++) {
//           potionIndex = this.potions.indexOf(this.potions[i]);
//           console.log(this.potions[i]);
//           console.log(this.potions[i].name);
//           console.log(this.potions[i].price);
//           console.log(potionIndex);
//           const newObject = { name: newName, price: this.potions[i].price };

//           if (this.potions[i].name === oldName) {
//               this.potions.splice(potionIndex, 1, newObject);

//               return;
//           }
//       };

//       return `Potion ${oldName} is not in inventory!`;

//     },

// };

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.potions);

/*
  3. Метод Object.values()
  Є об'єкт, де зберігаються зарплати нашої команли. Напиши
  Функцію getResult для підсумовування усіх зарплат.
  Функція повинна отримувати об'єкт з інформацію про зарплати та
  повертати загальну їх суму.
  Якщо об'єкт salaries порожній, результат має бути 0 
*/

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// const userSalary = {};

// const getResult = object => {
//   let totalSalary = 0;
//   const values = Object.values(object);

//   values.forEach(number => {
//     totalSalary += number;
//   });

//   //   for (const value of values) {
//   //     totalSalary += value;
//   //   }
//   return totalSalary;
// };

// console.log(getResult(salaries));

/*
  4. Масив об'єктів
  Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає
  масив об'єктів та рядок з назвою каменю. 
  
  Функція рахує і повертає загальну вартість каміння з таким ім'ям, 
  ціною та кількістю з об'єкта
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Топаз', price: 500, quantity: 10 },
//   { name: 'Аквамарин', price: 200, quantity: 8 },
// ];

// const calcTotalPrice = (stones, stoneName) => {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// };

// console.log(calcTotalPrice(stones, 'Смарагд'));

/*
  5. Методи об'єкта
  
  Напиши скрипт управління особистим кабінетом інтернет-банку.
  
  Є об'єкт account, в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій
*/

// // Типів транзакцій лише два:
// // Можна покзасти чи зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Исторія транзакцій
//   transactions: [],

//   /*
//     Метод createTransaction створює та повертає об'єкт транзакції.
//     Приймає суму та тип транзакції.
//   */

//   createTransaction(transactionType, transactionSum) {
//     const usertransactionObject = {
//       [transactionType]: transactionSum,
//     };
//     console.log(usertransactionObject);
//     account.transactions.push(usertransactionObject);
//     console.log(this.transactions);
//   },

//   /*
//     Метод deposit, що відповідає за додавання суми до балансу
//     Приймає суму транзакції
//     Викликає createTransaction для створення об'єкта транзакції
//     та додавання його в історію транзакцій
//   */

//   deposit(transactionType, transactionSum) {
//     account.balance = Number([transactionSum]) + Number(account.balance);
//     console.log(account.balance);
//     account.createTransaction(transactionType, transactionSum);
//   },

//   /*
//     Метод withdraw, що відповідає за зняття суми з балансу.
//     Приймає суму транзакції
//     Якщо сума зняття більша за поточний баланс, виводь повідомлення
//     про те, що зняття такої суми не можливо - недостатнє коштів
    
//     Викликає createTransaction для створення об'єкта транзакції
//     та додавання його в історію транзакцій.
//   */
// };

// account.deposit('DEPOSIT', 8500);
// account.deposit('DEPOSIT', 7500);
//  account.createTransaction('WITHDRAW', 2400);
