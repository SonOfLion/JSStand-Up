let m = 10;
let n = 40;

let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 5 === 0) {
        // console.log("4 is called for number: " + i);
        console.log(i);
        break;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        // console.log("1 is called for number: " + i);
        result += i;
        continue;
    }
    if (i % 3 === 0) {
        // console.log("2 is called for number: " + i);
        result -= i;
        continue;
    }
    if (i % 4 === 0) {
        // console.log("3 is called for number: " + i);
        result *= i;
        break;
    }
}