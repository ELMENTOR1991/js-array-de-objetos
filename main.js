/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. */


let pizzas = [
    { id: 1 , nombre: "calabresa" , ingredientes: "muzzarella , harina , tomate , calabreza , agua , levadura , sal , azucar" , precio: "$ 1350"} ,
    { id: 2 , nombre: "muzzarella" , ingredientes: "muzzarella , harina , tomate , agua , levadura , sal , azucar" , precio: "$ 1000"} ,
    { id: 3 , nombre: "jamon" , ingredientes: "muzarella , harina , tomate , agua , levadura , sal , azucar , jamon" , precio: "$ 1150"} ,
    { id: 4 , nombre: "napolitana" , ingredientes: "muzzarella , harina , tomate , agua , levadura , sal , azucar , tomate en rodajas , provensal" , precio:"$ 1100"}, 
    { id: 5 , nombre: "anana" , ingredientes: "muzzarella , harina , tomate , agua , levadura , sal , azucar , anana", precio: "$ 1250"} ,
    { id: 6 , nombre: "fugazzeta" , ingredientes:"muzzarella , harina , tomate , agua , levadura , sal , azucar , cebolla" , precio: "$1200"}
] 
pizzas.forEach((nombres)=>{
  console.log("las pizzas son: " + `${nombres.nombre}`);
});


let arrayFiltrado = pizzas.filter((pizza)=>pizza.id % 2 );
console.log(arrayFiltrado);

pizzas.forEach((precios)=>{
  console.log("los precios son: " + `${precios.precio}`)
})


pizzas.forEach((zapi)=>{
  console.log(`${zapi.nombre} ${zapi.precio}`)
})
 



