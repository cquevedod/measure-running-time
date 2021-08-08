const { performance } = require('perf_hooks');

// Generates a random array of the given
// size containing integers in the [1, 10] range.
function generateRandomArray(size) {
    return [...Array(size)].map(() => Math.floor(1 + Math.random() * 10));
}

// Runs the given function and returns
// how long it took to run, in seconds
function measureRunningTime(callback, value) {
    const start = performance.now();
    if (typeof value === 'undefined') {
        callback();
    } else {
        callback(value);
    }
    const end = performance.now();

    return (end - start)/1000;
}

// Since in JavaScript there is no a
// native range method we can create
// one to mimic the Python one
function range(start, stop, step) {
    if (typeof stop === 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step === 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    const result = [];
    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

module.exports = {
    generateRandomArray,
    measureRunningTime,
    range
};