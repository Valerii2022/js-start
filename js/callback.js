// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));



const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
        console.log(pizzaName);
        let result = 0;
      for (const pizza of this.pizzas) {
          console.log(pizza);

          if (pizza === pizzaName) {
              result = 5;
          } else if (pizza !== pizzaName){
              result = 2;
          }     
        }
        return result;
  },
};

function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Ultracheese", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
