// closures are the ability for an inner function to access variables from a higher level scope, even after the "parent" functions have been closed out

function outer () {
    const outerVar = `Hey buddy, I'm the outter const`;

    function inner () {
        const innerVar = `Hey friendo, I'm the inner const`;

        console.log(outerVar);

        console.log(innerVar);
    }

    return inner;
}

// saves the returned value of outer(); inside the const innerFn
const innerFn = outer();

// innerFn() now has access to the variables inside outer() even though outer is not being run.
// these variables shouldn't be accessible because they're scoped to outer(), but they are
// const outerVar is still going to return in a console log when innerFn() is run
// this is known as a "closure" and it can be used to create a function
innerFn();


function createGreeting (greeting = '') {
    const myGreet = greeting.toUpperCase();

    return function (name) {
        return `${myGreet} ${name}`
    }
}


const sayCheerio = createGreeting(`Cheerio!`);
const sayTopOTheMorning = createGreeting(`Top of the morning to yah!`);

// returns "CHEERIO! BillyBob"
console.log(sayCheerio(`BillyBob`));

// returns "TOP OF THE MORNING TO YAH! Suzanne"
console.log(sayTopOTheMorning(`Suzanne`));

function createGame(gameName) {
    let score = 0;

    return function win () {
        score++;
        return `Your ${gameName} game score is ${score}`;
    }
}

const basketball = createGame('Basketball');

const golf = createGame('Golf');

// each time golf() or basketball() is run, their score will increment separately from each other
// "score" is not a variable that is available anywhere else