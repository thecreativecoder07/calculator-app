CALCULATOR

A simple and responsive web-based calculator built with HTML, CSS, and JavaScript. This calculator allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division, with clear and reset functionality.

FEATURES

- Basic arithmetic operations: +, -, *, /
- Decimal input support
- Delete (backspace) functionality
- Reset button to clear all input
- Responsive layout
- Clean and simple user interface

PROJECT STRUCTURE

- index.html      -> Main HTML file
- style.css       -> Styling for the calculator
- script.js       -> JavaScript logic for the calculator

CODE OVERVIEW

HTML:
The main user interface consists of:
- A display area showing the current input or result.
- Calculator buttons for numbers, operations, delete, reset, and calculate.

JavaScript:
- Listens for button clicks to update the display.
- Supports chaining multiple operations.
- Includes Reset and Del functionalities.
- Uses eval() to compute the result (for simplicity).

Example:
When you click the "=" button, it takes the input expression and computes the result using JavaScript's eval() method.

HOW TO RUN

1. Clone or download the repository to your local machine.
2. Open the 'index.html' file in your web browser.
3. The calculator should now be functional and ready to use.

CUSTOMIZATION

- To change colors, button sizes, or the layout, edit the 'style.css' file.
- You can extend functionality by adding more operations in the 'script.js' file.

FUTURE IMPROVEMENTS

- Add keyboard support
- Handle input errors (e.g., dividing by zero)
- Add dark mode toggle
- Improve accessibility features

LICENSE

This project is open-source and available under the MIT License.

