// Sample initial data
let tasks = [
    { id: 1, title: "Watch Recordings"},
    { id: 2, title: "Complete Session"},
]

// Function to render the task in the list
function renderTasks(){
    const tasklist = document.getElementById("taskList");
    tasklist.innerHTML = ""; // Clear the list before rendering new tasks

    tasks.forEach((task)=>{
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task.title}</span>
        <button onclick="editTask(${task.id})">Edit</button>
        <button>Delete</button>
        `;
        tasklist.append(li);
    })
}

// Function to add a new task
function addTask(){
    const input = document.getElementById("taskInput");
    const title = input.value.trim();
    if(title === "") return;

    const newTask = {
        id: tasks.length + 1,
        title: title,
    };

    tasks.push(newTask);
    input.value = ""
    renderTasks();
}

// Function to edit a task
function editTask(id){
    const newTitle = prompt("Enter the new task title.....")
    if(newTitle !== null){
        const task = tasks.find((task)=> task.id === id);
        console.log(task);
        if(task){
            task.title = newTitle; 
            renderTasks();
        }
        
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}


// Initial Rendering
renderTasks();