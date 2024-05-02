const X = [4, 6, 3, 8, 2, 0];
const Y = [2, 3, 4, 5, 6, 7];

function rankingOfNumbers(array) {
    const sortedArray = [...array];

    sortedArray.sort((a, b) => a - b);

    const arrayRank = {};

    sortedArray.forEach(num => {
        arrayRank[num] = 0;
    });

    // Assign ranks
    sortedArray.forEach((num, index) => {
        arrayRank[num] += index + 1;
    });

    // Map original numbers to their ranks
    const rankednumbers = array.map(number => arrayRank[number]);

    return rankednumbers;
}

const rankedX = rankingOfNumbers(X);
const rankedY = rankingOfNumbers(Y)
console.log([rankedX, rankedY]);
