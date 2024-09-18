var i = 1;
// Create a webpage with a button that, when clicked, changes its text to "Button Clicked!".
let btn = document.getElementById('btn1');
btn.onclick = function () {

    this.innerHTML = 'Button Clicked! ' + i;
    // Add another button to the click event listener from the first button after the first click.:
    // Use addEventListener with the once option so that the click event listener is automatically removed after one click.
    if (i == 1) {
        console.log('tyt');
        document.getElementById('btn2').addEventListener('click', () => { console.log('I run only once!'); }, { once: true });
    }
    i++;
};

function btnHandler(event) {
    // When the button is clicked, use stopPropagation() to prevent the event from bubbling up to the outer div.:
    // Try removing stopPropagation() and observe the difference in behavior.
    console.log("btn3 is clicked");
    event.stopPropagation();
}
// Create a nested structure of elements, such as a div containing another div and a button inside it.
// Add a click event listener to the outer div and the button.
document.getElementById('myDiv1').addEventListener('click', function () {
    console.log('myDiv1 is clicked');
});
document.getElementById('btn3').addEventListener('click', btnHandler);

// Create a webpage with an input field and a button to add items to a ul list.
// When the button is clicked, insert a new li element containing the input value into the list.
// Add a button next to each list item that, when clicked, that item from the list.
function addLiElement() {
    txt = document.getElementById('text1').value;
    let newLi = document.createElement('li');
    newLi.innerHTML = txt;
    document.getElementById('ul1').appendChild(newLi);
};

document.getElementById('btn4').addEventListener('click', addLiElement);
