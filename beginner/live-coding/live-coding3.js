/*
	Give your partner the following instructions:

	'Write a function that accepts two arrays of numbers. The function should return true or false if the arrays add up to the same sum or not.'

	Test data: 
	[6, 7, 14, 8, 10, 3, 6], [14, 5, 4, 11, 3, 8, 9]
	[48, 22, 19, 75, 31], [39, 11, 30, 54, 16]

	Expected result:
	true
	false

	If they ask:
	- The numbers will always be positive integers
	- There will always be at least 2 numbers in each array
	- The arrays will always have the same length
*/
const data =[[6, 7, 14, 8, 10, 3, 6], [14, 5, 4, 11, 3, 8, 9]];
const data1 = [[48, 22, 19, 75, 31], [39, 11, 30, 54, 16]]
function sameOrNot(arr1, arr2) {
    sum1 = 0;
    sum2 = 0;
    for (i=0; i<arr1.length;i++) {
        sum1+= arr1[i];
    }
    for (i=0; i<arr2.length;i++) {
        sum2+= arr2[i];
    }
    return sum1 === sum2;
}
console.log(sameOrNot(...data));
console.log(sameOrNot(...data1));