// Scope answers the question "where are my variables and functions available to me?"

// const, let variables are globally scoped, but not attached to the window object
// var variables are globally scoped AND attached to the window object
// anything that is in the global scope is attached to the window object, with the exception of const and let

const name = `Tyler`;

function cityConst () {
    const city = `Omaha`;
}

cityConst();

// this returns `Tyler`
console.log(name);

// this returns undefined, because city is scoped only to the cityConst() function
//console.log(city);

function nameConst () {
    const name = `Gregory`; 
    // returns `Gregory` instead of `Tyler` because it will variables will look at local scope first
    console.log(name);
}

nameConst();

// Curly brackets, whether in an if statement or a function, etc, will always create scope for variables within
// You can have nested levels of scope based on the complexity of your functions
// var variables are not block scoped, but they are function scoped

const sumatra = `fresh`;
const costarica = `stale`;

function makeCoffee(beans) {
    let brew;
    if (beans === "fresh") {
        brew = true;
    }
    if (brew === true) {
        const ready = `Coffee's Ready!`
        console.log(ready);
    }
    console.log(brew);
    
    // returns undefined because ready is scoped to our previous if statement
    // console.log(ready);
    
    console.log(costarica);

}

// scope lookup within javascript is based on where functions are defined, not where they're run.
// scope for variables within a function are based on the original function definition, not the scope the function is called in

// best practices: try not to create global variables

// function scoping: functions are scoped the exact same way as variables

function buyGroceries (itemOne, itemTwo) {
    function calculateCost() {
        return itemOne + itemTwo;
    }
    
    console.log(calculateCost());
}

// this returns undefined because it's only available within the scope of buyGroceries()
// calculateCost();