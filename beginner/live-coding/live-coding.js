// given array of wordz print true or false if word has capital letters in it.
let arr = ["WebDev", "coder", "application", "launchCODE", "resourceful", "CAREER"];

// make loop for array
for (i = 0; i < arr.length; i++) {
    // to upper case print TRUE .charAt()
    if (arr[i].toLowerCase === (arr[i])) {
        // modify to print word in all caps if it has uppercase OR lowercase if all lowercase
        console.log(arr[i].toLowerCase());
    } else {
        console.log(arr[i].toUpperCase());
    }
}