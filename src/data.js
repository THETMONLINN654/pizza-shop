// All menu data lives in one array so the UI can be rendered with map().
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    photoName: "pizzas/focaccia.jpg",
    price: 6,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    photoName: "pizzas/margherita.jpg",
    price: 10,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    photoName: "pizzas/spinaci.jpg",
    price: 12,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    photoName: "pizzas/funghi.jpg",
    price: 12,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    photoName: "pizzas/salamino.jpg",
    price: 15,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    photoName: "pizzas/prosciutto.jpg",
    price: 18,
    soldOut: false,
  },
];

export const OPEN_HOUR = 10; // 10 am
export const CLOSE_HOUR = 22; // 10 pm

export default pizzaData;
