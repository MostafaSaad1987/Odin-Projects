function add7(num1) {
    return num1 + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    const firstLetter = str.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = str.slice(1);

    return firstLetterCap + remainingLetters;
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}



console.log(add7(3));
console.log(multiply(3, 2));
console.log(capitalize("abcd"));
console.log(lastLetter("abcd"));