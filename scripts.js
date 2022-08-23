// Create an array called ages that contains the following values
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];
console.log("original array" ,ages)
let firstEl = ages.shift(); //shift method allows me to remove the first element of an array
console.log("first element" ,firstEl)



let lastEl = ages.pop(); //pop method allows me to remove the last element of an array
console.log("last element",lastEl);


console.log(lastEl - firstEl)

ages.push(100);

console.log("ages after push" ,ages);

console.log(firstEl)
console.log(lastEl - firstEl) // don't use the reduced method in js, use forloop instead


// first need to add all elements in the array and store in sum
//sum # of elements in the array


let total = 0;

for(let i = 0; i < ages.length; i++) {
    total = total + ages[i];
}
console.log(total);
// create the average

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
    console.log('Concetenated Names:' + names.join(''));
}