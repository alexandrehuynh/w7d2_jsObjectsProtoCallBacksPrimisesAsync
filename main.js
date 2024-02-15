console.log("Hello, RIP to the chicks")

let literalDay = new Date().toString()
console.log(literalDay)

let today = literalDay.split(" ")[0]
console.log(today)

switch(today) {
    case 'Sun' : 
        console.log("Probably homework because Ryan and Alex love me dearly")
        break;
    case 'Mon' :
        console.log("I am in class... allegedly... probably more on yahoo")
        break;
    case 'Tue' :
        console.log("it's TACCCCCOOO TUUUUUUEEEESSSDDDDAAAAAAYYYYYY")
        break;
    case 'Wed' :
        console.log("HUMP day calls for some hum...an interactions")
        break;
    case 'Thurs' :
        console.log("Is it bad that we are wishing for Friday")
        break;
    case 'Fri' :
        console.log("Thankfull not on Zoom all day... and a quiz")
        break;
    case 'Sat' :
        console.log("Stephen Curry beats Sabrina Ionescu")
        break;
    default: // what happens if none of the case are met
        console.log("not a day")
        break;
}

//Creation of JavaScript Objects
// these are dictionaries in python
let person = {
    "name": "Alex",
    "age": "30",
    "favColor": "orange",
    "clothes": {
        "shirt": "a slimming Cuts green tshirt perfectly cuffed around the body",
        "pants": "comfortable grey jogger shorts",
        "hat": "no need for that, we got a fresh fade baby",
        "jacket" : "what is this NY? We in Cali baby, it ain't cold like that"
    },
    "back-end": "Python",
    "front-end": 'JavaScript'
}

//           objectName['key']
console.log(person['name'])
// dot notation
//          objectName.key
console.log(person.age)
console.log(person["clothes"]["jacket"])
console.log(person.clothes.hat)
// we need bracket notation, because it doesn't interpret the - correctly
// console.log(person.front-end)
console.log(person['front-end'])

let person2 = {
    "name": "Dumbledore",
    "age": "124",
    "hobbies": ["quidditch", "cleaning his studies", "living", "general wizardry", "gaslighting children"],
    "favColor": "purple",
    "sportTeams": [
        {
            "Tutshill": "Tornados"
        },
        {
            "New York": "Knicks"
        },
        {
            "Manchester": "Manchester United"
        },
        {
            "Wimbourne": "Wasps"
        }
    ],
    "tvShows": ["Game of Thrones", "Dragonball Z", "One Piece", "Scrubs", "Britain's Got Talent", "Breaking Bad", "The Wire"]
}

console.log(person2)

// accessing keys from an object
// in python -- dict_name.keys()
// in javascript -- Obeject.keys(objectName)
console.log(Object.keys(person2))
console.log(Object.values(person2))

//looping through keys in an object
//   iterator of the thing we are iterating through
// of -- loop by value
// in -- loop by index
for (const key of Object.keys(person2)){
    console.log(key)
}
// looping through keys by index, but generally better off with the one above
for (let i in Object.keys(person2)) {
    console.log(Object.keys(person2)[i])
}
// looping through values in an object
// in python -- dict_name.values()
// in javascript -- Obeject.values(objectName)
console.log(Object.values(person2))

for (const key of Object.values(person2)){
    console.log(key)
}

// accessing key and value pairs from a dictionary / javascript object
// Object.entries(objectName)
for (let [key, value] of Object.entries(person2)){
    console.log(`the ${key} is/are ${value}`)
}
// trying for... in
// loops through keys in our object
// we can use the key to access the valuesi in the object
// similar to Object.entries(objectName)
for (const key in person2){
    console.log(key, person2[key])
}

// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */

// demonstrate JavaScript event loop
function first(){
    console.log(1)
}
function second(){
    console.log(2)
}

// first()
// second()

// adding a delay to the first function
function firstDelay(){
    setTimeout(()=>{
        console.log(1)
    }, 2000)
}

firstDelay() // delaying it
second() // will move past it because it is not waiting for function to complete

// callback function
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework!`)
    callback()
}

// doHomework('JavaScript', () =>{
//     console.log("Done with homework")
// })

/*
Though callbacks give us more functionaloty...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
})

*/

// JavaScript Promises
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(num)
        } else {
            reject(num)
        }
    })
}

isEvenNumber(10)
    // happy path resolves
    .then((result) => {
        console.log(`You're not odd, you can even: ${result}`)
    })
    .catch((error) => {
        console.log(`You seem odd bc you can't even: ${error}`)
    })

// asynchronous functions
// using async and await

function slowAddition(n1, n2) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(n1 + n2) }, 3000)
    })
}

// Useless... in more case than not, it'll finish too quickly... 
function increaseSalary(base, increase) {
    const newSalary = slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// increaseSalary(40000, 10000)

// async --> precedes a function and makes that function asynchronous
// await --> that tells the function to wait for a previous function to resolve before finishing

async function asyncSalary(base, increase) {
    console.log(`Old Salary: ${base}`)
    const newSalary = await slowAddition(base, increase)
    console.log(`Old Salary: ${base} => New Salary: ${newSalary}`)
    return newSalary
}

asyncSalary(50000, 10000)