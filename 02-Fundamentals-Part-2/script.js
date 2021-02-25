'use strict'

/*
//Functions
function describeCountry(country, population, capitalCity){
    let countries = `${country} has ${population} million people and its capital is ${capitalCity}`;
    return countries;
}

let firstCountry = describeCountry('Colombia', 50, 'Bogotá');
let secondCountry = describeCountry('Japón', 126.5, 'Tokio');
let thirdCountry = describeCountry('Rusia', 144.5, 'Moscú');

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
*/


/*
//Function declarations vs expressions
//Function declaration
function percentageOfWorld1(population){
    //total population of world is 7900 million people
    return (population/7900)*100 + '%';
}
let firstCountry = percentageOfWorld1(50); //Colombia
let secondCountry = percentageOfWorld1(126.5); //Japón
let thirdCountry = percentageOfWorld1(144.5); //Rusia

console.log(firstCountry, secondCountry, thirdCountry);

//Function expression
const percentageOfWorld2 = function(population){
    return (population/7900)*100 + '%';
}
firstCountry = percentageOfWorld2(50);
secondCountry = percentageOfWorld2(126.5);
thirdCountry = percentageOfWorld2(144.5);

console.log(firstCountry, secondCountry, thirdCountry);
*/

/*
//Arrow functions
const percentageOfWorld3 = population => (population/7900)*100 + '%';
let firstCountry = percentageOfWorld3(50); //Population of Colombia
let secondCountry = percentageOfWorld3(126.5); //population of Japón
let thirdCountry = percentageOfWorld3(144.5); //population of Rusia
console.log(firstCountry, secondCountry, thirdCountry);
*/


/*
//Funtions calling Other Functions
function percentageOfWorld1(population){
    //total population of world is 7900 million people
    return (population/7900)*100 + '%';
}

function describePopulation(country, population){
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent} of the world`
}

const firstCountry = describePopulation('Colombia', 50);
const secondCountry = describePopulation('Japón', 126.5);
const thirdCountry = describePopulation('Rusia', 144.5);
const fourCountry = describePopulation('Korea', 51.6)


console.log (firstCountry);
console.log (secondCountry);
console.log (thirdCountry);
console.log (fourCountry);


//Introduction to arrays
const populations = ["Colombia", "Japon", "Rusia", "Korea"];
if (populations.length == 4) {
    console.log("True");
}else {
    console.log("False");
}

const percentages = [firstCountry, secondCountry, thirdCountry, fourCountry];

//Basic Array Operations(Methods)
let neighbours = ["Perú", 'Brasil', 'Ecuador', 'Venezuela'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Ecuador')) {
    let indice = neighbours.indexOf('Ecuador');
    neighbours[indice] = 'Alemania';
}
console.log(neighbours);
*/

/*
//Introduction to objects
const myCountry = {
    country: "Colombia",
    capital: "Bogotá",
    language: "Spanish",
    population: "50"
}

//Mini_challenge
//Imprimir a partir de los datos del objeto: 
//"Jonas has 3 friends, and his best friend is called Michael"
const Jonas = {
    firstName: "Jonas",
    lastName: "Schmetman",
    birth_year: 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
    has_driver_license: true,
    calc_age: function() {
        this.age = 2037 - this.birth_year;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calc_age()}-years old ${this.job}, 
        and he has ${this.has_driver_license ? 'a' : 'no'} driver's license.`
    }
}

console.log(Jonas.firstName + " has " + Jonas.friends.length + 
            " friends, and his best friend is called " + Jonas.friends[0]);

Jonas.calc_age();
console.log(Jonas.age);
console.log(Jonas);

//Imprimir:
//"Jonas is a 46-year old teacher, and he has (/ or not) a driver license"
console.log(Jonas.getSummary());
*/
/*
//Dot vs Braket notation
const myCountry = {
    country: "Colombia",
    capital: "Bogotá",
    language: "Spanish",
    population: 50,
    neighbours: ["Perú", 'Brasil', 'Ecuador', 'Venezuela']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
            ${myCountry.neighbours.length} neihbouring countries  and a capital  called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
*/
/*
//Object Methods
const myCountry = {
    country: "Colombia",
    capital: "Bogotá",
    language: "Spanish",
    population: 50,
    neighbours: ["Perú", 'Brasil', 'Ecuador', 'Venezuela'],
    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people,
                    ${this.neighbours.length} neihbouring countries  and a capital  called ${this.capital}.`)
    },
    checkIsland: function(){
        if(this.neighbours.length > 0){
            return this.isIsland = true;
        }else{
            return this.isIsland = false;
        }
    }
};

myCountry.describe();
console.log(myCountry.checkIsland());
*/