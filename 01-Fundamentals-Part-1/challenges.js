//Coding challenge #1
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



//Coding challenge #2
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


//Coding challenges #4
//Data1
const bill = 275.40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The check is: ${bill}, your tip is: ${tip} and your final che is: ${bill + tip}`);

