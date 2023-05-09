# Conditional Rendering

- Sometimes you want to render certain content based on the state or properties of your React component. This is called conditional rendering. In React, you can use various techniques to conditionally render content.

1. Using the ternary operator
2. Using the && operator
3. Using if statements
4. Using multiple components
5. Using switch statements

## Exercises

1. Create a Temperature component that takes a temperature prop and displays a message based on whether the temperature is hot (greater than or equal to 90), warm (greater than or equal to 70 but less than 90), or cool (less than 70).

2. Create a Login component that takes a isLoggedIn prop and displays a "Welcome" message if the user is logged in and a "Please log in" message if they are not.

3. Create a TrafficLight component that takes a color prop

## Assignment

1. Create a component called EvenOdd that takes a number prop and displays a message indicating whether the number is even or odd.

2. Create a component called PasswordStrength that takes a password prop and displays a message indicating the strength of the password. The strength of the password can be determined based on the length of the password (weak for less than 8 characters, medium for 8-12 characters, and strong for more than 12 characters).

3. Create a component called ShowHideText that takes a text prop and displays a "Show" button and a "Hide" button. When the "Show" button is clicked, the component should display the full text. When the "Hide" button is clicked, the component should only display the first 50 characters of the text.
