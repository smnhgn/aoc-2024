const sampleInput = await Deno.readTextFile("./day1_sample.txt");
const input = await Deno.readTextFile("./day1.txt");

/* Part One */

function extractSortedLists(text: string): [number[], number[]] {
    const lines = text.split("\n");
    const array1 = [];
    const array2 = [];

    for (const line of lines) {
        const [num1, num2] = line.split("   ").map(Number);

        array1.push(num1);
        array2.push(num2);
    }

    array1.sort();
    array2.sort();

    return [array1, array2];
}

function findDistanceSum([array1, array2]: [number[], number[]]): number {
    let sum = 0;

    for (const [num1Index, num1] of array1.entries()) {
        const num2 = array2.at(num1Index)!;
        const diff = Math.abs(num1 - num2);

        sum += diff;
    }

    return sum;
}

const sortedListsSample = extractSortedLists(sampleInput);
const sortedLists = extractSortedLists(input)

console.log(`Part One (Sample):`);
console.log(findDistanceSum(sortedListsSample));
console.log(`Part One:`);
console.log(findDistanceSum(sortedLists));

/* Part Two */

function findSimilarityScore([array1, array2]: [number[], number[]]): number {
    let score = 0;

    for (const num1 of array1) {
        let occurences = 0;

        for (const num2 of array2) {
            if (num1 === num2) {
                occurences++;
            }
        }
        
        score += num1 * occurences;
    }

    return score;
}

console.log(`Part Two (Sample):`);
console.log(findSimilarityScore(sortedListsSample));
console.log(`Part Two:`);
console.log(findSimilarityScore(sortedLists));