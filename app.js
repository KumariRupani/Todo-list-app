const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    deleteButton.addEventListener('click', function () {
      li.remove();
    });

    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);

    todoList.appendChild(li);
    
    taskInput.value = "";
  }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
