//question 1

//question 2

//question 3
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // Output = [1,2,3,4]

//question 4

let array1 = [10, 5, 8, 1, 9];
let largest = 0;
let secondLargest;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > largest) {
        largest = array1[i];
    }
    if (secondLargest < largest && secondLargest > array1[i]) {
        secondLargest = largest;
    }else{
        secondLargest = array1[i]
    }
}
console.log(largest)
console.log(secondLargest)

//question 5
function charFrequency(arr) {
    let freq = {}
    let value;
    for (let i = 0; i < arr.length; i++) {
        value = arr[i];
        if (freq[value]) {
            freq[value]++;
        } else {
            freq[value] = 1
        }
    }
    console.log(freq)
}
let array2 = [1,2,3,2,1,2,3,4,5,5,54,43,3,3,2,1,1,1,1,1,1]
charFrequency(array2)


// for (let i = 0; i < arr.length; i++) {
//     // code
// }
//question 6


//question 7

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
people.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return a.age - b.age;
});
console.log(people);
