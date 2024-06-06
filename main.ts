//           🚀 Day 19 Challenge: Start Coding! 🚀

//Question 55: 
//Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.



// Starts with a list of numbers
let numbers = [2, 4, 6, 8, 10];

// Doubles each number
let doubledNumbers = numbers.map(number => number * 2);

// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [4, 8, 12, 16, 20]




//Question 56:
//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// A mixed bag of items
let mixedArray = [16, "Bag", 59, "Box", false, "Bread"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

console.log(stringsArray); // Output: ["Bag", "Bog", "Bread"]



//Question 57:
//find the Average Grade: Given a list of grades, calculate the average grade.


// A list of grades
let grades = [89, 96, 82, 89, 93, 85];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade) / grades.length;

// Shows the average grade
console.log(averageGrade);


