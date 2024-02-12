//
let i = 3;

while (i) {
    alert( i-- );
}
//1
//
let i = 0;
while (++i < 5) alert( i );
// 1 2 3 4
let i = 0;
while (i++ < 5) alert( i );
// 1 2 3 4 5
//
for (let i = 0; i < 5; i++) alert( i );
// 0 - 4
//
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}
//
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
while (i < 3){
    i++
}
//
let num;
do {
    let num = prompt("write a number greater than 100", 0);
}
while (num <= 100 && num);
//
let n = prompt('Write a number', '');
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
    }

    alert( i ); // a prime
}
//
