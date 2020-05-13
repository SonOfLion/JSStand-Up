let m = 10;
let n = 40;

let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 5 === 0) {
        // console.log("3 if is called")
        console.log(i);
        continue;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        // console.log("1 if is called " + i);
        result += i;
        continue;
    }
    if (i % 3 === 0) {
        // console.log("2 if is called " + i);
        result -= i;
        continue;
    }
    if (i % 4 === 0) {
        // console.log("3 if is called " + i);
        result *= i;
        continue;
    }
}