(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var example_randomCentroids = [[1, 3], [5, 8], [3, 0]];

exports.default = {
    example_randomCentroids: example_randomCentroids

};

},{}],2:[function(require,module,exports){
'use strict';

var _kmean = require('./kmean');

var _kmean2 = _interopRequireDefault(_kmean);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("\nML in JS Chapter 4 k-means clustering examples.");
console.log("===============================================\n");

console.log("Testing centroid generation:");
console.log("===============================================\n");
var ex_randomCentroids_solver = new _kmean2.default(2, _data2.default.example_randomCentroids);

console.log("Randomly initialized centroids: ");
console.log(ex_randomCentroids_solver.centroids);
console.log("\n-----------------------------------------------\n\n");

},{"./data":1,"./kmean":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Page 159/442

var mean = function mean(numbers) {
    return numbers.reduce(function (sum, val) {
        return sum + val;
    }, 0) / numbers.length;
};

var distance = function distance(a, b) {
    return Math.sqrt(a.map(function (aPoint, i) {
        return b[i] - aPoint;
    }).reduce(function (sumOfSquares, diff) {
        return sumOfSquares + diff * diff;
    }, 0));
};

var KMeans = function () {
    function KMeans(k, data) {
        _classCallCheck(this, KMeans);

        this.k = k;
        this.data = data;
        this.reset();
    }

    _createClass(KMeans, [{
        key: "reset",
        value: function reset() {
            this.error = null;
            this.iterations = 0;
            this.iterationsLogs = 0;
            this.centroids = this.initRandomCentroids();
            this.centroidsAssignments = [];
        }
        // Determines the number of dimensions in the dataset.

    }, {
        key: "getDimensionality",
        value: function getDimensionality() {
            var point = this.data[0];
            return point.length;
        }

        // example of three data points ((1, 3), (5, 8), and (3, 0)), calling getRangeForDimension(0) would return {min: 1, max: 5}, and calling getRangeForDimension(1) would return {min: 0, max: 8}. 

    }, {
        key: "getRangeForDimension",
        value: function getRangeForDimension(n) {
            var values = this.data.map(function (point) {
                return point[n];
            });
            return {
                min: Math.min.apply(null, values),
                max: Math.max.apply(null, values)
            };
        }

        // Convienance to solve the above comment

    }, {
        key: "getAllDimensionRanges",
        value: function getAllDimensionRanges() {
            var dimensionRanges = [];
            var dimensionality = this.getDimensionality();

            for (var dimension = 0; dimension < dimensionality; dimension++) {
                dimensionRanges[dimension] = this.getRangeForDimension(dimension);
            }
            return dimensionRanges;
        }

        /* Initializes random centroids, using the ranges of the data
        to set minimum and maximum bounds for the centroids.
        You may inspect the output of this method if you need to debug
        random initialization, otherwise this is an internal method.
        */

    }, {
        key: "initRandomCentroids",
        value: function initRandomCentroids() {
            var dimensionality = this.getDimensionality();
            var dimensionRanges = this.getAllDimensionRanges();
            var centroids = [];

            //We must create 'k' centroids
            for (var i = 0; i < this.k; i++) {
                //Since each dimension has its own range, create a placeholder at first
                var point = [];

                //For each dimension in the data find the min/max range of that dimension and choose a random value that lies within that rnange
                for (var dimension = 0; dimension < dimensionality; dimension++) {
                    var _dimensionRanges$dime = dimensionRanges[dimension],
                        min = _dimensionRanges$dime.min,
                        max = _dimensionRanges$dime.max;

                    point[dimension] = min + Math.random() * (max - min);
                }
                centroids.push(point);
            }
            return centroids;
        }
    }]);

    return KMeans;
}();

exports.default = KMeans;

},{}]},{},[2]);
