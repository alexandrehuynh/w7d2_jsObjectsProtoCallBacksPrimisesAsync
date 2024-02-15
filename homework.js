//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayEnhancedFavoriteFoods(person) {
    // Iterate over each category in the person object
    for (const category in person) {
        const value = person[category];
        console.log(`${category}:`); // Display the category name
        
        // Check if the value is an array
        if (Array.isArray(value)) {
            // Iterate over the array and log each item
            value.forEach(item => {
                // If the item is an object (for the shakes), iterate over its properties
                if (typeof item === 'object' && item !== null) {
                    for (const shakeKey in item) {
                        // Display each shake with its name and flavor
                        console.log(`  ${shakeKey}: ${item[shakeKey]}`);
                    }
                } else {
                    // For regular string items in the array, display them under their category
                    console.log(`  ${item}`);
                }
            });
        } else {
            // If the value is a string (for tacos and burgers), display it under its category
            console.log(`  ${value}`);
        }
    }
}

// Call Function
displayEnhancedFavoriteFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Define the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Define the printInfo method using an arrow function
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Define the addAge method to increment the age
    this.addAge = () => {
        this.age += 1; // Increment the age by 1
    };
}

// Create two Person instances using the 'new' keyword
const person1 = new Person('Patrick Mahomes', 28);
const person2 = new Person('Shai Gilgeous-Alexander', 25);

// Use an arrow to create the printInfo method
person1.printInfo(); 
person2.printInfo(); 

// Create another arrow function for the addAge method that takes a single parameter
person1.addAge();
person1.addAge();
person2.addAge();

person1.printInfo(); // should be 30 since plus 2
person2.printInfo(); // should be 26 since plus 1

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {

        // Check if the input is actually a string
        if (typeof str !== 'string') {
            reject('Input must be a string.');
            return;
        }
        
        // Check the length of the string
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small Number");
        }
    });
}

// Call Function
checkStringLength("Hello my name is Alex and I like to eat apple pie")
    .then(message => console.log(message))
    .catch(error => console.log(error));

checkStringLength("Copacetic")
    .then(message => console.log(message))
    .catch(error => console.log(error));

checkStringLength(867-5309, "call jenny")
    .then(message => console.log(message))
    .catch(error => console.log(error));


// =============CodeWar Problem #1 ============//
https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. 
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, 
// so she asks you to write a program that tells her the ratings of the exhibits 
// after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with the lowest index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    
    // Find the index of the smallest number
    const minIndex = numbers.indexOf(Math.min(...numbers));
    
    // Return a new array without the smallest number
    return numbers.filter((_, index) => index !== minIndex);
}

// Call Function
console.log(removeSmallest([1, 2, 3, 4, 5])); 
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1])); 


// =============CodeWar Problem #2 ============//
https://www.codewars.com/kata/55f73f66d160f1f1db000059

// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). 
// The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

function combineNames(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Call Function
console.log(combineNames('James', 'Stevens')); 