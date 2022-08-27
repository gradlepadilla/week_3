// Create an array called ages that contains the following values
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];
console.log("original array" ,ages)
let firstEl = ages.shift(); //shift method allows me to remove the first element of an array
console.log("first element" ,firstEl)



let lastEl = ages.pop(); //pop method allows me to remove the last element of an array
console.log("last element",lastEl);


console.log(lastEl - firstEl)

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(100);

console.log("ages after push" ,ages);



//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
// first need to add all elements in the array and store in sum
//sum # of elements in the array

let total = 0;
console.log(total);
for(let i = 0; i < ages.length; i++) {
    total = total + ages[i];
}
// create the average
console.log('Average age in ages array =  ' + (total / ages.length));

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam","Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);


//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let lett = 0
for(let i = 0; i< names.length; i++) {
    console.log(names[i].length);
    lett = lett + names[i].length
}
console.log('Average number of letters in each name for each array =' + (lett / names.length));

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for(let i = 0; i < names.length; i++) {
    console.log('Concetenated Names:' + names.join(' '));
}
//How do you access the last element of any array?
let lastElement = names[names.length-1];
console.log(lastElement)
//How do you access the first element of any array?
console.log(names[0])

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array

for(let i = 0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length);
}
    console.log(nameLengths);
    
    // nameLengths.push[0,1,2,3]
  

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let l = 0;
for (i = 0; i < nameLengths.length; i++) {
    l + nameLengths[i];
}
console.log(l);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function hi(word,n) {
    let j = ''
    for (let i = 0; i < n; i++) {
        j = j + word;
    }
    return j;
}
console.log(hi('hi',5));

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function createFullName(firstName, lastName) {
    return(firstName + ' ' + lastName);
}
    console.log(createFullName('Andrew', 'Padilla'));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan(theArray) {
    let b = 0;
    for (i = 0; i < theArray.length; i++) {
        b = b + theArray[i];
    }
if (b > 100) {
    return true;
}
}
console.log(greaterThan(ages));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function avgElements(theArrayz){
let base = 0
for(let i = 0; i < theArrayz.length; i++) {
    base = base +theArrayz[i];
}
return base / (theArrayz.length);
}
    console.log(avgElements(ages));
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function greaterThanEl(Arrayone, Arraytwo){
    return avgElements(Arrayone) > avgElements(Arraytwo); 
}
console.log(greaterThanEl([2,88,55,7],[100,44,9,33]));

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink(true, 100));

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//My function is called putsunlotion and takes a boolean isOverHeated and a a degrees of farenheit in a number of grillIsHot, and returns true if 
// it is overheated and grillishot is greater than 200

function putSunLotion(isOverHeated, grillIsHot) {
    if(isOverHeated === true && grillIsHot > 200){
        return true
    } else{
        return false
    }
}
console.log(putSunLotion(true, 300));