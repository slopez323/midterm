// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){
    let arr = [];
    for (let i = num1; i <= num2; i++){
        arr.push(i);
    };
    let odd = arr.filter(x => x % 2 !== 0);
    return odd.reduce((total, x) => {
        return total + x},0);
}

/* console.logs to test */
console.log("sumOfOdds");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(`The sum of odds between -10 and 2 is: ${sumOfOdds(-10, 2)}`);
console.log(`The sum of odds between 4 and 31 is: ${sumOfOdds(4, 31)}`);
console.log("\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(numArr1, numArr2){
    let sumArr = [];
    for (let i = 0; i < numArr1.length; i++){
        sumArr.push(numArr1[i] - numArr2[i]);
    }
    return sumArr;
};

/* console.logs to test */
console.log("arraySubtract");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(`The difference of the numbers in the array [7,9] and [2,6] are: [${arraySubtract([7,9],[2,6])}]`);
console.log(`The difference of the numbers in the array [7,9,2,4] and [2,6,3,-2] are: [${arraySubtract([7,9,2,4],[2,6,3,-2])}]`);
console.log("\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr, str1, str2){
    arr.unshift(str1);
    arr.push(str2);
    return arr
}

/* console.logs to test */
console.log("surroundArray");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray(['test','test1'],'addfront','addback'))
console.log("\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arr){
    let longest = ''
    if(arr.length === 0){
        return '';
    } else {
        for (let i = 0; i < arr.length; i++){
            if(arr[i].length > longest.length){
                longest = arr[i]
            };
        };
    };
    return longest
};

/* console.logs to test */
console.log("longestString");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(['a','xxxxxxxxxxxxxxxxxxx','ccc','dd','dddddddd','longlonglonglonglonglonglonglonglonglonglong']))
console.log(longestString([]))
console.log("\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){
    arr = [...str];
    arr = arr.map(x => {
        if(x === 's'){
            return x = 'r';
        } else if (x === 'r'){
            return x = 's';
        } else if (x === 'S'){
            return x = 'R';
        } else if (x === 'R'){
            return x = 'S';
        } else return x;
    })
    return arr.join('');
}

/* console.logs to test */
console.log("sToR");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR('SurpRisingly'));
console.log("\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    return num % 4 === 0 && num % 7 === 0;
}

/* console.logs to test */
console.log("divisibleBy4And7");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(21));
console.log(divisibleBy4And7(24));
console.log(divisibleBy4And7(28));
console.log(divisibleBy4And7(10));
console.log("\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    return str.includes('!') && str.includes('?');
}

/* console.logs to test */
console.log("exclamationAndQuestion");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion('Trythis?'))
console.log(exclamationAndQuestion('Trythis!'))
console.log(exclamationAndQuestion('Trythis'))
console.log(exclamationAndQuestion('Try!this?'))
console.log("\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
    let a = 0;
    let b = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'A'){
            a++
        } else if(str[i] === 'b' || str[i] === 'B'){
            b++
        }
    }
    return [a,b]
}

/* console.logs to test */
console.log("countAB");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB('aAbBaAbBaaBaBadddddd'))
console.log("\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr, str){
    arr = arr.map(x => {
        if(x[x.length-1] === 's' || x[x.length-1] === 'S'){
            return x += str
        } else return x
    });
    return arr;
}

/* console.logs to test */
console.log("addStringIfLastS");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'))
console.log(addStringIfLastS(['tests', 'testing', 'testings'], 'TEST'))
console.log("\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr){
    if (arr.length < 2){
        return undefined
    };
    if (arr.length === 2){
        return arr[0] < arr[1] ? [arr[0],arr[1]] : [arr[1],arr[0]];
    };
    let smallest = arr[0];
    let nextSmallest;
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            nextSmallest = smallest;
            smallest = arr[i];
        };
    };
    return [smallest, nextSmallest];
};

/* console.logs to test */
console.log("twoSmallest");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(twoSmallest([4,100,89,34,2,8,-4]))
console.log(twoSmallest([10,8]))
console.log(twoSmallest([4]))
console.log("\n");

