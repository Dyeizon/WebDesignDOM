// Elementos
const form = document.querySelector('#form-to-do-list')
const input = document.querySelector('#input')
const ulList = document.querySelector('ul#list')
const darkButton = document.querySelector('#dark')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')

// Event Listeners
form.addEventListener('submit', formSubmit)
darkButton.addEventListener('click', toggleDark)

// Funções
function formSubmit(event) {
    event.preventDefault()

    if(input.value) {
        var newLi = document.createElement('li')
        newLi.innerText = input.value
        newLi.addEventListener('click', markAsDone)
        newLi.classList.add('listItem')
        ulList.append(newLi)
    }

    input.value = ""
    input.focus()
}

function markAsDone() {
    this.classList.toggle('done')
}

function toggleDark() {
    body.classList.toggle('dark-mode')
    h2.classList.toggle('dark-mode')

}