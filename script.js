
// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
const globalVar = "I'm a global variable";

// Function with parameters and return value
function multiply(a, b) {
    // Local variable
    const localVar = "I'm a local variable";
    return a * b;
}

// Function demonstrating closure
function createCounter() {
    let count = 0; // This variable is enclosed
    return function() {
        count++;
        return count;
    };
}

// Function to demonstrate scope and return values
function calculate() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    
    const resultElement = document.getElementById('calculation-result');
    
    // Using the multiply function
    const product = multiply(num1, num2);
    
    // Using the closure function
    const counter = createCounter();
    
    let resultsHTML = `
        <p>Global variable: ${globalVar}</p>
        <p>${num1} × ${num2} = ${product}</p>
        <p>Counter demonstration:</p>
        <ul>
    `;
    
    // Call the counter function multiple times
    for (let i = 0; i < 5; i++) {
        resultsHTML += `<li>Counter: ${counter()}</li>`;
    }
    
    resultsHTML += `</ul>`;
    
    resultElement.innerHTML = resultsHTML;
}

// Part 3: Combining CSS Animations with JavaScript

// Function to flip card
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
}

// Function to start animation on a specific box
function startAnimation(boxId) {
    const box = document.getElementById(boxId);
    box.style.animation = 'pulse 2s infinite';
}

// Function to stop all animations
function stopAllAnimations() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.animation = 'none';
    });
}

// Modal functions
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: Calculation button
    document.getElementById('calculate-btn').addEventListener('click', calculate);
    
    // Part 3: Animation control buttons
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    document.getElementById('start-animation1-btn').addEventListener('click', function() {
        startAnimation('box1');
    });
    document.getElementById('start-animation2-btn').addEventListener('click', function() {
        startAnimation('box2');
    });
    document.getElementById('stop-animations-btn').addEventListener('click', stopAllAnimations);
    document.getElementById('show-modal-btn').addEventListener('click', showModal);
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Start some animations after page load
    setTimeout(() => {
        startAnimation('box1');
    }, 1000);
    
    setTimeout(() => {
        startAnimation('box2');
    }, 2000);
});
