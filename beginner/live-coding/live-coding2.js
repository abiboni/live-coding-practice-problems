// 'Write a function that accepts two words and checks if they contain all the same vowels or not. The function should return true or false.'
let data1 = 'alleviate';
let data2 = 'menial';
// 'ordinal', 'catechism',
// 'allude', 'undersecretary',
// 'idiocy', 'functional']; 
function vowelCheck(str, str2) {
for (i=0; i < str.length; i++) {
    let regEx = /[aeiou]/gi;
    if (regEx.match(str.length[i],
        regEx.multiline)) {
        return false
    }
    return true
}
}
vowelCheck(data)