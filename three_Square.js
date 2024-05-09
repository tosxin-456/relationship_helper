const readline = require('readline');
const {stdout} = require('process');
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

let X,Y; 

rl.question("Enter values for x and separate with either a comma or space: ", function(inputX){
    X = inputX.split(/[,\s]+/).map(item => parseInt(item.trim()));
    
    rl.question("Enter values for y and separate with either a comma or space: ", function(inputY){
        Y = inputY.split(/[,\s]+/).map(item => parseInt(item.trim()));

        if (X.length === Y.length) {
            threeSquareValues(X, Y);
        } else {
            console.log('The input values are not of equal length');
        }
        
        rl.close();
    });
});

 function threeSquareValues(X,Y){
  const n = X.length
  let summationOfX = 0
  let summationOfY = 0
  let summationOfSquareOfX = 0
  let summationOfXAndYMultiplicant = 0
  for (let i = 0; i < X.length; i++ ){
     summationOfX += X[i]
    summationOfY += Y[i]
    summationOfSquareOfX += X[i] ** 2
    summationOfXAndYMultiplicant += X[i] * Y[i]
  }
  const squareOfSummationX = summationOfX ** 2
  const numerator = (n * summationOfXAndYMultiplicant) - (summationOfX * summationOfY)
  const denominator = (n * summationOfSquareOfX) - squareOfSummationX;
  const m =  numerator / denominator

  const b = (summationOfY - m * summationOfX)/ n
 const equationOfLine = `${m}x + ${b}`
  console.log(equationOfLine)
}