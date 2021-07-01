# TwigEd-test

* Step 1 - open file test.js with a code editor of your choice or copy the code function from the bottom of this file.
* Step 2 - open up google chrome and press down ctrl + shift + i.
* Step 3 - navigate to the console tab.
* Step 4 - clear any errors or warning that might be inside of the console.
* Step 5 - paste the function that was inside of the test.js file or the function at the bottom of this file.
* Step 6 - results will be displayed under the function.
* Step 7 - Edit function. go to the last line  console.log(groupArrayElement(myArray, 2)); to change or test the N value of the function change the value 2 as this is the param for the N value.

* Step 8 - change or edit array values. find the second last line const myArray = [1, 2, , 4, 5]; change the array as you see fit with new values inside of the [] brackets.


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

#######

Return the contents of the above array divided by N.
 
* Step 1. create a function called groupArrayElements.
* Step 2. to give that function 2 params myArray and n separate these with a single comma. Example above. 
* Step 3. I will declare an empty array and set that to the const variable result.
* Step 4. I initiate an If Statement to check that myArray does in fact have stored values.
* Step 5. The if Statement will check to see if that array has any values. If this is true, then the if statement will then start to loop through the array. 


Loop explained: 
I use a while loop to traverse the array each time we iterate through the loop we splice the array into N chunks and push each of the chunks to the result array I start up inside of the function.

While myArray.length has a value, it looped through the array . I then splice that array indexes from 0, then by the n value the user has inputted via console.log at the bottom of the file. Also known as Parameter(n)  with our function. 
We then pass these values that have been spliced to a new variable called arrayChunk. This will mange the chunks of the array that we pass from (n). Next part of the function is where I push the arrayChunk values that the loop has spliced onto the result array that I set up earlier. 
Once the loop has finished running, we will use the return keyword to end the function execution and specify the values to be returned the result array.

Else statement:
If the array has no index the If statement will console log the current state of the array and return an empty array as there is no values within the array and this results in the function being undefined.

* Step 6.  Outside of my function is where I do my testing to see if the function works. I make a const variable called myArray and give the array some values.
* Step 7. I use the console.log method to test and call my function and add in my array variable I just set up on mart 6 followed by the N value.
