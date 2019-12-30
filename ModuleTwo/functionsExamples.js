// DEFAULT FUNCTIONS 
// Functions built into javascript / browsers that can be used "out of the box"

const a = Math.max(20, 50); // Line is Javascript statement; 20 and 50 are the "arguments" we're passing to the function

console.log(a); // console.log is a function as well

// Not all functions will return a value - sometimes they just do a job. These functions will return "undefined" which is fine

parseFloat(`35.5`); // Converts a string to a float number

parseInt(`46.78`); // Converts a string to a whole number (int)

Date.now(); // takes no arguments, returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

const h3 = document.querySelector(`h3`);

console.log(h3);

// Mozilla Developer Network has excellent JS documentation: https://developer.mozilla.org/en-US/