const img = document.querySelector('#bug-bomb')

img.addEventListener('click', hide)

function hide() {
    img.style.display = 'none'
}

function getBug() {
    img.style.display = 'inline'
    img.setAttribute('src', 'https://creative.colorado.edu/atlas2200/example/img/bug.png')

}

function getBomb() {
    img.style.display = 'inline'
    img.setAttribute('src', 'https://creative.colorado.edu/atlas2200/example/img/bomb.png')
}