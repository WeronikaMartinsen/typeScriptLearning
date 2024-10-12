const menu = [
  { name: "Margatita", price: 8 },
  { name: "Margatita", price: 8 },
  { name: "Margatita", price: 8 },
  { name: "Margatita", price: 8 },
  { name: "Margatita", price: 8 },
];

const cashInRegister = 100;
const currentOrders = [];
const nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name == pizzaName);
  cashInRegister += selectedPizza.price;

  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  currentOrders.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const order = currentOrders.find(order);
}
