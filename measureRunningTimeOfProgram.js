const { findMostFrequentNumberButFaster } = require('./mostFrequentNumber2');
const { 
    generateRandomArray,
    measureRunningTime,
    range
} = require('./utils');

console.log('\n Execution time for mostFrequentNumber.js: \n');
// Try a few different sizes up to 100,000.
for (let n of [1, 1000, 2000, 5000, 6000,
     ...range(10000, 100000 + 1, 10000)
    ]) {

    // Generate some random input of the desired size.
    const randomInput = generateRandomArray(n);

    // Measure how long it takes to run.
    const elapsed = measureRunningTime(findMostFrequentNumberButFaster, randomInput);
    console.log(`n = ${n} took ${elapsed} seconds \n`);
}
