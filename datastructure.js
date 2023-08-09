function findDistinctSum(set1, set2) {
    let distinctElements = [];
    let sum = 0;
    
    for (let element of set1) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
            sum += element;
        }
    }
    
    for (let element of set2) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
            sum += element;
        }
    }
    
    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log("Output:", result);









function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

function checkOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
}

const vectors = [
    [1, 0, 2],
    [0, -1, 1],
    [2, 3, 0]
];

const n = vectors.length;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const orthogonal = checkOrthogonal(vectors[i], vectors[j]);
        if (orthogonal) {
            console.log("Vectors", vectors[i], "and", vectors[j], "are orthogonal.");
        } else {
            console.log("Vectors", vectors[i], "and", vectors[j], "are not orthogonal.");
        }
    }
}