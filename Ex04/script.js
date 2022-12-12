const input = document.querySelector('#inputNumber')
input.addEventListener('keyup', calculate);

function calculate() {
    var divTabuada = document.getElementById('tabuada');
    divTabuada.textContent = "";

    for (let i = 1; i <= 10; i++) {
        var newP = document.createElement('p');
        newP.appendChild(document.createTextNode(i + " x " + input.value + " = " + i*input.value));

        divTabuada.appendChild(newP);
        
    }

    input.value = "";
    input.focus();
}