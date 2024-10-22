// Get references to HTML elements
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Event listener for adding a new task
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    }
});

// Function to add a new task
function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Mark task as completed when clicked
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
}
