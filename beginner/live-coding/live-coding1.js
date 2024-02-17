// function that takes array of nums and prints smallest num and largest num and sum and avg of all numbs
// function arr(num) max, min, sum, avg
// [3, 5, 1, 9, 2]
	// [143, 298, 540, 379]
function arr(num) {
let smallNum = num[0];
let bigNum = num[0];
let sum = 0;

for (let i=0; i < num.length; i++) {
    // add sum of num array
    sum+= num[i]
    // get the min
if (num[i] <= smallNum) {
smallNum = num[i]
}
//  gets the max
if (num[i] >= bigNum) {
    bigNum = num[i]
}
}
return `Smallest: ${smallNum}, Largest: ${bigNum}, Sum: ${sum}, Average: ${sum/num.length}`
}
let testData = [3, 5, 1, 9, 2]
console.log(arr(testData))