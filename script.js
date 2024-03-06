const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === "") {
        alert("Please enter a task");   
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        // li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Add the list item to the list container
        inputBox.value = "";

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);  //Adds close button to each task
    }
    saveData();
}

listContainer.addEventListener("click", function x(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTask();