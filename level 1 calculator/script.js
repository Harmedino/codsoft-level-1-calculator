let confirm = true
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
        confirm = true
        if (screen.value == 0 ) {
            screen.value = '';
        }
        
        // Append the clicked button's text to the display
        screen.value += event.target.textContent;
    });
});

// Event listener for the clear button
clear.addEventListener('click', () => {
    // Clear the display
    screen.value = 0;
});

// Event listeners for operation buttons

operations.forEach(opera => {
    opera.addEventListener('click', function (event) {
        if (confirm) { 
            screen.value += event.target.textContent;
        } 
        const lastCharacter = screen.value[screen.value.length - 1];
        if (event.target.textContent == lastCharacter) {
           
           confirm = false
        } else {

            screen.value = screen.value.substring(0, screen.value.length - 1) + event.target.textContent;
        }
       
        // Append the clicked operation button's text to the display
    });
});

// Event listener for the equal button
equal.addEventListener('click', function () {
    
screen.value = eval(screen.value) 

});



