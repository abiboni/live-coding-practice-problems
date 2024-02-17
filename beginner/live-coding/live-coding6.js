// function that takes the highest number in array of integers and lowest number and returns the sum. 
// JUST RETURNING SUM
// Math.max/min(...arr) sum = 0;
let testData = [1, 7, 23, -12,  8, 0, 6, 12, 17];
function bigOrSmall(arr) {
    let smallNum = arr[0];
    let bigNum = arr[0];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < smallNum) {
        smallNum = arr[i];
    } if(arr[i] > )
    }
    return smallNum
}


//     let bigNum = Math.max(...arr)
//     let smallNum = Math.min(...arr)
//     console.log(bigNum, smallNum)
// console.log(bigNum + smallNum);
// }
console.log(bigOrSmall(testData));