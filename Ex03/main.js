// Elementos
const form = document.querySelector('form')
const limpar = document.querySelector('a[name="limpar"]')
const dark = document.querySelector('#dark')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const spanEmailError = document.querySelector('#email-error')
const spanSenhaError = document.querySelector('#senha-error')
const mensagem = document.querySelector('.mensagem')
const body = document.querySelector('body')


// Event Listeners
form.addEventListener('submit', formSubmit)
limpar.addEventListener('click', formLimpar)
dark.addEventListener('click', toggleDark)

function formSubmit(event) {
    event.preventDefault()
        
    // Erros
    if(!inputEmail.value) {
        spanEmailError.classList.add('visivel')
    } 

    if(!inputSenha.value) {
        spanSenhaError.classList.add('visivel')
    }

    // Mudar a cor do botão com o login correto
    const buttonSubmit = document.querySelector('button[name="acessar"]')
    if(inputEmail.value == "teste@gmail.com" && inputSenha.value == "123456") {
        buttonSubmit.style.backgroundColor = '#109177'
    } else {
        buttonSubmit.style.backgroundColor = 'red'
    }

    // Em caso de email e senha preenchidos
    if(inputEmail.value && inputSenha.value) {
        // Mostra mensagem de login efetuado
        mensagem.innerText = "Login efetuado com sucesso"

        // Adiciona o email na lista
        const ulEmails = document.querySelector('ul#lista')

        var newLI = document.createElement('li');
        newLI.innerText = inputEmail.value

        ulEmails.appendChild(newLI)
    }
}

function formLimpar() {
    mensagem.innerText = ""

    inputEmail.value = ""
    spanEmailError.classList.remove('visivel')
    
    inputSenha.value = ""
    spanSenhaError.classList.remove('visivel')
}

function toggleDark() {
    body.classList.toggle('dark')
}