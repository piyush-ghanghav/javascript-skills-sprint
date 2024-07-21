// Selecting and Manipulating Elements
function changeText() {
    var element = document.getElementById('myElement');
    element.textContent = 'This is new Text.';
}

function changeBackground() {
    var elements = document.getElementsByClassName('myClass');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'lightblue';
    }
}

// Creating and Appending Elements
function createDivElement() {
    var newDiv = document.createElement('div');
    newDiv.textContent = 'This is New Div element';
    document.body.appendChild(newDiv);
}

function addList() {
    var newListItem = document.createElement('li');
    var itemName = prompt('Enter Footballer you like:');
    newListItem.textContent = itemName;
    var list = document.getElementById('myList');
    list.appendChild(newListItem);
}

// Removing Elements
function removeElement() {
    var elementToRemove = document.getElementById('removeElement');
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

function removeLastElement() {
    var myList = document.getElementById('myList');
    if (myList && myList.lastElementChild) {
        myList.removeChild(myList.lastElementChild);
    }
}

// Modifying Attributes and Classes
function changeLink() {
    var link = document.getElementById('myLink');
    link.href = 'https://www.youtube.com';
    link.textContent = 'Go to YouTube';
}

function addHighlightClass() {
    var element = document.getElementById('textElement');
    element.classList.add('highlight');
}

function removeHighlightClass() {
    var element = document.getElementById('textElement');
    element.classList.remove('highlight');
}

// Event Handling
function changeTextContent() {
    var paragraph = document.getElementById('textParagraph');
    paragraph.textContent = 'This is the new text content!';
}

const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', changeTextContent);

function changeBorderColor() {
    var element = document.getElementById('borderElement');
    element.style.border = '2px solid red';
}

const borderElement = document.getElementById('borderElement');
borderElement.addEventListener('mouseover', changeBorderColor);
