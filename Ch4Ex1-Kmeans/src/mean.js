/**
* Mathematically, the mean of an empty set is undefined,
* so we could return early here. We could also allow the function
* to attempt dividing 0/0, would would return NaN in JavaScript but
* fail in some other languages (so probably a bad habit to encourage).
* Ultimately, I would like this function to not return mixed types,
* so instead let's throw an error.
*/

function mean(numbers){
    var sum = 0
    var length = numbers.length
    if(length === 0){
        throw new Error('Cannot calculate mean of empty set');
    }
    for(var i = 0; i < length; i++){
        sum += numbers[i]
    }
    return sum / length
}

console.log(mean([1, 2, 3, 4, 5]))

//In ES6, we can abuse our shorthand privileges and write the following:

const sum = (numbers) => numbers.reduce((sum, val) => sum + val, 0);
const mean = (numbers) => sum(numbers) / numbers.length;