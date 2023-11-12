// Create a variable
let firstName = "Umar";
let age = 40;
let isStudent = true;

console.log(
  `My name is ${firstName}, I am ${age} years old, and my student status is ${isStudent}`
);

// Create Object with Properties
const person = {
  firstName: "Umar",
  age: 40,
  isStudent: true,
};

console.log(person);

// Create an Array
let fruits = ["apple", "orange", "pear"];
console.log(fruits);

// Add fruits to the front of the array
fruits.unshift("banana");
console.log(fruits);

// Remove last fruit from the array
fruits.pop();
console.log(fruits);

// Remove fruit from the front of the array
fruits.shift();
console.log(fruits);

// Create a Function TO CALCULATE AREA
function calculatePerimeter(length, width) {
  let area = length * width;
  console.log(area);
  return area;
}
// Invoke the function
calculatePerimeter(100, 45);

// Create function with reversed array

function reverseArray(fruits) {
  let reversedArray = fruits.reverse();
  return reversedArray;
}

// Invoke the function
console.log(reverseArray(fruits));
