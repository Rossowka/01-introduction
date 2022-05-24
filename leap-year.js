// Napisz program, który będzie posiadał stałą YEAR z określoną wartością (wybierz dowolną wartość, nie musi być aktualny rok). Program na konsoli powinien wyświetlić informację, czy rok jest przestępny.

let year = 2021;

function leapYear(year) {
    let a = year % 4 === 0;
    let b = year % 100 === 0;
    let firstRule = a && !b;
    let secondRule = year % 400 === 0;
    firstRule || secondRule ? console.log('Leap year') : console.log('Normal Year');
};

leapYear(year);