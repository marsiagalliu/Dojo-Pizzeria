var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("crispy thin", "ranch", ["parmesan"], ["bacon", "black olives", "onions"]);
console.log(pizza3);

var pizza4 = pizzaOven("wheat", "alfredo", ["riccotta", "mozzarella"], ["sun-dried tomatoes", "olive oil", "baby spinach"]);
console.log(pizza4);

function randomPizza(){
    var pizzaRandom = {};
    var crustTypeList = ["deep dish", "hand tossed", "crispy thin", "wheat"];
    var sauceTypeList = ["traditional", "marinara", "ranch", "alfredo"];
    var cheesesList = ["mozzarella", "feta", "parmesan", "riccotta"];
    var toppingsList = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "black olives", "sun-dried tomatoes", "olive oil", "baby spinach"];

    pizzaRandom.crustType = crustTypeList[parseInt(Math.random() * crustTypeList.length)];
    pizzaRandom.sauceType = sauceTypeList[parseInt(Math.random() * sauceTypeList.length)];
    pizzaRandom.cheeses = cheesesList[parseInt(Math.random() * cheesesList.length )];

    pizzaRandom.cheeses = [];
    for(i=0 ; i<2; i++){
        var newCheeses = cheesesList[parseInt(Math.random() * cheesesList.length )];

        if (!pizzaRandom.cheeses.includes(newCheeses)) {
            pizzaRandom.cheeses.push(newCheeses);
        }
        
    }

    pizzaRandom.toppings = [];
    for(i=0 ; i<3; i++){
        var newTopping = toppingsList[parseInt(Math.random() * toppingsList.length )];

        if (!pizzaRandom.toppings.includes(newTopping)) {
            pizzaRandom.toppings.push(newTopping);
        } else i--;
        
    }

    return pizzaRandom;
}

var pizza5 = randomPizza();
console.log(pizza5);