var button1 = document.getElementById('btnReplaceByID');
button1.addEventListener('click', replaceByID);

var button2 = document.getElementsByClassName('btnReplaceByClass');
button2[0].addEventListener('click', replaceByClass);

var button3 = document.getElementsByTagName('button');
button3[2].addEventListener('click', replaceByTag);

var button4 = document.querySelector('#btnReplaceByQuerySelector');
button4.addEventListener('click', replaceByQuerySelector);

function replaceByID() {
    // Removes the button       
    this.remove()
    // Creates a new <p> for the name and add the text 
    var newNameParagraph = document.createElement('p');
    newNameParagraph.appendChild(document.createTextNode('Dyeizon'));

    // Append the <p> created before to the section
    var div = document.getElementById('byId');
    div.appendChild(newNameParagraph);
}

function replaceByClass() {
    // Removes the button   
    
    this.remove();

    // Creates a new <p> for the name and add the text 
    var newNameParagraph = document.createElement('p');
    newNameParagraph.appendChild(document.createTextNode('Dyeizon'));

    // Append the <p> created before to the section
    var div = document.getElementById('byClass');
    div.appendChild(newNameParagraph);
}

function replaceByTag() {
    // Removes the button   
    this.remove();

    // Creates a new <p> for the name and add the text 
    var newNameParagraph = document.createElement('p');
    newNameParagraph.appendChild(document.createTextNode('Dyeizon'));

    // Append the <p> created before to the section
    var div = document.getElementById('byTag');
    div.appendChild(newNameParagraph);
}

function replaceByQuerySelector() {
    // Removes the button   
    
    this.remove();

    // Creates a new <p> for the name and add the text 
    var newNameParagraph = document.createElement('p');
    newNameParagraph.appendChild(document.createTextNode('Dyeizon'));

    // Append the <p> created before to the section
    var div = document.getElementById('byQuerySelector');
    div.appendChild(newNameParagraph);
}