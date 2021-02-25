'use strict'
/*
console.log("Hola mundo");

//Coding challenge #1
function calcAverage(score1, score2, score3){
    return ((score1 + score2 + score3)/3);
}


function checkWinner(avgDolph, avgKoalas){
    if(avgDolph > (avgKoalas/2)){
        console.log `Dolphins win ${avgDolph} vs. ${avgKoalas}`;
    }
    else if(avgKoalas > (avgDolph/2)){
        console.log `Koalas win ${avgKoalas} vs. ${avgDolph}`;
    }
    else{
        "There is not a winner";
    }
}
console.log('Data 1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49');
let avgDolph1 = calcAverage(44, 23, 71);
console.log(avgDolph1);
let avgKoalas1 = calcAverage(65, 54, 49);
console.log(avgKoalas1);

checkWinner(avgDolph1, avgKoalas1);

console.log('Data 1: Dolphins score 85, 54, 41. Koalas score 23, 34, 27');
let avgDolph2 = calcAverage(81, 54, 41);
let avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolph2, avgKoalas2);
*/

/*
//Coding challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolph, avgKoalas)
{
  if (avgDolph >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolph}) vs (${avgKoalas})`);
  }
	else if (avgKoalas >= 2 * avgDolph) {
		console.log(`Koalas win (${avgKoalas}) vs (${avgDolph})`);
	} else {
		console.log('No team wins');
	}
}
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
//Challenge #2
function calcTip(value){
    let tip;
    if (50 < value < 300){
        tip = value * 0.15;
    }
    else{
        tip = value * 0.20;
    }
    return tip;
}

let bills = [125.55, 44];
let tips = [];
let total = [];

let i;
for(i in bills){
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(total)
*/

/*
//Challenge #3
const mark = {
    full_name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    full_name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.full_name} BMI (${mark.bmi}) is higher than ${john.full_name}'s (${john.bmi})!`)
} else {
    console.log(`${john.full_name} BMI (${john.bmi}) is higher than ${mark.full_name}'s (${mark.bmi})!`)
}
*/
