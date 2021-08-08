function findMostFrequentNumber(numbers) {
    let bestNumber = null;
    let bestFrequency = 0;
    
    for (let candidate of numbers) {
        //  Count how many times this candidate 
        //  appears.
        let candidateFrequency = 0;
        for (let x of numbers) {
            if (x === candidate) {
                candidateFrequency += 1;
            }
        }
        
        //  Check if this candidate beats the best
        // candidate seen so far.
        if (candidateFrequency > bestFrequency) {
            bestNumber = candidate;
            bestFrequency = candidateFrequency;
        }
    }

    return bestNumber;
};

module.exports = {
    findMostFrequentNumber
}


