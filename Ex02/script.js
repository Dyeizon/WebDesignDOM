var inputText = document.getElementById('inputText');
var button = document.getElementById('btnAdd');
var list = document.getElementById('list');

inputText.addEventListener('keydown', addLI);
button.addEventListener('click', addLI);

function addLI(event) {
    if(event.key == 'Enter' || (event.type == 'click')) {
        var newLI = document.createElement('li');
        newLI.appendChild(document.createTextNode(inputText.value));
        
        inputText.value = "";
        inputText.focus();

        list.appendChild(newLI);
    }
}