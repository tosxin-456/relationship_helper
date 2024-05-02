const X = [4, 6, 3, 8, 2, 0,7];
const Y = [2, 3, 4, 5, 6, 7,3];

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

console.log(spearManRank);

