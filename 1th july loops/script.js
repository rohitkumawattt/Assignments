console.log("--- 1. Loop Basics ---");

console.log("Numbers from 1 to 10 (for loop):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


console.log("\nNumbers from 10 down to 1 (while loop):");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}


console.log("\nNumbers from 1 to 5 (do...while loop):");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);





console.log("\n--- 2. Even, Odd, Multiples ---");

console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\nOdd numbers between 20 and 50:");
for (let i = 20; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("\nNumbers divisible by 3 from 1 to 30:");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}





console.log("\n--- 3. Summation & Product ---");

let sum1To100 = 0;
for (let i = 1; i <= 100; i++) {
  sum1To100 += i;
}
console.log("Sum of numbers from 1 to 100:", sum1To100);

let product1To10 = 1;
for (let i = 1; i <= 10; i++) {
  product1To10 *= i;
}
console.log("Product of numbers from 1 to 10:", product1To10);

let sumEven1To50 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sumEven1To50 += i;
  }
}
console.log("Sum of all even numbers between 1 and 50:", sumEven1To50);


let sumOfSquares = 0;
for (let i = 1; i <= 10; i++) {
  sumOfSquares += i * i;
}
console.log("Sum of squares of numbers from 1 to 10:", sumOfSquares);






console.log("\n--- 4. Conditionals Inside Loops ---");

console.log("Numbers from 1 to 20, skipping multiples of 4:");
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

console.log("\nNumbers from 1 to 10, stopping at 7:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}


let countDivisibleBy3And5 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    countDivisibleBy3And5++;
  }
}
console.log(
  "\nNumbers between 1 and 100 divisible by both 3 and 5:",
  countDivisibleBy3And5
);







console.log("\n--- 5. Nested Loops (Without Patterns) ---");
console.log("Pairs (i, j) : ");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}
console.log("\nCombinations (a, b) where a + b = 5 : ");
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(`(${a}, ${b})`);
    }
  }
}





console.log("\n--- 6. Logic-Based Tasks ---");
let numToCheckPrime = 17;
let isNumPrime = true;

if (numToCheckPrime <= 1) {
  isNumPrime = false;
} else {
  for (let i = 2; i * i <= numToCheckPrime; i++) {
    if (numToCheckPrime % i === 0) {
      isNumPrime = false;
      break; 
    }
  }
}
console.log(`${numToCheckPrime} is prime:`, isNumPrime);



let numForFactorial = 6;
let factorialResult = 1;
  for (let i = 1; i <= numForFactorial; i++) {
    factorialResult *= i;
  }
  console.log(`Factorial of ${numForFactorial}:`, factorialResult);



let numToReverse = 123; 
let originalNumToReverse = numToReverse;
let reversedNumber = 0;
let tempNumToReverse = Math.abs(numToReverse);
while (tempNumToReverse > 0) {
  let digit = tempNumToReverse % 10;
  reversedNumber = reversedNumber * 10 + digit;
  tempNumToReverse = Math.floor(tempNumToReverse / 10);
}
console.log(`Reverse of ${originalNumToReverse}:`, reversedNumber);