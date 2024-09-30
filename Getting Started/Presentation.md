---
title: "JavaScript Basics"
author: "Kunal Raut"
date: "2024"
---

<!-- Slide 1 -->

# Welcome to JavaScript Basics 🎉

Welcome to the world of JavaScript! In this presentation, we'll explore the fundamentals of JavaScript, including its purpose, main features, and building blocks.

---

<!-- Slide 2 -->

## What is JavaScript?

- JavaScript is a **programming language** used to create interactive web pages.
- JavaScript is an actively evolving language and has changed greatly over the years.
- JavaScript is introduced in 2015, added many new features(sometimes known as ECMAScript 2015 or ES6).
- It can change the structure, style, and behavior of web elements.
- The other great thing about JavaScript is that it's the one language that is supported by all of the major browsers(e.g.,Google Chrome, Opera,FireFox).
- Commonly used to:
  - Add interactivity (e.g., games, animations)
  - Handle user inputs (e.g., forms, buttons)
  - Update content dynamically without reloading the page.
- If you are using a desktop browser, the best place to type your sample code is your browser's JavaScript console.

---

example :-

        Message
          |
          |

alert ("hello");----endpoint
|
function
(keyword)

<!-- Slide 3 -->

## Getting Started with JavaScript

Before diving in, it's helpful to know some HTML and CSS.

- **HTML**: Defines the structure of the webpage.
- **CSS**: Controls the style and layout.
- **JavaScript**: Adds dynamic behavior.

### Online Editors

- If you don’t have a local setup, try **JSBin** or **Glitch** to run JavaScript code online.

---

<!-- Slide 4 -->

### 1. Understanding Numbers and Operators in JavaScript

## 1. What are Numbers in JavaScript?

- **Numbers** in JavaScript are a primitive data type used to represent both integer and floating-point numbers.
- They can be **whole numbers** (e.g., `10`, `25`) or **decimal numbers** (e.g., `3.14`, `0.567`).

## 2. Types of Numbers

1. **Integers**: Whole numbers without decimals.

   ```javascript
   let age = 30;
   let year = 2024;
   ```

2. **Floating-point Numbers**: Numbers with decimals.
   let price = 19.99;
   let discount = 0.25;

3. **JavaScript Operators**:
   Operators are symbols that perform operations on variables and values. The most common types include:

   **_a. Arithmetic Operators_**

- (Addition): Adds two numbers.

* (Subtraction): Subtracts the second number from the first.

- (Multiplication): Multiplies two numbers.
  / (Division): Divides the first number by the second.
  % (Modulus): Returns the remainder of a division.
  \*\* (Exponentiation): Raises the first number to the power of the second.

  # code example:-

  let x = 10;
  let y = 3;

<!-- console.log("Addition: " + (x + y));       // Output: 13
console.log("Subtraction: " + (x - y));    // Output: 7
console.log("Multiplication: " + (x * y)); // Output: 30
console.log("Division: " + (x / y));       // Output: 3.333
console.log("Modulus: " + (x % y));        // Output: 1
console.log("Exponentiation: " + (x ** y)); // Output: 1000 -->

**_b. Assignment Operators_**
= : Assigns a value to a variable.
+= : Adds and assigns (x += y is the same as x = x + y).
-= : Subtracts and assigns.
\*= : Multiplies and assigns.
/= : Divides and assigns.
\*= : Raises to a power and assigns.

# code example:-

<!-- let a = 5;
a += 3; // Equivalent to a = a + 3
console.log("Value of a: " + a); // Output: 8 -->

**_c. Comparison Operators_**
== : Equal to.
!= : Not equal to.
=== : Strict equal to (checks value and type).
!== : Strict not equal to.

> : Greater than.
> < : Less than.
> = : Greater than or equal to.
> <= : Less than or equal to.

# code example:-

<!-- let num1 = 10;
let num2 = 15;

console.log(num1 == num2); // Output: false
console.log(num1 < num2); // Output: true -->

**_d. Logical Operators_**
&& (AND): Returns true if both operands are true.
|| (OR): Returns true if at least one operand is true.
! (NOT): Reverses the value of a boolean (true becomes false, and vice versa).

# code example:-

<!-- let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // Output: false
console.log(isAdult || hasID); // Output: true
console.log(!isAdult);         // Output: false -->

4. **Increment and Decrement Operators**:
   ++: Increases a number by 1.
   --: Decreases a number by 1.

# code example:-

<!-- let count = 10;

count++;
console.log(count); // Output: 11

count--;
console.log(count); // Output: 10 -->

5. **Order of Operations (Operator Precedence)**:
   JavaScript follows the standard order of operations: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction (PEMDAS).

# code example:-

<!-- let result = 10 + 5 * 3;     // Output: 25
let result2 = (10 + 5) * 3;  // Output: 45 -->

<!-- Slide 5 -->

### 2. Variables

- Variables in JavaScript are containers used to store data values. They allow us to give meaningful names to values in our programs, making them easier to read, maintain, and update. There are three main ways to declare variables:

- let: Used to declare variables that can be updated or reassigned. It has block scope, which means it is only accessible within the block where it is defined.

- const: Used to declare constants whose value cannot be changed once assigned. It is also block-scoped.

- var: The older way to declare variables. It has function scope and is generally avoided in modern JavaScript due to potential issues with hoisting and scoping.

- Key Points to Remember:
  - Naming: Variable names should be meaningful, start with a letter, $, or \_, and cannot contain spaces or special characters.
  - Case Sensitivity: Variable names are case-sensitive (myVar and myvar are different).
  - Initialization: Variables can be declared without assigning a value (let a;) or declared and initialized at the same time (let b = 10;).

### 3. Strings and String Methods

## 1. What are Strings in JavaScript?

- **Strings** are sequences of characters used to represent text.
- In JavaScript, strings are defined using:
  - **Single quotes** (`'Hello World'`)
  - **Double quotes** (`"Hello World"`)
  - **Template literals** (`` `Hello World` ``)

### 1.1 Example:

```javascript
let name = "John"; // Double quotes
let greeting = "Hello"; // Single quotes
let message = `Welcome, ${name}!`; // Template literal
console.log(message); // Output: Welcome, John!
```
