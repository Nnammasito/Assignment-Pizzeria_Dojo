/* Objetivos: 
-Practicar la creacción de objetos en JavaScript.
-Practicar el uso de Math.random().
*/
//Fábrica de Sánwiches.
let sandwich = {
    pan: "Masa madre",
    proteina: "Pollo",
    queso: "Ranco (Colun)",
    salsas: ["Lechuga romana", "tomates reliquia", "salsa de rábano"]
};
//console.log(sandwich);

function sandwichFactory(pan, proteina, queso, salsas){
    let sandwichObjt = {}
    sandwichObjt.pan = pan;
    sandwichObjt.proteina = proteina;
    sandwichObjt.salsas = salsas;
    return sandwichObjt;
}
let Result1 = sandwichFactory("trigo", "pavo", "provolone", ["Mostaza", "Cebolla caramelizada", "Rúcula"]);
//console.log(Result1);

//El horno de pizza
function pizzaOven(tamaño, tipoCorteza, tipoBase, quesos, salsas, ingredientesExtra){
    let build_yourPizza = {}
    build_yourPizza.tamaño = tamaño;
    build_yourPizza.tipoCorteza = tipoCorteza;
    build_yourPizza.tipoBase = tipoBase;
    build_yourPizza.quesos = quesos;
    build_yourPizza.salsas = salsas;
    build_yourPizza.ingredientesExtra = ingredientesExtra;
    return build_yourPizza;
}
console.log(pizzaOven("Mediano", "Estillo Chicago", "Salsa de tomate", "Mozarella", "Honey Mustard", "Pepperoni" ));
console.log(pizzaOven("Familiar", "Tradicional", "Salsa de Tomate", "Mozarella", "Swet Chili", "Champiñones, Cebollas"));
console.log(pizzaOven("Mediano", "New York", "Salsas de Tomate", "Mozarella", "Salsa de Pesto", "Cebolla Camelizada"))
console.log(pizzaOven("Lanzada a mano", "marinara","Salsa BBQ", ["mozzarella", "feta"],"Honey Mustard",["champiñones", "aceitunas", "Cebollas"] ))