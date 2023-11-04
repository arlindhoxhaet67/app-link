/*
 * Filename: complexCode.js
 * Description: A complex JavaScript code demonstrating various advanced concepts and techniques.
 */

// Custom utility function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Class representing a complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary);
  }

  subtract(other) {
    return new Complex(this.real - other.real, this.imaginary - other.imaginary);
  }

  multiply(other) {
    const real = (this.real * other.real) - (this.imaginary * other.imaginary);
    const imaginary = (this.real * other.imaginary) + (this.imaginary * other.real);
    return new Complex(real, imaginary);
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Function to find the n-th Fibonacci number (recursive implementation)
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Function to find the n-th Fibonacci number (iterative implementation)
function fibonacciIterative(n) {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
}

// Generate an array of all prime Fibonacci numbers up to a given limit
function generatePrimeFibonacci(limit) {
  const primeFibonacci = [];

  for (let i = 1; ; i++) {
    const fib = fibonacciIterative(i);

    if (fib > limit) break;

    if (isPrime(fib)) primeFibonacci.push(fib);
  }

  return primeFibonacci;
}

// Usage example

const complexNumber1 = new Complex(3, 4);
const complexNumber2 = new Complex(5, 2);

const sum = complexNumber1.add(complexNumber2);
console.log(`Sum: ${sum}`);

const difference = complexNumber1.subtract(complexNumber2);
console.log(`Difference: ${difference}`);

const product = complexNumber1.multiply(complexNumber2);
console.log(`Product: ${product}`);

const primeFibonacciNumbers = generatePrimeFibonacci(100);
console.log(`Prime Fibonacci Numbers: ${primeFibonacciNumbers}`);