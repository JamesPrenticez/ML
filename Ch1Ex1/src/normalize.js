// Page 111/442

// Data from our imaginary database
const measurements = [
    { 
    day: 1,
    value: 0.1381426172
    },
    { 
    day: 2,
    value: 0.5678176776
    },
    { 
    day: 3,
    value: 0.3564009968
    },
    { 
    day: 4,
    value: 1.239499423
    },
    { 
    day: 5,
    value: 1.267606181
    },
    { 
    day: 6,
    value: 1.440843361
    },
    { 
    day: 7,
    value: 0.3322843208
    },
    { 
    day: 8,
    value: 0.4329166745
    },
    { 
    day: 9,
    value: 0.5499234277
    },
    { 
    day: 10,
    value: -0.4016070826
    },
    { 
    day: 11,
    value: 0.06216906816
    },
    { 
    day: 12,
    value: -0.9689103112
    },
    { 
    day: 13,
    value: -1.170421963
    },
    { 
    day: 14,
    value: -0.784125647
    },
    { 
    day: 15,
    value: -1.524217169
    },
    { 
    day: 16,
    value: -0.4689120937
    },
    { 
    day: 17,
    value: -0.7458561671
    },
    { 
    day: 18,
    value: -0.6746415566
    },
    { 
    day: 19,
    value: -0.0429460593
    },
    { 
    day: 20,
    value: 0.06757010626
    },
    { 
    day: 21,
    value: 0.480806698
    },
    { 
    day: 22,
    value: 0.2019759014
    },
    { 
    day: 23,
    value: 0.7857692899
    },
    { 
    day: 24,
    value: 0.725414402
    },
    { 
    day: 25,
    value: 1.188534085
    },
    { 
    day: 26,
    value: 0.458488458
    },
    { 
    day: 27,
    value: 0.3017212831
    },
    { 
    day: 28,
    value: 0.5249332545
    },
    { 
    day: 29,
    value: 0.3333153146
    },
    { 
    day: 30,
    value: -0.3517342423
    },
    { 
    day: 31,
    value: -0.721682062
    },
];

/* If we wish to normalize this data to the range [-1, +1], we must first discover the largest
absolute value of all numbers in the set, which in this case is day 15's value of -1.52.
were to simply use JavaScript's Math.max on this data, we would find the maximum value
on the number line, which is day 6's value of 1.44—however, day 15 is more negative than
day 6 is positive. */

let max = Math.max.apply(null, measurements.map(obj => obj.value))

let absolute_max = Math.max.apply(null, measurements.map(obj => Math.abs(obj.value)))

console.log(max)
console.log(absolute_max)

//Given the absolute maximum value, we can normalize our data points like so:

const normalized = measurements.map(obj => obj.value / absolute_max);

console.log(normalized)