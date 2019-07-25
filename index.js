const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('bitmap.txt'),
    crlfDelay: Infinity
});

let lineNumber = 0;
let nbTestIsOk = true;
let bitmapSize = [];
let sizeIsOk = true;

rl.on('line', (line) => {
    if (sizeIsOk && nbTestIsOk  ) {
        switch (lineNumber) {
            //we check the number of test
            case 0:
                if (line <= 0 || line > 1000) {
                    nbTestIsOk = false;
                } else {
                    nbTest = line;
                }
                break;
            //we keep the size of the bitmap on a variable
            case 1:
                bitmapSize = line.split(" ");
                sizeIsOk = checkIfTheSizeIsOk(bitmapSize);
                break;
            // otherwise we process to calculate
            default:
                let splittedLine = line.split('');
                distanceCalculation(splittedLine, bitmapSize[1]);
                break;
        }
        lineNumber++;
    }
});

rl.input.on('end', () => {
    if(!sizeIsOk) {
        console.log("The bitmap size is incorrect.");
    } else if (!nbTestIsOk){
        console.log("The number of test case is incorrect.");
    } else {
        console.log("The process is done.");
    }
});

let distanceCalculation = function(myArray, lengthOfTheRow) {
    if(myArray.includes("1")){
        let res = recursiveFunction(myArray, myArray.indexOf('1'), 0, lengthOfTheRow)
        console.log(res.join(' '));
    } else {
        console.log(myArray.join(' '));
    }
}

let recursiveFunction = function(myArray, index, oldIndex, lengthOfTheRow) {
    const myResults = [];
    for(i=index-oldIndex;i--;i>0){
        myResults.push(i+1);
    }

    if((index+1 < lengthOfTheRow) && (myArray.indexOf('1', index+1) !== -1)) {
        return myResults.concat(recursiveFunction(myArray, myArray.indexOf('1', index+1), index, lengthOfTheRow));
    }
    return myResults;
}

let checkIfTheSizeIsOk = function(bitmapSize){
    if (
        bitmapSize[0] < 0 ||
        bitmapSize[0] > 182 ||
        bitmapSize[1] < 0 ||
        bitmapSize[1] > 182
    ) 
    return false;
        else 
    return true
}