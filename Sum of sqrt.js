<<<<<<< HEAD
n = prompt("Enter a number: ");
let sum = 0;
let series = "";

for (i = 1; i <= n; i++) {
    sum = sum + (i * i);
    series += (i ** 2).toString();
    if (i == n) {
        continue
    }
    series += "+";

}
console.log(sum);
console.log(series);
=======
n = prompt("Enter a number: ");
let sum = 0;
let series = "";

for (i = 1; i <= n; i++) {
    sum = sum + (i * i);
    series += (i ** 2).toString();
    if (i == n) {
        continue
    }
    series += "+";

}
console.log(sum);
console.log(series);
>>>>>>> 3fb0a5c31064453addeb59d7add473d76d2e23ef
console.log(`${series} = ${sum}`)