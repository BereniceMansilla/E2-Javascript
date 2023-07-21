const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// traer id inpares

const idInpares = pizzas.filter((ingredientes) => {
  return ingredientes.id % 2 === 1;
});
console.log(idInpares);

idInpares.forEach((ingredientes) => {
  const { nombre } = ingredientes;
  console.log(`La ${ nombre } tiene un id inpar`);
});

// pizzas con precio mayor a 600

const ProductosConPrecioMenorA = (precio) => {
  return pizzas.some((producto) => {
    return producto.precio < precio
  })
    ? console.log(`Hay pizzas que valen menos de ${precio}`)
    : console.log(`No hay pizzas que valen menos de ${precio}`)
};

ProductosConPrecioMenorA(600);

// pizzas con su precio

const NombreDePizzaYPrecio = pizzas.filter((pizza) => {
  return pizza.nombre && pizza.precio
});

NombreDePizzaYPrecio.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio}`);
});

// Todos los Ingredientes de las pizzas

const NombreDePizzaEIngredientes = pizzas.filter((pizza) => {
  return pizza.nombre && pizza.ingredientes
});

NombreDePizzaEIngredientes.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes}`);
});