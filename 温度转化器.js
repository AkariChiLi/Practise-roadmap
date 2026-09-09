function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function formatTemperature(value, unit) {
    return `${value} ${unit}`;
}

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));

const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));

const input =document.getElementById('input');
const button =document.getElementById('button');
const output =document.getElementById('output');
const celsiusradio = document.getElementById('celsius');
const fahrenheitradio = document.getElementById('fahrenheit');

button.addEventListener('click', function() {
    if (celsiusradio.checked) {
        const celsiusValue = parseFloat(input.value);
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        const result = formatTemperature(fahrenheitValue, 'F');
        output.value = result;
    } else { 
        const fahrenheitValue = parseFloat(input.value);
        const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
        const result = formatTemperature(celsiusValue, 'C');
        output.value = result;
    }
});
