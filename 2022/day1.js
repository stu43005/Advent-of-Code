const input = await fetch("https://adventofcode.com/2022/day/1/input").then(res => res.text());

const lines = input.split("\n");
let a = [];
let b = 0;
for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const n = +line;
    if (!line) {
        a.push(b);
        b = 0;
    }
    b += n;
}
a.push(b);
a = a.sort((a, b) => b - a);

console.log(a[0]);

console.log(a.slice(0, 3).reduce((p, c) => p + c, 0));
