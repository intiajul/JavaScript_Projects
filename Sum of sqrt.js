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
console.log(`${series} = ${sum}`)