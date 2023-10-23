// Get the display element
const screen = document.getElementById('display')

// Get all buttons (assuming they have a common class)
const buttons = document.querySelectorAll('.button')

// Get the clear button
const clear = document.getElementById('clear')

// Get all operation buttons
const operations = document.querySelectorAll('#operation')

// Get the equal button
const equal = document.getElementById('equal')

// Event listeners for number buttons
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        // Append the clicked button's text to the display
        screen.value += event.target.textContent;
    });
});

// Event listener for the clear button
clear.addEventListener('click', () => {
    // Clear the display
    screen.value = '';
});

// Event listeners for operation buttons
operations.forEach(opera => {
    opera.addEventListener('click', function (event) {
        // Append the clicked operation button's text to the display
        screen.value += event.target.textContent;
    });
});

// Event listener for the equal button
equal.addEventListener('click', function () {
    
screen.value = eval(screen.value) 

});



