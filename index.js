// comparisonModule.js

function calculateLetterSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const maxLength = Math.max(len1, len2);

    let matchingLetters = 0;

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] && str2[i] && str1[i] === str2[i]) {
            matchingLetters++;
        }
    }

    return (matchingLetters / maxLength) * 100;
}

function compareWords(word1, word2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(word1, word2);
    return {
        mostSimilar: similarityPercentage > threshold ? word1 : word2,
        matchPercentage: similarityPercentage
    };
}

function wordToObjectArrayComparison(word, objectArray, key, threshold = 70) {
    let mostSimilarInstance;
    let maxSimilarityPercentage = 0;

    objectArray.forEach(obj => {
        if (obj[key]) {
            const similarityPercentage = calculateLetterSimilarity(word, obj[key]);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance = obj;
            }
        }
    });

    return {
        mostSimilar: mostSimilarInstance || null,
        matchPercentage: maxSimilarityPercentage
    };
}

function compareObjects(obj1, obj2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(JSON.stringify(obj1), JSON.stringify(obj2));
    return {
        mostSimilar: similarityPercentage > threshold ? obj1 : obj2,
        matchPercentage: similarityPercentage
    };
}

function compareArrayPlaces(array1, index1, array2, index2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(array1[index1], array2[index2]);
    return {
        mostSimilar: similarityPercentage > threshold ? array1[index1] : array2[index2],
        matchPercentage: similarityPercentage
    };
}

function compareWordToArray(word, array, threshold = 70) {
    let mostSimilarInstance;
    let maxSimilarityPercentage = 0;

    array.forEach(item => {
        if (item) {
            const similarityPercentage = calculateLetterSimilarity(word, item);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance = item;
            }
        }
    });

    return {
        mostSimilar: mostSimilarInstance || null,
        matchPercentage: maxSimilarityPercentage
    };
}

function compareArrayToArrays(array1, array2, threshold = 70) {
    let mostSimilarInstance1;
    let mostSimilarInstance2;
    let maxSimilarityPercentage = 0;

    array1.forEach(item1 => {
        array2.forEach(item2 => {
            const similarityPercentage = calculateLetterSimilarity(item1, item2);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance1 = item1;
                mostSimilarInstance2 = item2;
            }
        });
    });

    return {
        mostSimilar1: mostSimilarInstance1 || null,
        mostSimilar2: mostSimilarInstance2 || null,
        matchPercentage: maxSimilarityPercentage
    };
}

function compareArrays(array1, array2, threshold = 70) {
    let mostSimilarInstance1;
    let mostSimilarInstance2;
    let maxSimilarityPercentage = 0;

    array1.forEach(item1 => {
        array2.forEach(item2 => {
            const similarityPercentage = calculateLetterSimilarity(item1, item2);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance1 = item1;
                mostSimilarInstance2 = item2;
            }
        });
    });

    return {
        mostSimilar1: mostSimilarInstance1 || null,
        mostSimilar2: mostSimilarInstance2 || null,
        matchPercentage: maxSimilarityPercentage
    };
}

function compareStringLength(str1, str2) {
    return {
        longerString: str1.length >= str2.length ? str1 : str2,
        lengthDifference: Math.abs(str1.length - str2.length)
    };
}

function compareNumberToRange(number, min, max) {
    return {
        withinRange: number >= min && number <= max,
        deviation: Math.abs(number - ((min + max) / 2))
    };
}

module.exports = {
    calculateLetterSimilarity,
    compareWords,
    wordToObjectArrayComparison,
    compareObjects,
    compareArrayPlaces,
    compareWordToArray,
    compareArrayToArrays,
    compareArrays,
    compareStringLength,
    compareNumberToRange
};
