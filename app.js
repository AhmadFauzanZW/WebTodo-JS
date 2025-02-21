// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".todo-filter");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', trashCheck);
filterOption.addEventListener('click', filterTodo);



// Funstions

// Function to add item everytime we click the add button
function addTodo(event){
    // Prevent Form Submitting
    event.preventDefault();
    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create todo li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Create CheckMark
    const checkBox = document.createElement('button');
    checkBox.innerHTML = '<i class="fas fa-check"></i>';
    checkBox.classList.add('complete-btn');
    todoDiv.appendChild(checkBox);
    // Create Trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append todoDiv to todoList
    todoList.appendChild(todoDiv);
    // Clear todo input value
    todoInput.value = "";
}

// Function to Checkmark the TODO or Delete it
function trashCheck(event) {
    // Here we grab the ID of what we click then store it to 'item' variable constant
    const item = event.target;
    // Delete Todo
    // We make a conditional scenario if we click the 'trash' button, 
    if (item.classList[0] === 'trash-btn') {
        // it will refer to the parent element of the item, then store it to 'todo' variable constant
        const todo = item.parentElement;
        // Then it will add class 'fall' to make fall animation effect
        todo.classList.add("fall");
        // This eventListener will wait the transition til it ended, then it will run the function
        todo.addEventListener("transitionend", function(){
            // Remove the TODO list which is selected
            todo.remove();
        })
    }

    // Check Mark
    // We make a conditional scenario if we click the 'Check' button,
    if (item.classList[0] === 'complete-btn'){
        // it will refer to the parent element of the item, then store it to 'todo' variable constant
        const todo = item.parentElement;
        // Create the toggle of class, so we can add some animation of 'completed' to it
        todo.classList.toggle("completed");
    }
}

// Function to filter Todo Lists 
function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                };
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                };
                break;
        }
    });
}