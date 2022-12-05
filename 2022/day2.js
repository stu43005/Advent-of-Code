const input = await fetch("https://adventofcode.com/2022/day/2/input").then(res => res.text());
const lines = input.trim().split("\n");

const part1 = lines.map(line => {
    const [opponentCode, myCode] = line.split(" ");
    const opponent = opponentCode.charCodeAt(0) - "A".charCodeAt(0) + 1;
    const my = myCode.charCodeAt(0) - "X".charCodeAt(0) + 1;
    const result = my - opponent;
    let point = my;
    if (result == 1 || result == -2) {
        // won
        point += 6;
    } else if (result == 0) {
        // draw
        point += 3;
    } else {
        // lost
    }
    return point;
});

console.log(part1.reduce((p, c) => p + c, 0));

const part2 = lines.map(line => {
    const [opponentCode, myCode] = line.split(" ");
    const opponent = opponentCode.charCodeAt(0) - "A".charCodeAt(0) + 1;

    if (myCode == "X") {
        // lost
        const my = opponent > 1 ? opponent - 1 : 3;
        return my;
    } else if (myCode == "Y") {
        // draw
        return 3 + opponent;
    } else {
        // won
        const my = opponent < 3 ? opponent + 1 : 1;
        return 6 + my;
    }
});

console.log(part2.reduce((p, c) => p + c, 0));
