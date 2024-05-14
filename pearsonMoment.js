const readline =  require('readline');
const {stdoud} = require('process');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let X,Y 

rl.question("Enter values for x and separate with either a comma or space: ", function(inputX){
    X = inputX.split(/[,\s]+/).map(item => parseInt(item.trim()));
    
    rl.question("Enter values for y and separate with either a comma or space: ", function(inputY){
        Y = inputY.split(/[,\s]+/).map(item => parseInt(item.trim()));
        if (X.length === Y.length) {
            calculatePearsonMoment(X, Y);
        } else {
            console.log('The input values are not of equal length');
        }
        
        rl.close();
    });
});

function calculatePearsonMoment(X, Y) {
    const n = X.length;
    let summationOfX = 0;
    let summationOfY = 0;
    let summationOfSquareOfY = 0
    let summationOfSquareOfX = 0;
    let summationOfXAndYMultiplicant = 0;

    for (let i = 0; i < n; i++) {
        summationOfX += X[i];
        summationOfY += Y[i];
        summationOfSquareOfX += X[i] ** 2;
        summationOfSquareOfY += Y[i] ** 2
        summationOfXAndYMultiplicant += X[i] * Y[i];
    }
   let SXY = summationOfXAndYMultiplicant - ((summationOfX * summationOfY)/n)
   let SXX = summationOfSquareOfX - ((summationOfX ** 2)/n)
   let SYY = summationOfXAndYMultiplicant - ((summationOfY ** 2)/n)
   const r = SXY / (Math.sqrt(SXX * SXY))
   console.log(r);
   
}

