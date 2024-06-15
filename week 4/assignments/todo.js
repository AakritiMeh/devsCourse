// Task class
class Task {
  constructor(taskId, title, description) {
    this.taskId = taskId;
    this.title = title;
    this.description = description;
  }
}

// TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskIdCounter = 0;
    this.taskForm = document.getElementById("taskForm");
    this.taskList = document.getElementById("taskList");
    this.taskForm.addEventListener("submit", this.addTask.bind(this));
  }

  addTask(event) {
    event.preventDefault();
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskId = ++this.taskIdCounter;
    const task = new Task(taskId, taskTitle, taskDescription);
    this.tasks.push(task);
    this.renderTask(task);
    this.taskForm.reset();
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.taskId === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.renderTasks();
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }

  updateTask(taskId, newTitle, newDescription) {
    const index = this.tasks.findIndex((task) => task.taskId === taskId);
    if (index !== -1) {
      this.tasks[index].title = newTitle;
      this.tasks[index].description = newDescription;
      this.renderTasks();
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }

  renderTask(task) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button onclick="taskManager.deleteTask(${task.taskId})">Delete</button>
        <button onclick="showUpdateForm(${task.taskId}, '${task.title}', '${task.description}')">Update</button>
      `;
    this.taskList.appendChild(taskItem);
  }

  renderTasks() {
    this.taskList.innerHTML = "";
    this.tasks.forEach((task) => this.renderTask(task));
  }
}

const taskManager = new TaskManager();

function showUpdateForm(taskId, title, description) {
  const updateForm = document.createElement("div");
  updateForm.innerHTML = `
      
      <form id="updateForm">
        <input type="text" id="updateTitle" value="${title}" required>
        <input type="text" id="updateDescription" value="${description}" required>
        <button type="button" onclick="updateTask(${taskId})">Update</button>
        <button type="button" onclick="hideUpdateForm()">Cancel</button>
      </form>
    `;
  document.body.appendChild(updateForm);
}

function updateTask(taskId) {
  const newTitle = document.getElementById("updateTitle").value;
  const newDescription = document.getElementById("updateDescription").value;
  taskManager.updateTask(taskId, newTitle, newDescription);
  hideUpdateForm();
}

function hideUpdateForm() {
  const updateForm = document.getElementById("updateForm");
  if (updateForm) {
    updateForm.parentNode.removeChild(updateForm);
  }
}
