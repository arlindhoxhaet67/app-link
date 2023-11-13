/*
Filename: AdvancedAlgorithm.js

Description: This code implements an advanced algorithm for finding prime numbers.
It uses the Sieve of Eratosthenes algorithm combined with advanced optimizations.

*/

// Function to find all prime numbers up to a given limit using the Sieve of Eratosthenes algorithm
function findPrimes(limit) {
  // Create an array to mark all numbers as potentially prime
  const primes = new Array(limit + 1).fill(true);
  
  // 0 and 1 are not prime
  primes[0] = primes[1] = false;

  // Apply the Sieve of Eratosthenes algorithm
  for (let i = 2; i * i <= limit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Collect all prime numbers
  const result = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

// Function to count the number of prime numbers up to a given limit using the prime-counting
// function based on the Meissel-Lehmer algorithm
function countPrimes(limit) {
  if (limit < 2) return 0;
  
  // Prepare variables and initialize arrays
  const sqrt = Math.sqrt(limit);
  const log = Math.log;
  const floor = Math.floor;
  
  const pi = floor(sqrt);
  let phi = new Array(pi + 1);
  let prime_pi = new Array(pi + 1);
  
  for (let i = 0; i <= pi; i++) {
    phi[i] = i;
    prime_pi[i] = i - 1;
  }

  // Calculate prime-counting function by approximation
  for (let p = 2; p <= pi; p++) {
    if (phi[p] === phi[p - 1]) continue;

    for (let n = p; n <= pi; n += p) {
      phi[n] -= (phi[n] / p) | 0;
    }

    for (let n = floor(limit / p), pn = prime_pi[n] - prime_pi[p - 1]; pn; --pn) {
      phi[n] -= phi[n - p];
    }

    prime_pi[pi] -= prime_pi[pi / p - 1] - prime_pi[p - 1];
  }

  return prime_pi[pi] + phi[floor(limit / prime_pi[pi])] - 1;
}

// Example usage

const limit = 1000000;

console.log(`Generating all prime numbers up to ${limit}...`);
const primes = findPrimes(limit);
console.log(`Found ${primes.length} prime numbers.`);

console.log(`Counting the number of prime numbers up to ${limit}...`);
const primeCount = countPrimes(limit);
console.log(`There are ${primeCount} prime numbers up to ${limit}.`);

// Further code and calculations can be performed using the prime numbers or prime count found above