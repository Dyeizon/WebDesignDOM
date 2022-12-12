// Elementos
const darkButton = document.querySelector('#toggle-dark')
const body = document.querySelector('body')

// Event Listeners
darkButton.addEventListener('click', toggleDark)

function toggleDark() {
    body.classList.toggle('dark')
}