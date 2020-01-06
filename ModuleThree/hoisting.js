// "hoisting" is the method by which JS compilers "hoist" all functions to the top of the file and run them first.
// this means you can run a function before it's declared in the file, even though that technically shouldn't work.

// this function will run just fine
doStuff();

function doStuff () {
    console.log("hoisting.js saying hi!");
}

// it's still considered best practice to first define functions, then use them, so you don't have to rely on hoisting
// or write the functions inside another file and then import them as needed


// this returns "undefined", the variable is defined later in the script
// console.log(event);

// this returns an error, because the variable is never defined in the script
// console.log(flowerCost);

const event = `Flower Show`;

// according to Wes, JS should also hoist variable declaration, (but not variable value) but this seems to have changed
// it seems like JS now does not hoist any info about a variable, and returns a specific error instead