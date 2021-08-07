//Euclidean distance

/**
* Calculates only the 2-dimensional distance between two points a and b.
* Each point should be an array with length = 2, and both elements defined and numeric.
* @param {Array.number} a
* @param {Array.number} b
* @return {float}
*/

function distance2d(a, b) {
    // Difference between b[0] and a[0]
    var diff_0 = b[0] - a[0];
    // Difference between b[1] and a[1]
    var diff_1 = b[1] - a[1];
    return Math.sqrt(diff_0*diff_0 + diff_1*diff_1);
}

//Effectvly this is just triganometry for calulating the hypotenues

console.log(distance2d([0,0],[10,10]))

//We must support many more than two dimensions, however, so we can
// generalize to the following:

/**
* Calculates the N-dimensional distance between two points a and b.
* Each point should be an array with equal length, and all elements defined and numeric.
* @param {Array.number} a
* @param {Array.number} b
* @return {float}
*/

function distance(a, b) {
    var length = a.length,
    sumOfSquares = 0;

    if (length !== b.length) {
    throw new Error('Points a and b must be the same length');
    }
    for (var i = 0; i < length; i++) {
    var diff = b[i] - a[i];
    sumOfSquares += diff*diff;
    }
    return Math.sqrt(sumOfSquares);
}

console.log(distance([1, 1, 1, 1],[10,10, 20, 20]))

//We can write an ES6 one-liner for this, but it won't be as readable as the
//lengthier, explicit example:
const distanceES6 = (a, b) => Math.sqrt(
    a.map((aPoint, i) => b[i] - aPoint)
    .reduce((sumOfSquares, diff) => sumOfSquares + (diff*diff), 0)
)