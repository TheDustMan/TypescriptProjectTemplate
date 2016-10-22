// ./my-project/app.js
var Animals = require('./typescript/js/animals.js');
var Plants = require('./typescript/js/plants.js');
console.log('Welcome to my application');

// require the local module
var squareNumbers = require('./util/square-numbers');

var input = [1,2,3,4];
console.log('Input is:' + input);
console.log('Squared is:' + squareNumbers(input));

var horse = new Animals.Animal("neigh");
console.log('horse went ' + horse.roar());

var duck = new Animals.Animal("quack");
console.log('duck went ' + duck.roar());

var animals = [horse, duck];

function eat(animals) {
    for (var i = 0; i < animals.length; ++i) {
        animals[i].onEat();
    }
}

function slaughter(animals) {
    for (var i = 0; i < animals.length; ++i) {
        animals[i].onSlaughter();
    }
}

eat(animals);
slaughter(animals);

var butcher = new Animals.Butcher("Butch");
butcher.addEdible(horse);
butcher.addSlaughterable(duck);
butcher.doSlaughter();
butcher.doEat();

var grass = new Plants.Plant("Grass!");
var leaf = new Plants.Plant("Leave me be!");
var farmer = new Plants.Farmer("Boy howdy");
farmer.addMunchable(grass);
farmer.addHarvestable(leaf);
farmer.doHarvest();
farmer.doMunch();
