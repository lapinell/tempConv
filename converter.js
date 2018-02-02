const temp = document.getElementById("temp").value;
const fahrenheitScale = document.getElementById("fahrenheit").checked;
const celsiusScale = document.getElementById("celsius").checked;

console.log("temp", temp);
console.log("degF", fahrenheitScale);
console.log("degC", celsiusScale);

switch (true) {
    case fahrenheitScale === true: 
        console.log("fahrenheit works");
        function toCelsius (temp) {
            // Tcel = (Tfah - 32) * 1.8
            let tCel = (temp - 32) * 1.8;
            return tCel;
        };
        break;
    case celsiusScale === true:
        console.log("celsius works");
        function toFahrenheit (temp) {
            // Tfah = (Tcel/1.8) + 32
            let tFah = (temp/1.8) + 32;
            console.log(tFah);
        }
        break;
    default:
        console.log("This ain't workin right");
}





// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");


//if the radio button for Celsius is chosen
//take the number stored in celsiusTemp and convert it to Fahrenheit 

//if the radio button for Fahrenheit is chosen
// // take the number stored in fahrenheitTemp and convert it to Celsius




// Assign a function to be executed when the button is clicked
// button.addEventListener( determineConverter);

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
