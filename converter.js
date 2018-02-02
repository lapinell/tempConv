const temp = document.getElementById("temp");

console.log("temp", temp);

//if the radio button for Celsius is chosen
//take the number stored in celsiusTemp and convert it to Fahrenheit 

//if the radio button for Fahrenheit is chosen
// // take the number stored in fahrenheitTemp and convert it to Celsius


// console.log("degF", fahrenheitScale);
// console.log("degC", celsiusScale);

let convertedTemp = () => {

    const fahrenheitScale = document.getElementById("fahrenheit").checked;

    const celsiusScale = document.getElementById("celsius").checked;


    switch (true) {
        case fahrenheitScale: 
            console.log("fahrenheit works");
            function toCelsius (tF) {
                // Tcel = (Tfah - 32) / 1.8
                let tCel = (tF - 32) / 1.8;
                return tCel;
            };
            console.log(toCelsius(temp.value));
            break;
        case celsiusScale:
            console.log("celsius works");
            function toFahrenheit (tC) {
                // Tfah = (Tcel/1.8) + 32
                let tFah = tC * 1.8 + 32;
                return tFah;
            }
            console.log(toFahrenheit(temp.value));
            break;
        default:
            console.log("This ain't workin right. Try again.");
    }
};


// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

const submitButton = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
// button.addEventListener( determineConverter);

submitButton.addEventListener("click", convertedTemp);



// let clearForm = () => {
//     document.getElementById("tempConverter").reset();
// }




// const resetButton = document.getElementById("resetForm");

// resetButton.addEventListener("reset", clearForm());

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
