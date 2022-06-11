//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//function findWords() {
//}
function findwords() {
    for (let dog of dog_names) {
        if (dog_string.includes(dog)) {
            console.log(`Matched ${dog}`)
        }
        else {
            console.log(`No Matches`)
        }
    }
}
findwords()

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens() {
    for (let i = 0; i < arr.length; i++){
        arr.splice(1, i++, `even index`); {
        }
    }
}
console.log(replaceEvens())

        

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Codewars questions

//1. Your task is to write a function which returns the time since midnight in milliseconds.


//def past(h, m, s):
    //return h * 3600000 + m * 60000 + s * 1000

let past = function(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
}

console.log(past(5,7,3))


//2. Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//def getVolumeOfCuboid(length, width, height):
//return length * width *height

let getVolumeofCuboid = function (length, width, height) {
    return length * width * height
}

console.log(getVolumeofCuboid(2, 7, 5))

//3. Write function bmi that calculates body mass index (bmi = weight / height2).

////if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

//def bmi(weight, height):
    //bmi = weight / height ** 2
    //if bmi <= 18.5:
        //return "Underweight"
    //elif bmi <= 25:
        //return "Normal"
    //elif bmi <= 30:
        //return "Overweight"
    //else:
        //return "Obese"
//function 

function bmi(weight, height) {
    if (bmi <= 18.5) {
        return 'Underweight'
    }
    else if (bmi <= 25) {
        return 'Normal'
    }
    else if (bmi <= 30) {
        return 'Overweight'
    }
    else {
        return 'Obese'
    }
}

console.log(bmi(28))

//4. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//def even_or_odd(number):
  //if number % 2 == 0:
    //return "Even"
  //else:
    //return "Odd"

let even_or_odd = function(number) {
    if (number % 2 == 0) {
         return 'Even'
    }
    else {
        return 'Odd'
    }
} 
console.log(even_or_odd(5))