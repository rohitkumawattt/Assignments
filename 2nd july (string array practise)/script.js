// string questions 
// question 1
function reverseString(str) {
    newArray = str.split('');

    newArray.reverse();
    result = newArray.join("");
    console.log(result);
}
reverseString("hello")

//question 2

// question 3
function countVowle(str) {
    let count = 0;
    let ArrayedName = str.split("")
    console.log(ArrayedName)
    ArrayedName.forEach(i => {
        if (i === 'a' || i === 'e' || i === 'o' || i === 'i' || i === 'u') {
            count++;
        }
    });
    console.log(`${ArrayedName} -> ${count}`)

}
countVowle("javascript")

//question 4


function capitalizewords(str) {
    let convertedName = str.split(" ");
    let Arrayresult = [];
    for (let i = 0; i < convertedName.length; i++) {
        let word = convertedName[i];
        let capitalize = word[0].toUpperCase() + word.slice(1)
        Arrayresult.push(capitalize)
    }
    console.log(Arrayresult.join(" "))
}
capitalizewords("hello world");

//question 5

function charFrequency(str) {
    let freq = {}
    let char;
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1
        }
    }
    console.log(freq)
}

charFrequency("heeeellloooooooo")



//Array questions 
//question 1

function removeDuplicates(arr) {
    let resultArray = []
    arr.forEach(i => {
        let char = i;
        if (resultArray[char]) {
            return;
        } else {
            resultArray.push(char)
        }
    });
    console.log(resultArray)

}
removeDuplicates([1, 2, 3, 4, 5, 6, 4, 3, 2, 4])


//question 2

//question 3

function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i<=arr.length; i++){
        let num = arr[i]
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    console.log(max)
    console.log(min)

}
findMaxMin([2,3,4,2,,4,7,77])

// question 4

function SumEven(arr){
    let sum = 0;
    for(let i = 0; i<=arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    console.log("Sum of even number in an array is : " + sum)
}
SumEven([1,2,3,4,5,6,7,8,9])


//question 5 

function groupByType(arr) {
    let group = {};
    arr.forEach(i => {
        let char = i;
        let type = typeof char;
        if (!group[type]) {
            group[type] = []
        } else {
            group[type].push(char)
        }
    });
    console.log(group)

}
groupByType([false, 2, 'a', 4, 5, "hello", "rohit", 3, true, 4])