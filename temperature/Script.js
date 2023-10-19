function convertTemperature() {
    // Get the Celsius input value
    const celsiusInput = document.getElementById('celsiusInput').value;

    // Check if input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsiusInput * 9/5) + 32;

        // Display the result
        document.getElementById('result').innerHTML = `${celsiusInput} &deg;C is ${fahrenheit.toFixed(2)} &deg;F`;
    } else {
        alert('Please enter a valid number for Celsius temperature.');
    }
}