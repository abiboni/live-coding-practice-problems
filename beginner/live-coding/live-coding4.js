// ["L", "A", "c", "U", "o", "d", "N", "C", "e", "r", "H", "s"]
// take all cap letters and then all noncaps and then put together
// expected "LAUNCH code"

// let data = ["L", "A", "c", "U", "o", "d", "N", "C", "e", "r", "H", "s"]
// let upperCase = [];
// let lowerCase = [];
// // use isUpperCase
// for (let i=0; i < data.length; i++) {
//     if(data[i] === data[i].toUpperCase()) {
//         upperCase.push(data[i])
//     } else {
//         lowerCase.push(data[i]);
//         }
//     }
//     console.log(upperCase.join('') + ' ' +lowerCase.join(''))

// function accepts string and returns sum of letter values
// Test data: 
// 	"LaunchCode"
// 	"Coding is fun!"

// 	Expected result:
// 	86
// 	121
let data = "LaunchCode"
let data1 = "Coding is fun!"
function sumOfABC(str) {
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    let sum = 0;
for (let i=0; i < str.length; i++) {
 let letter = str[i].toUpperCase();
 if (ABC.includes(letter)) {
    sum += ABC.indexOf(letter) + 1
 }
}
return sum
}
console.log(sumOfABC(data1));

