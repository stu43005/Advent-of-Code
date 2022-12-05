const input = await fetch("https://adventofcode.com/2022/day/3/input").then(res => res.text());
const lines = input.trim().split("\n");

function getPriority(item) {
    const itemCode = item.charCodeAt(0);
    const priority = itemCode > 90 ? itemCode - "a".charCodeAt(0) + 1 : itemCode - "A".charCodeAt(0) + 27;
    return priority;
}

const part1 = lines.map(line => {
    for (let index = 0; index < line.length / 2; index++) {
        const item = line[index];
        if (~line.indexOf(item, line.length / 2)) {
            return getPriority(item);
        }
    }
    return 0;
});

console.log(part1.reduce((p, c) => p + c, 0));

const chunked = lines.reduce((prev, curr, idx) => {
    if (idx % 3 == 0) {
        prev.push([]);
    }
    prev.at(-1).push(curr);
    return prev;
}, []);

const part2 = chunked.map(chunk => {
    for (let index = 0; index < chunk[0].length; index++) {
        const item = chunk[0][index];
        if (~chunk[1].indexOf(item) && ~chunk[2].indexOf(item)) {
            return getPriority(item);
        }
    }
    return 0;
});

console.log(part2.reduce((p, c) => p + c, 0));
