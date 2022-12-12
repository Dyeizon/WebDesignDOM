// Elementos
const form = document.querySelector('#tweet-form')
const inputUsername = document.querySelector('input[name="username"]')
const inputTweet = document.querySelector('input[name="tweet"]')
const usernameError = document.querySelector('#username-error')
const ulTweets = document.querySelector('ul#tweets')

// Event Listeners
form.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()

    if(!inputUsername.value) {
        usernameError.innerHTML = "Username obrigatório!<br>";
        inputUsername.focus()
    } else {
        usernameError.innerHTML = "";
        
        var newLI = document.createElement('li')
        newLI.innerText = `${inputUsername.value}: ${inputTweet.value}`

        ulTweets.append(newLI)
    }
}