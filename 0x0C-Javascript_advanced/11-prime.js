#!/usr/bin/node
function countPrimeNumbers() {
  let isPrime;
  let countPrimes = 0;
  for (let i = 2; i <= 100; i++) {
    isPrime = true;
    let end = Math.round(Math.sqrt(i));
    for (let mod = 2; mod <= end; mod++) {
      if (i % mod == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      countPrimes = countPrimes + 1;
    }
  }
  console.log(countPrimes);
  return countPrimes;
}
let startCountPrimeNumbers = window.performance.now();
for (let j = 1; j < 101; j++) {
  countPrimeNumbers();
}
let endCountPrimeNumbers = window.performance.now();

setTimeout(function () {
  console.log(
    "Execution time of calculating prime numbers 100 times was " +
      (endCountPrimeNumbers - startCountPrimeNumbers) +
      " milliseconds."
  );
}, 1);
