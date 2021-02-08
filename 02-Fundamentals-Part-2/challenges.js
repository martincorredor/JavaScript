

//Coding challenge #1
function calcAverage(score1, score2, score3){
    return ((score1 + score2 + score3)/3);
}


function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > (avgKoalas/2)){
        console.log `Dolphins win ${avgDolphins} vs. ${avgKoalas}`;
    }
    else if(avgKoalas > (avgDolphins/2)){
        console.log `Koalas win ${avgKoalas} vs. ${avgDolphins}`;
    }
    else{
        "There is not a winner";
    }
}
console.log('Data 1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49');
let avgDolphins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

console.log('Data 1: Dolphins score 85, 54, 41. Koalas score 23, 34, 27');
avgDolphins2 = calcAverage(81, 54, 41);
avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
