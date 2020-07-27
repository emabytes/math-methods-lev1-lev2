// lev 1_1 💡 

console.log(Math.PI) // 3.141592653589793
const pi = 3.141592653589793;
let roundedPI = pi.toFixed(2)

console.log(roundedPI) //3.14


//lev 1_2  💡 
// Schreibe eine Funktion, die eine Zahl aufrundet.

var array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

function getRoundNum(someArray) {
    array.forEach(x => {
        Math.round(x)
    })
}

console.log(getRoundNum(array))
// 3
// 193
// 1
// - 3
// undefined



// lev1_3  💡 

// Random numbers

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10)
let randomNum1_100 = Math.floor(Math.random() * 100)

console.log(randomNum)
console.log(randomNum1_10)
console.log(randomNum1_100)



//lev 1_4  💡

console.log(Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488)) //2

console.log(Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488)) //488


//lev 2_1  💡
// Ihre Aufgabe besteht darin, eine Funktion zu erstellen, 
// die eine gegebene Zahl auf genaue Dezimalstellen rundet.

function roundTo(num, decimal) {
    return num.toFixed(decimal)
}

console.log(roundTo(34.5678, 2)) //34.57
console.log(roundTo(3.1415926535, 5)) // 3.14159


//lev 2_2  💡

function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 10);
    let guess = prompt("Guess a number between 1 and 10 🤔");

    if (guess == randomNumber) {
        console.log("You win! Yes, you got it!🏅")
    } else {
        console.log(`You lose! I was looking for ${randomNumber}...`)
    }
}

guessNumber()


// lev 2_3 💡

function minimalWerte() {
    let dasAlterDerEltern = Math.min(60, 55);
    let dasAlterDerGeschwister = Math.min(10, 15, 20);
    let dasAlterDerFussballspieler = Math.min(33, 34, 27, 25, 30, 37, 31, 36);

    console.log(
        `Der Jüngste der Gruppe ist: 
    Eltern - ${dasAlterDerEltern}
    Geschwister -  ${dasAlterDerGeschwister}  
    Fussballspieler - ${dasAlterDerFussballspieler}`
    )
}

minimalWerte()
// Der Jüngste der Gruppe ist:
//     Eltern - 55
//     Geschwister -  10  
//     Fussballspieler - 25