const taskinput = document.getElementById("taskInput");
const tasklist = document.getElementById("taskList");

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText !== "") {
        const listitem = document.createElement("li");
        listitem.innerHTML = `
            <input type="checkbox" onclick="toggleCompleted(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)" class="delete">Delete</button>
        `;
        tasklist.appendChild(listitem);
        taskinput.value = "";  // Corrected: clear input field
    }
}

function deleteTask(button) {
    const listitem = button.parentElement;
    tasklist.removeChild(listitem);
}

function toggleCompleted(checkbox) {
    const listitem = checkbox.parentElement;
    if (checkbox.checked) {
        listitem.style.textDecoration = "line-through";
    } else {
        listitem.style.textDecoration = "none";
    }
}
function clearAllTasks() {
    tasklist.innerHTML = "";  // Removes all <li> items
}