// Napisz program, który wylosuje liczbę całkowitą pomiędzy 1 a 10. Następnie program pozwoli użytkownikowi wpisać w konsoli swój “strzał”. Jeśli użytkownik zgadnie, to program wyświetli informację “Udało się”, w przeciwnym razie: “Spróbuj ponownie”.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Guess a number in range 1-10 ', guess => {
    console.log(`Your number is ${guess}!`);
    let number = Math.floor(Math.random() * 10);
    console.log(`Computer's number is ${number}!`);
    number === guess ? console.log('Bullseye!') : console.log('Try again');
    readline.close();
});