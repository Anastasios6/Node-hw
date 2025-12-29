console.log("------------");
console.log("F TO C");

function fToC(f) {
    return (f - 32) * 5 / 9
}
console.log(fToC(32));
console.log("------------");
console.log("C TO F ");

function cToF(c) {
    return (c * 9 / 5) + 32
}
console.log(cToF(0));
console.log("------------");
console.log("Plostina pravoagolnik");

function plostina(a, b) {
    return a * b;
}
console.log(plostina(5, 3));

console.log("---------");
console.log("Perimetar pravoagolnik");


function perimetar(a, b) {
    return 2 * a + 2 * b;
}
console.log(perimetar(5, 5));

console.log("------------");
console.log("Par Nepar");

function parNepar(n) {
    if (n % 2 === 0) {
        console.log(`${n} e paren`);
    } else {
        console.log(`${n} e neparen`);
    };
};
parNepar(16)



