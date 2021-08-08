function findMostFrequentNumberButFaster(numbers) {
    const frequency = new Map();
    for (let number of numbers) {
        frequency.set(number, frequency.get(number) ? frequency.get(number) + 1 : 1);
    }

    let bestNumber = null;
    let bestFrequency = 0;
    for (let candidate of numbers) {

        if (frequency[candidate] > bestFrequency) {
            bestNumber = candidate;
            bestFrequency = frequency[candidate];
        }
    }
    return bestNumber;
};

module.exports = {
    findMostFrequentNumberButFaster
}


