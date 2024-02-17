// // given an array print even if numbers are even and odd if odd.
// let testData = [23, 6, 20, 43, 18, 79, 45, 88, 64] 
// function evenOrOdd(arr) {
//     for(i=0; i <arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log('even')
//         }
//         console.log('odd')
//     }
// }
// console.log(evenOrOdd(testData));

// function accepts array of letters and uses two strings with caps and lower case separated by a space
let test = ["L", "A", "c", "U", "o", "d", "N", "C", "e", "r", "H", "s"];
let newArr = [];
function ABC(arr) {
    for(i=0; i < arr.length; i++) {
        if (arr[i].toLowerCase !== arr[0]) {
        newArr.push(arr[i].length)
    }
    return arr
}
}
 console.log(ABC(test));