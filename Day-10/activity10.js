// Day 10: Event Handling
// Tasks/Activities:



// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('textParagraph');

function changeText(){
    paragraph.textContent = 'Todays topic is Event Handling.';
}
button.addEventListener('click',changeText);

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('toggleImage');
function toggleVisibility(){
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}
image.addEventListener('dblclick',toggleVisibility);



// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.

const colorBox = document.getElementById('colorBox');
function changeBackgroundColor(){
    colorBox.style.backgroundColor = 'lightblue';
}

colorBox.addEventListener('mouseover', changeBackgroundColor);


// • Task 4: Add a mouseout event listener to an element that resets its background color.

function resetBackgroundColor(){
    colorBox.style.backgroundColor = 'lightgray';
}
colorBox.addEventListener('mouseout', resetBackgroundColor);


// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById('inputField');

function logKeyPressed(event){
    console.log(`Key Pressed: ${event.key}`);
}

inputField.addEventListener('keydown',logKeyPressed);

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const displayText = document.getElementById('displayText');

function  updateDisplayText(){
    displayText.textContent = inputField.value;
}
inputField.addEventListener('keyup',updateDisplayText);
// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById('myForm');

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}
form.addEventListener('submit', handleFormSubmit);


// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectDropdown = document.getElementById('mySelect');
const selectedValueParagraph = document.getElementById('selectedValue');

function displaySelectedValue(event){
    const selectedValue = event.target.value;
    selectedValueParagraph.textContent = `Selected value: ${selectedValue}`;

}

selectDropdown.addEventListener('change',displaySelectedValue);

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById('myList');
function handleListClick(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
        alert(`Clicked item: ${event.target.textContent}`);
    }
}

list.addEventListener('click', handleListClick);


// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const addItemButton = document.getElementById('addItemButton');
function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}
addItemButton.addEventListener('click', addItem);
