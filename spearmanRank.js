const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let X, Y; 

rl.question("Enter values for x and separate with either a comma or space: ", function(inputX){
    X = inputX.split(/[,\s]+/).map(item => parseInt(item.trim()));
    
    rl.question("Enter values for y and separate with either a comma or space: ", function(inputY){
        Y = inputY.split(/[,\s]+/).map(item => parseInt(item.trim()));
        if (X.length === Y.length) {
            calculateSpearmanRank(X, Y);
        } else {
            console.log('The input values are not of equal length');
        }
        
        rl.close();
    });
});

function calculateSpearmanRank(X, Y) {
    function rankingOfNumbers(array) {
        const sortedArray = [...array];
        sortedArray.sort((a, b) => a - b);
        const arrayRank = {};
        sortedArray.forEach(num => {
            arrayRank[num] = 0;
        });
        sortedArray.forEach((num, index) => {
            arrayRank[num] += index;
        });
        const rankedNumbers = array.map(number => arrayRank[number]);
        return rankedNumbers;
    }
    
    const rankedX = rankingOfNumbers(X);
    const rankedY = rankingOfNumbers(Y);
    
    const d = rankedX.map((num, index) => num - rankedY[index]);
    const dSquare = d.map(num => num ** 2);
    const summationDSquare = dSquare.reduce((acc, num) => acc + num , 0);
    
    function calculatingTheSpearman_sRank(summationDSquare, X) {
        const sixSummationDSquare = 6 * summationDSquare;
        const n =  X.length;
        const nSquareMInnusOne = n * (n ** 2 - 1);
        const rank = 1 - sixSummationDSquare / nSquareMInnusOne;
        return rank;
    }
    
    const rank = calculatingTheSpearman_sRank(summationDSquare, X);
    const spearRank  = 1 + rank;
    const spearManRank = spearRank.toFixed(1);
    console.log(rank);
    
    if (spearManRank >= 0.9) {
        console.log('A very strong relationship, get married');
    } else if (spearManRank >= 0.6 && spearManRank <= 0.8) {
        console.log('Work on yourselves, or break up');
    } else if (spearManRank >= 0.3 && spearManRank <= 0.5) {
        console.log('Shaky ground, work on yourselves');
    } else {
        console.log('Divorce fast');
    }
}
