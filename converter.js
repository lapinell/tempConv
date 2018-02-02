const temp = document.getElementById("temp");
let printHere = document.getElementById("displayTemp");

//if the radio button for Celsius is chosen
//take the number stored in celsiusTemp and convert it to Fahrenheit 

//if the radio button for Fahrenheit is chosen
// // take the number stored in fahrenheitTemp and convert it to Celsius

function toCelsius () {
    // Tcel = (Tfah - 32) / 1.8
    let tCel = (temp.value - 32) / 1.8;
    return tCel;
};

function toFahrenheit () {
    // Tfah = (Tcel/1.8) + 32
    let tFah = temp.value * 1.8 + 32;
    return tFah;
}

// console.log("degF", fahrenheitScale);
// console.log("degC", celsiusScale);

let convertedTemp = () => {

    const fahrenheitScale = document.getElementById("fahrenheit").checked;

    const celsiusScale = document.getElementById("celsius").checked;

    switch (true) {
        case fahrenheitScale: 
            console.log("fahrenheit works");
            printHere.innerText = toCelsius().toString() + " degrees Celsius";
            break;
        case celsiusScale:
            console.log("celsius works");
            printHere.innerText = toFahrenheit().toString() + " degress Fahrenheit";
            break;
        default:
            console.log("This ain't workin right. Try again.");
    }
};

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

let tempColor = () => {
    switch (true) {
                   case toFahrenheit() > 90 || toCelsius() > 32:
                       console.log(temp.value);
                       console.log("red");
                       break;
                   case toFahrenheit() < 32 || toCelsius() < 0:
                       console.log(temp.value)
                       console.log("blue");
                       break;
                   default:
                       console.log("green");
               }

};


// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

const submitButton = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
// button.addEventListener( determineConverter);

submitButton.addEventListener("click", convertedTemp);
submitButton.addEventListener("click", tempColor);


const resetButton = document.getElementById("resetForm");

function clearForm () {
    document.getElementById("tempConverter").reset();
};

resetButton.addEventListener("click", clearForm);

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
      

let enterKeyStroke = () => {
    if (event.keyCode == 13) {
        event.preventDefault();
        console.log("you've pressed enter");
        convertedTemp();
        tempColor();
    }
};


temp.addEventListener("keydown", enterKeyStroke);





