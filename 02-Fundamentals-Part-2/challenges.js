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
