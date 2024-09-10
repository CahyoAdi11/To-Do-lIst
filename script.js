// Initialize the current time display
const currentTimeElement = document.getElementById('currentTime');
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentTimeElement.textContent = now.toLocaleDateString(undefined, options);
}
updateTime();

// Elements
const taskInput = document.getElementById('taskInput');
const priorityLevel = document.getElementById('priorityLevel');
const submitTask = document.getElementById('submitTask');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const deleteAll = document.getElementById('deleteAll');

// Add new task
submitTask.addEventListener('click', () => {
    const taskText = taskInput.value;
    const priority = priorityLevel.value;
    if (taskText) {
        const listItem = createTaskItem(taskText, priority);
        todoList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }
});

// Create task item element
function createTaskItem(text, priority) {
    const li = document.createElement('li');
    li.textContent = text + ` [${priority}]`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            li.classList.add('done');
            doneList.appendChild(li);
        } else {
            li.classList.remove('done');
            todoList.appendChild(li);
        }
    });
    li.prepend(checkbox);

    return li;
}

// Delete all tasks
deleteAll.addEventListener('click', () => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
});
