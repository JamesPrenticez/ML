// Page 159/442

const mean = numbers => numbers.reduce((sum, val) => sum + val, 0) / numbers.length;

const distance = (a, b) => Math.sqrt(
a.map((aPoint, i) => b[i] - aPoint)
.reduce((sumOfSquares, diff) => sumOfSquares + (diff*diff), 0)
)

class KMeans {
    constructor(k, data){
        this.k = k
        this.data = data
        this.reset()
    }

    reset(){
        this.error = null
        this.iterations = 0
        this.iterationsLogs = 0
        this.centroids = this.initRandomCentroids()
        this.centroidsAssignments = []
    }
// Determines the number of dimensions in the dataset.
    getDimensionality(){
        const point = this.data[0]
        return point.length
    }

// example of three data points ((1, 3), (5, 8), and (3, 0)), calling getRangeForDimension(0) would return {min: 1, max: 5}, and calling getRangeForDimension(1) would return {min: 0, max: 8}. 
    getRangeForDimension(n){
        const values = this.data.map(point => point[n])
            return {
                min: Math.min.apply(null, values),
                max: Math.max.apply(null, values)
            }
    }

// Convienance to solve the above comment
    getAllDimensionRanges(){
        const dimensionRanges = []
        const dimensionality = this.getDimensionality();

        for(let dimension = 0; dimension < dimensionality; dimension++){
            dimensionRanges[dimension] = this.getRangeForDimension(dimension)
        }
        return dimensionRanges
    }

/* Initializes random centroids, using the ranges of the data
to set minimum and maximum bounds for the centroids.
You may inspect the output of this method if you need to debug
random initialization, otherwise this is an internal method.
*/

    initRandomCentroids(){
        const dimensionality = this.getDimensionality()
        const dimensionRanges = this.getAllDimensionRanges()
        const centroids = []

        //We must create 'k' centroids
        for (let i = 0; i < this.k; i++){
            //Since each dimension has its own range, create a placeholder at first
            let point = []

            //For each dimension in the data find the min/max range of that dimension and choose a random value that lies within that rnange
            for(let dimension = 0; dimension < dimensionality; dimension++){
                const {min, max} = dimensionRanges[dimension]
                point[dimension] = min + (Math.random()*(max-min))
            }
            centroids.push(point)
        }
        return centroids
    }
}

export default KMeans