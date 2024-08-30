// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement('li');

        // Add the task text to the list item
        li.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Append the delete button to the list item
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add delete functionality to the delete button
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
}

// Add event listener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Add event listener to handle Enter key press
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});