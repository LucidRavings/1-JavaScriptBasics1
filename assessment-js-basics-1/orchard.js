///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalFujiAcres = 0
let totalGalaAcres = 0
let totalPinkAcres = 0
let totalAcres = 0
for(i = 0; i < fujiAcres.length; i++){
totalFujiAcres = totalFujiAcres + fujiAcres[i]
totalGalaAcres = totalGalaAcres + galaAcres[i]
totalPinkAcres = totalPinkAcres + pinkAcres[i]
}
totalAcres = totalFujiAcres + totalGalaAcres + totalPinkAcres
console.log("Total acres picked:" + totalAcres)
//The above code takes each of the arrays and adds them up into seperate total sums of the arrays, and then further creates a new variable for the combined total sum of acres and 'console.logs' it.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7
console.log("Average daily acres picked:" + averageDailyAcres)
//The above code simply takes our weekly total and devides it by seven and console logs it, in order to give us our daily average rate of acres completed per day of apple picking.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0){
    acresLeft -= averageDailyAcres
    days++
}
console.log("Days of work left:" + days)
//The above code takes our average acres per day rate of apple picking, and calculates the approximate remaining days of apple picking until harvesting is complete, console logging the results.
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiTons = []
let galaTons = []
let pinkTons = []
for(i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i]*6.5)
    galaTons.push(galaAcres[i]*6.5)
    pinkTons.push(pinkAcres[i]*6.5)
}
console.log("Tons of fuji apples picked:" + fujiTons)
console.log("Tons of gala apples picked:" + galaTons)
console.log("Tons of pink apples picked:" + pinkTons)
//The above code converts the raw ammount of acres harvested and converts them into an approximate ammount of tons, and console logs the result.
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

let totalFujiTons = 0
let totalGalaTons = 0
let totalPinkTons = 0

for(i = 0; i < fujiAcres.length; i++){
    totalFujiTons += fujiTons[i]
    totalGalaTons += galaTons[i]
    totalPinkTons += pinkTons[i]
}
fujiPounds = totalFujiTons * 2000
galaPounds = totalGalaTons * 2000
pinkPounds = totalPinkTons * 2000

console.log("Pounds of fuji apples:" + fujiPounds)
console.log("Pounds of gala apples:" + galaPounds)
console.log("Pounds of pink apples:" + pinkPounds)

//the above code takes the approximate tons of apples for each individual apple type and combines the total of tons harvested per day into a single approximate lump sum, and converts them into the more usful measurement of pounds while console logging the results.
// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Total fuji profit:$" + fujiProfit)
console.log("Total gala profit:$" + galaProfit)
console.log("Total pink profit:$" + pinkProfit)
//The code above takes the approximate pounds of apples currently harvested and multiplies them by their estimated profit ratio, creating an estimated total profit for each apple variety and console logging the results. 
// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total profit:$" + totalProfit)
//The above code takes each estimated total profit from all apple types and combines them into a single estimated total profit, console logging the result.