// Defines locations in the html.
const todo_output = document.querySelector("#todo_out");
const output = document.querySelector("#output");
const inputTxt = document.querySelector("#txt");
const submitBtn = document.querySelector("#submit");

// Creates meta list for 'logging', and id_counter for keeping track of todos.
const tasks = [];
let id_counter = 1;

//Returns the current date and time.
function getDate() {
    let thisDate = new Date().getDate();
    let thisMonth = new Date().getMonth();
    let thisYear = new Date().getFullYear();
    let thisHour = new Date().getHours();
    let thisMinute = new Date().getMinutes();
    let thisSeconds = new Date().getSeconds();
    return thisDate + "/" + thisMonth + "/" + thisYear + " " + thisHour + ":" + thisMinute + ":" + thisSeconds;
}

// Adds the node, label, checbox and text to the HTML.
// Also adds the list element to the meta list with a timestamp.
function addTask(someText) {
    let node = document.createElement("li");
    let label = document.createElement("label");
    let checkBox = document.createElement("input");
    let textNode = document.createTextNode(someText);

    label.setAttribute("for", id_counter);
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", id_counter);
    checkBox.onclick = CheckboxChange;

    label.appendChild(textNode);
    node.appendChild(checkBox);
    node.appendChild(label);
    todo_output.after(node);

    tasks.push({"Task name" : someText, "Task id" : id_counter, "Time: ": getDate()});

    output.value = tasksCompleted();
    id_counter += 1;
}

// Counts number of completed tasks, and total tasks, then returns the value.
function tasksCompleted() {
    let checkedTasks = document.querySelectorAll("li input:checked");
    let numberofTasks = tasks.length;
    return checkedTasks.length + "/" + numberofTasks + " tasks completed";

}

// When a checbox is checked, set output value to "tasksCompleted"
function CheckboxChange(){
    output.value = tasksCompleted();
}


// Makes the n/m tasks completed appear.
output.value = tasksCompleted();

// Adds input on button click
submitBtn.addEventListener("click", e => {
        e.preventDefault();
        if (inputTxt.value) {
            addTask(inputTxt.value);
            inputTxt.value = "";
            inputTxt.focus();
        }
});

// Adds input on enter key
inputTxt.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (inputTxt.value) {
            addTask(inputTxt.value);
            inputTxt.value = "";
            inputTxt.focus();
        }
    }
});