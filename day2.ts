const sampleInput = await Deno.readTextFile("./inputs/day2_sample.txt");
const input = await Deno.readTextFile("./inputs/day2.txt");
const sampleInputLines = sampleInput.split("\n");
const inputLines = input.split("\n");

function countSafeReports(reports: string[]) {
    let safeReports = 0;

    for (const report of reports) {
        const levels = report.split(" ").map(Number);
        let mode: "safeup" | "safedown" | "unsafe" | undefined;

        for (const [levelIndex, level] of levels.entries()) {
            const nextLevel = levels.at(levelIndex + 1);

            if (!nextLevel) {
                safeReports++;
                break;
            }
            
            const levelDiff = level - nextLevel;
            const isSafeUp = levelDiff >= -3 && levelDiff < 0;
            const isSafeDown = levelDiff <= 3 && levelDiff > 0;
            const currentMode = isSafeUp ? "safeup" : isSafeDown ? "safedown" : "unsafe";

            if (!mode) {
                mode = currentMode;
            } else if (mode === "unsafe" || mode !== currentMode) {
                break;
            }
            
        }
    }

    return safeReports;
}

console.log(`Part One (Sample):`);
console.log(countSafeReports(sampleInputLines));
console.log(`Part One:`);
console.log(countSafeReports(inputLines));
