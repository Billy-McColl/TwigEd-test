# TwigEd-test

Step 1 - open file test.js with a code editor of your choice or copy the code function from the bottom of this file.
Step 2 - open up google chrome and press down ctrl + shift + i.
Step 3 - navigate to the console tab.
Step 4 - clear any errors or warning that might be inside of the console.
Step 5 - paste the function that was inside of the test.js file or the function at the bottom of this file.
Step 6 - results will be displayed under the function.
Step 7 - Edit function. go to the last line  console.log(groupArrayElement(myArray, 2)); to change or test the N value of the function change the value 2 as this is the param for the N value.

Step 8 - change or edit array values. find the second last line const myArray = [1, 2, , 4, 5]; change the array as you see fit with new values inside of the [] brackets.


############

function groupArrayElement(myArray, n) {
    const result = [];

    if (myArray.length) {
        
        while (myArray.length) {
            const arrayChunk = myArray.splice(0, n)
            result.push(arrayChunk)
        }

        return result;
    } else {
        console.log(myArray)
    }
}

const myArray = [1, 2, , 4, 5];

console.log(groupArrayElement(myArray, 2));
