const X = [5,3,5,4];
const Y = [5,4,4,5];

function rankingOfNumbers(array) {
    const sortedArray = [...array];

    sortedArray.sort((a, b) => a - b);

    const arrayRank = {};

    sortedArray.forEach(num => {
        arrayRank[num] = 0;
    });

    // Assign ranks
    sortedArray.forEach((num, index) => {
        arrayRank[num] += index;
    });

    // Map original numbers to their ranks
    const rankednumbers = array.map(number => arrayRank[number]);

    return rankednumbers;
}

const rankedX = rankingOfNumbers(X);
const rankedY = rankingOfNumbers(Y)
const d = rankedX.map((num,index) =>num - rankedY[index]) 
const dSquare = d.map(num=>num**2)
const summationDSquare = dSquare.reduce((acc,num) => acc + num ,0)


function calculatingTheSpearman_sRank (summationDSquare, X){
    const sixSummationDSquare = 6 * summationDSquare
    const n =  X.length
    const nSquareMInnusOne = n*(n**2 - 1)
    const rank = 1 - sixSummationDSquare/nSquareMInnusOne
    return rank 
}
const rank = calculatingTheSpearman_sRank(summationDSquare, X);
const spearRank  = 1 + rank
const spearManRank = spearRank.toFixed(1)
// console.log(rank)

if(spearManRank>=0.9){
console.log('A very strong relatiionship, get married');
}
else if(spearManRank>=0.6 && spearManRank<=0.8){
console.log('work on yourselves');
}
else if(spearManRank>=0.3 && spearManRank<=0.5){
console.log('shaky ground');
}
else{
console.log('divorce');

}

