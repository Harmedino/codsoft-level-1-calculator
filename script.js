let confirm = true; // Flag to control repeating operations
const screen = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const clear = document.getElementById("clear");
const operations = document.querySelectorAll(".operation-button");
const equal = document.getElementById("equal");
const del = document.getElementById("delete");

// Event listeners for number buttons
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    confirm = true; // Reset the flag when a number button is clicked
    if (screen.value == 0) {
      screen.value = ""; // Clear the leading zero
    }

    // Append the clicked button's text to the display
    screen.value += event.target.textContent;
  });
});

// Event listener for the clear button
clear.addEventListener("click", () => {
  // Clear the display
  screen.value = 0;
});

// Event listeners for operation buttons
operations.forEach((opera) => {
  opera.addEventListener("click", function (event) {
    if (confirm) {
      screen.value += event.target.textContent;
    }
    const lastCharacter = screen.value[screen.value.length - 1];
    if (event.target.textContent == lastCharacter) {
      confirm = false;
    } else {
      screen.value =
        screen.value.substring(0, screen.value.length - 1) +
        event.target.textContent;
    }
  });
});

// Event listener for the equal button
equal.addEventListener("click", function () {
  screen.value = eval(screen.value); // Evaluate the expression
});

// Event listener for the delete button
del.addEventListener('click', () => {
    if (screen.value.length == 1) {
        screen.value = 0; // Reset to zero if there's only one character
    } else {
        screen.value = screen.value.slice(0, -1); // Remove the last character
    }
});
