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
            // calculateSpearmanRank(X, Y);
        } else {
            console.log('The input values are not of equal length');
        }
        
        rl.close();
    });
});

 function threeSquare(){

}