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