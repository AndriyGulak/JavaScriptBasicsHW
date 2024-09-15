// Task 1: Write a function to open a new window using window.open(). 
// Make sure to set the size of the new window to 400px by 400px.
function openNewWindow() {
    let windowParams = `width=400,height=400,left=${window.screen.width / 2 - 200},top=${window.screen.height / 2 - 200}`;
    var newWindow = window.open("", "", windowParams);
};
// Use window.location to display the current URL in an alert.
function showCurrentURL() {
    alert(`URL = ${window.location}.`);
};
// Create a button that, when clicked, will display the user's screen dimensions (height and width) using window.screen.
function showScreenDimensions() {
    alert(`Width = ${window.screen.width}, Height = ${window.screen.height}.`);
};

// Task 2: Create a countdown timer that starts from 10 and decreases by 1 every second using setInterval.
// Once it reaches 0, it should display "Time's up!" in an alert.
var timerId;
function countDownTimerRun() {
    let count = 10;
    document.getElementById("counter").style.color = "rgb(255, 0, 0)";
    document.getElementById("counter").innerHTML = count.toString();

    timerId = setInterval(function () {
        count--; //console.log(count);
        document.getElementById("counter").innerHTML = count.toString();
        if (count == 0) {
            alert("Time's up!");
            clearInterval(timerId);
        }
    }, 1000);
};

function countDownTimerStop() {
    clearInterval(timerId);
};

// Use setTimeout to delay changing the background color of the page for 5 seconds after loading.
const myTimeout = setTimeout(() => { document.body.style.background = "#abb2b9" }, 5000);

// Task 3: Create a form with two input fields (Name and Email) and a submit button.
// When the form is submitted, capture the values of the input fields and display them in a div below the form without reloading the page.
function fSubmit(ipForm) {
    try {
        let toDel = document.getElementById("task3.1");
        toDel.parentNode.removeChild(toDel);
    } catch (e) { }
    let myDiv = document.createElement('div');
    myDiv.id = "task3.1";
    myDiv.innerHTML = `Hello ${ipForm.document.getElementsByTagName("input")[0].value} <br>
    Your email = ${ipForm.document.getElementsByTagName("input")[1].value}`;

    let div3 = document.getElementById("task3");
    div3.insertAdjacentElement("afterend", myDiv);

    //document.body.appendChild(myDiv);
};

function createForm() {

    var inputForm = document.createElement("form");
    inputForm.setAttribute('method', "post");
    inputForm.setAttribute('action', "javascript:fSubmit(this);");

    var iName = document.createElement("input");
    iName.setAttribute('type', "text");

    var iEmail = document.createElement("input");
    iEmail.setAttribute('type', "text");

    var bSubmit = document.createElement("input");
    bSubmit.setAttribute('type', "submit");

    inputForm.append("Name:");
    inputForm.appendChild(iName);
    inputForm.append("Email:");
    inputForm.appendChild(iEmail);
    inputForm.appendChild(bSubmit);

    document.getElementById("task3").appendChild(inputForm);
};

// Add three buttons (red, green, blue). Each button should change the background color of a div to its respective color when clicked.
function setRed() {
    document.getElementById("task4").style.backgroundColor = "Red";
};
function setGreen() {
    document.getElementById("task4").style.backgroundColor = "Green";
};
function setBlue() {
    document.getElementById("task4").style.backgroundColor = "Blue";
};

// Create a paragraph with some placeholder text. Add a button that, when clicked, will append a new sentence to the paragraph.
function appendText() {
    for (let e of document.getElementById("task5").children) {
        if (e.nodeName == "P") {
            e.innerHTML += ' :) ';
        }
    }
};