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

for (let i = 0; i < Object.values(person3).length; i++) {
    console.log(Object.values(person3)[i])
}


//for (const [key, value] of Object.entries(person3)) {
    //console.log(`${key}: ${value}`)
//}




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
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use an arrow to create the printInfo method
this.printInfo = () => {
    console.log(`${'name'} is ${age} years old`)
}


// Create another arrow function for the addAge method that takes a single parameter adding to the age 

let addAge = (() => {
    let counter = 34
    console.log('Test')
    return () => {return counter ++}
})()

console.log(addAge())
console.log(addAge())



//Create two people using the 'new' keyword, and print both of their infos
//increment one persons age by 3 years.
//Use an arrow function for both methods.
let addAge2 = (() => {
    let counter = 34
    console.log('Test')
    return () => {return counter +3}
})()

let person1 = new Person('Ashley', 34)
let person2 = new Person('Celene', addAge2())
console.log(person1)
console.log(person2)



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongWord = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isLongWord('dontgochasingwaterfalls')
    
.then((result) => {
    console.log(`${result} is a Big Word`)
})
.catch((error) => {
    console.log(`${error} is a Small Word`)
})


//Codewars Question 1 
//Americans are odd people: in their buildings, the first floor 
//is actually the ground floor and there is no 13th floor(due to superstition).
//Write a function that given a floor in the american system returns the floor in the european system.
//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//Basements (negatives) stay the same as the universal level.

//def get_real_floor(n):
    //if n <= 0: return n
    //if n < 13: return n-1
    //if n > 13: return n-2

getRealFloor = (n) => {
    if (n <= 0) {
        return n
    } else if (n < 13) {
        return (n-1)
    } else {
        return (n-2)
    }
}
console.log(getRealFloor(20))

//Codewars Question 2
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    
        if (arr[i] > 0) {                   
        total += arr[i];                  
        }
    }
    return total;                         
}
    
console.log(positiveSum([5,7,3,-2]))