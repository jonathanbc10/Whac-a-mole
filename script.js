const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('#start')

let timerId = null
let timeId = null
let time = 60;
let result = 0

const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randSquare = squares[Math.floor(Math.random() * 9)]
    randSquare.classList.add('mole')
}

const moveMole = () => {
    timerId = setInterval(randomSquare, 500)
    randomSquare()
}

const countDown = () => {
    time--;
    timeLeft.textContent = time;
    if (time === 0) {
        clearInterval(timerId);
        clearInterval(timeId);
        alert("Time's up! Your final score is: " + score.textContent);
    }
}

const stopMole = () => {
    clearInterval(timerId)
    clearInterval(timeId)
    timerId = null
    timeId = null
}

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    clearInterval(timerId)
    clearInterval(timeId)
    result = 0;
    score.textContent = result;
    time = 60;
    timeLeft.textContent = time;
    squares.forEach(square => square.classList.remove('mole'));
    start.textContent = 'Start';
});


start.addEventListener('click', () => {
    if (!timerId) {
        moveMole()
        timeId = setInterval(countDown, 1000)
        start.textContent = 'Stop'
    } else {
        stopMole()
        start.textContent = 'Start'
    }
})

squares.forEach(square => {
    square.addEventListener('click', (e) => {
        if (e.target.classList.contains('mole')) {
            result++
            score.textContent = result
        }
    })
})
