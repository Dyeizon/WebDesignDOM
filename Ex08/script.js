// Elementos
const darkButton = document.querySelector('#toggle-dark')
const increaseFontSizeButton = document.querySelector('#increase-font-size')
const decreaseFontSizeButton = document.querySelector('#decrease-font-size')
const body = document.querySelector('body')

// Event Listeners
darkButton.addEventListener('click', toggleDark)
increaseFontSizeButton.addEventListener('click', increaseFontSize)
decreaseFontSizeButton.addEventListener('click', decreaseFontSize)

function toggleDark() {
    body.classList.toggle('dark')
}

var size = 16;

function increaseFontSize() {
    size++
    body.style.fontSize = size + "px"
}
function decreaseFontSize() {
    size--
    body.style.fontSize = size + "px"
}
