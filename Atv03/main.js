// Elementos
const form = document.querySelector('#form-to-do-list')
const input = document.querySelector('#input')
const ulList = document.querySelector('ul#list')

// Event Listeners
form.addEventListener('submit', formSubmit)

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

