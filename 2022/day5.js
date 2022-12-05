const input = await fetch("https://adventofcode.com/2022/day/5/input").then(res => res.text());
const [inputStack, inputMoves] = input.split("\n\n");

function setupStacks(input) {
    const stacks = new Map();
    input.split("\n").reverse().slice(1).forEach(line => {
        for (let index = 0; index < line.length; index += 4) {
            const n = index / 4 + 1;
            const item = line.slice(index, index + 4).trim().replace(/[\[\]]/g, "");
            if (!stacks.has(n)) stacks.set(n, []);
            if (item) {
                stacks.get(n).push(item);
            }
        }
    });
    return stacks;
}

const part1 = setupStacks(inputStack);

inputMoves.trim().split("\n").forEach(line => {
    const [, move, from, to] = line.match(/move (\d+) from (\d+) to (\d+)/);
    for (let i = 0; i < move; i++) {
        const item = part1.get(+from).pop();
        if (item) {
            part1.get(+to).push(item);
        }
    }
});

console.log([...part1.values()].map(stack => stack.at(-1)).join(''));


const part2 = setupStacks(inputStack);

inputMoves.trim().split("\n").forEach(line => {
    const [, move, from, to] = line.match(/move (\d+) from (\d+) to (\d+)/);
    const fromStack = part2.get(+from);
    const items = fromStack.splice(fromStack.length - move, move)
    part2.get(+to).push(...items);
});

console.log([...part2.values()].map(stack => stack.at(-1)).join(''));

