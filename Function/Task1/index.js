/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
/*  input:-;
    output:number;
*/
function getSenseOfLife() {
    return 42;
}

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */
/*  input:number;
    output:number;
*/
function getSquared(num) {
    return num * num;
}

/* ф-ция sum должна принимать два числа и вернуть их сумму */
/*
    input:number,number;
    output:number;
*/
function sum(a, b) {
    return a + b;
}

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */
/*
    input:number;
    output:undefined!;
*/
function sum(num) {
    console.log('I am ' + num + ' 34 years old');
}

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
/*
    input: number,number;
    output:number;
*/
let mult = (a, b) => a * b;

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
/*
    input: number,number;
    output:number;
*/
let square = (num) => num * num;

console.log('Hello');

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
/*
    input: -;
    output:number;
*/
let getMagicNumber = () => 17;