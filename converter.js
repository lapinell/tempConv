// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

fahrenheitTemp;
celsiusTemp;

function toCelsius (Tfah) {
    // Tcel = (Tfah - 32) * 1.8
    let tCel = (Tfah - 32) * 1.8;
    return tCel;
}

function toFahrenheit (Tcel) {
    // Tfah = (Tcel/1.8) + 32
    let tFah = (Tcel/1.8) + 32;
    return tFah;
}

console.log(toCelsius(fahrenheitTemp));
console.log(toFahrenheit(celsiusTemp));

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
