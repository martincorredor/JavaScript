//JAVASCRIPT FUNDAMENTALS - PART 1

//Values and variables
const country = 'Colombia';
const continent = 'SouthAmerica';
let population = 49650000;

console.log(country);
console.log(continent);
console.log(population);

//Data types
const isIsland = false;
let lenguage;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof lenguage);

//let, const and var
lenguage = 'spanish';

//Basic operators
let halfPeople = population / 2;
console.log(halfPeople);
population += 1;
console.log(population);
let description = 'Colombia is in SouthAmerica, and its 49 million people speak spanish'


//Coding challenge #1
/*
let heightMark = 1.69;//meters
let massMark = 78;//kg

let heightJohn = 1.95;
let massJohn = 92;

let BMIMark = heightMark / (massMark ** 2);
let BMIJohn = heightJohn / (massJohn ** 2);
let markHiguerBMI = BMIMark > BMIJohn;
console.log(markHiguerBMI);


heightMark = 1.69;//meters
massMark = 78;//kg

heightJohn = 1.95;
massJohn = 92;

BMIMark = heightMark / (massMark * massMark);
BMIJohn = heightJohn / (massJohn * massJohn);
markHiguerBMI = BMIMark > BMIJohn;
console.log(markHiguerBMI);
*/

//Strings and Template Literals
description = `${country} is in ${continent}, and it's ${population} people speak ${lenguage}`;
console.log(description); 

//Taking decisions: If/else Statements
if (population > 33000000){
    console.log('Portugal population is above average');
} else {
    console.log("Portugal's population is 22 million below average");
}

//Coding challenge #2
/*
let heightMark = 1.69;//meters
let massMark = 78;//kg

let heightJohn = 1.95;
let massJohn = 92;

let BMIMark = heightMark / (massMark ** 2);
let BMIJohn = heightJohn / (massJohn ** 2);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
*/

//Type conversion and Coersion
console.log('9' - '5');//result: 4
console.log('19' - '13' + '17');//result: "617"
console.log('19' - '13' + 17);//result: 23
console.log('123' < 57);//result: False
console.log(5 + 6 + '4' + 9 - 4 - 2);//result: 1143

/*
//Equality Operators: == vs ===
numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/

/*
//Coding challenge #3

//Data 1
const dolphins_score1 = 96;
const dolphins_score2 = 108;
const dolphins_score3 = 89;

const koalas_score1 = 96;
const koalas_score2 = 108;
const koalas_score3 = 89;

const average_score_dolphins = (dolphins_score1 + dolphins_score2 + dolphins_score3) / 3;
const average_score_koalas = (koalas_score1 + koalas_score2 + koalas_score3) / 3;


const higher_dolphins = average_score_dolphins > average_score_koalas;
const higher_koalas = average_score_koalas > average_score_dolphins;
const draw_score = average_score_dolphins === average_score_koalas;
const score_dol_higher_hundred = average_score_dolphins > 100;
const score_koa_higher_hundred = average_score_koalas > 100;


if (higher_dolphins){
    console.log("Team Dolphins is the winner with score " + average_score_dolphins)
} else if (higher_koalas){
    console.log("Team koalas is the winner with score " + average_score_koalas)
} else {
    console.log("There is a draw with score " + average_score_dolphins)
}

//Bonus 1 
if (higher_dolphins && score_dol_higher_hundred){
    console.log("Team Dolphins is the winner with score " + average_score_dolphins)
} else if (higher_koalas && score_koa_higher_hundred){
    console.log("Team koalas is the winner with score " + average_score_koalas)
} else if (draw_score){
    console.log("There is a draw with score " + average_score_dolphins)
} else{
    console.log("There is not a champion")
}

//Bonus 2
if (higher_dolphins && score_dol_higher_hundred){
    console.log("Team Dolphins is the winner with score " + average_score_dolphins)
} else if (higher_koalas && score_koa_higher_hundred){
    console.log("Team koalas is the winner with score " + average_score_koalas)
} else if (score_dol_higher_hundred && score_koa_higher_hundred && draw_score){
    console.log("There is a draw with score " + average_score_dolphins)
} else{
    console.log("There is not a champion")
}
*/


//The switch statment
let lenguages = 'spanish'
switch (lenguages){
    case 'chinese':
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken lenguage');
        break;
    default:
        console.log('Great lenguage too :D');
}


//THe conditional(Ternary) Operator

