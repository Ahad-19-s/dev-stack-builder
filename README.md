# Dev Stack Builder

## Project Overview

Dev Stack Builder is a responsive web application that helps developers explore modern technologies and build their own personalized technology stack. Users can browse different technologies, add them to their stack, and manage their selections easily.

## Live Link

dev-stack-project-app.netlify.app

## GitHub Repository

(https://github.com/Ahad-19-s/dev-stack-builder.git)

## Technologies Used

* React.js
* TypeScript
* DaisiUi
* Tailwind CSS
* React Toastify
* JSON
* Vite

## Key Features

### 1. Explore Technologies

Users can browse different frontend, backend, database, styling, DevOps, and tool technologies through responsive technology cards.

### 2. Build Your Own Stack

Users can add technologies to their personal stack and manage their selected technologies easily.

### 3. Smart Notifications

React Toastify provides instant feedback for add, remove, duplicate selection, and remove-all actions.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows us to store and update data in a component. In this project, I used it to manage the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs side effects after rendering. I used it to fetch and load technology data from the JSON file when the application starts.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item efficiently and update the DOM correctly during re-rendering.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to display an empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent to a child through props. A child can send data back by calling a function passed from the parent through props.
