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

console.log (firstCountry);
console.log (secondCountry);
console.log (thirdCountry);
*/

