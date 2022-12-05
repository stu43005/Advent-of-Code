const input = await fetch("https://adventofcode.com/2022/day/4/input").then(res => res.text());
const lines = input.trim().split("\n");

const part1 = lines.map(line => {
    const [elve1Start, elve1End, elve2Start, elve2End] = line.split(/[,-]/).map(s => +s);
    if (
        elve1Start >= elve2Start && elve1End <= elve2End ||
        elve1Start <= elve2Start && elve1End >= elve2End
    ) {
        return true;
    }
    return false;
});

console.log(part1.filter(Boolean).length);

const part2 = lines.map(line => {
    const [elve1Start, elve1End, elve2Start, elve2End] = line.split(/[,-]/).map(s => +s);
    if (
        elve1Start >= elve2Start && elve1Start <= elve2End ||
        elve2Start >= elve1Start && elve2Start <= elve1End ||
        elve1End >= elve2Start && elve1End <= elve2End ||
        elve2End >= elve1Start && elve2End <= elve1End
    ) {
        return true;
    }
    return false;
});

console.log(part2.filter(Boolean).length);
