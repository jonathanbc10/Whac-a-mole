const squares = document.querySelectorAll('.square') // Selects all the elements with class 'square'
const timeLeft = document.querySelector('#time-left') // Selects the element with id 'time-left'
const score = document.querySelector('#score') // Selects the element with id 'score'
const start = document.querySelector('#start') // Selects the element with id 'start'

let timerId = null // Declares a variable to store the id of the setInterval function for the mole movement
let timeId = null // Declares a variable to store the id of the setInterval function for the countdown
let time = 60; // Declares a variable to store the time left for the game
let result = 0 // Declares a variable to store the score

const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randSquare = squares[Math.floor(Math.random() * 9)]
    randSquare.classList.add('mole')
}

const moveMole = () => {
    timerId = setInterval(randomSquare, 500) // Sets an interval to call the randomSquare function every 500ms
    randomSquare()
}

const countDown = () => {
    time--; // Decrements the time by 1
    timeLeft.textContent = time; // Updates the time left displayed on the screen
    if (time === 0) {
        clearInterval(timerId); // Stops the mole movement
        clearInterval(timeId); // Stops the countdown
        // Displays an alert with the final score
        alert("Time's up! Your final score is: " + score.textContent);
    }
}

const stopMole = () => {
    // Clears the interval for the randomSquare function and sets the timerId variable to null
    clearInterval(timerId)
    // Clears the interval for the countDown function and sets the timeId variable to null
    clearInterval(timeId)
    // Sets to null the ID of the setInterval function for the mole movement
    timerId = null
    // Sets to null the ID of the setInterval function for the countdown
    timeId = null
}

// Selects the reset button
const resetButton = document.querySelector('#reset');

// Adds a click event listener to the reset button
resetButton.addEventListener('click', () => {
    // Clears the interval for the randomSquare function and sets the timerId variable to null
    clearInterval(timerId)
    // Clears the interval for the countDown function and sets the timeId variable to null
    clearInterval(timeId)
    // Resets the result variable back to 0
    result = 0;
    // Sets the score text content to the value of the result variable
    score.textContent = result;
    // Resets the time variable back to 60
    time = 60;
    // Sets the timeLeft text content to the value of the time variable
    timeLeft.textContent = time;
    // Removes the mole class from all squares
    squares.forEach(square => square.classList.remove('mole'));
    // Changes the text content of the start button back to 'Start'
    start.textContent = 'Start';
});

// Add a click event listener to the square where the mole is placed
squares.forEach(square => {
    square.addEventListener('click', (e) => {
        if (e.target.classList.contains('mole')) {
            result++
            score.textContent = result
        }
    })
})
