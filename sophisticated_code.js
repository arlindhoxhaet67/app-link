/*
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a sophisticated and complex implementation of a task management system.
 */

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }
  
  complete() {
    this.completed = true;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }
  
  addTask(title, description, dueDate) {
    const task = new Task(title, description, dueDate);
    this.tasks.push(task);
  }
  
  getTasks() {
    return this.tasks;
  }
  
  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }
  
  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }
  
  sortByDueDate() {
    this.tasks.sort((taskA, taskB) => taskA.dueDate - taskB.dueDate);
  }
}

const taskList = new TaskList();

taskList.addTask("Task 1", "This is the description for task 1.", new Date('2022-10-31'));
taskList.addTask("Task 2", "This is the description for task 2.", new Date('2022-10-15'));
taskList.addTask("Task 3", "This is the description for task 3.", new Date('2022-11-10'));
taskList.addTask("Task 4", "This is the description for task 4.", new Date('2022-10-25'));

taskList.getTasks().forEach(task => console.log(task.title));
console.log("------------------");

taskList.sortByDueDate();

taskList.getTasks().forEach(task => console.log(task.title));
console.log("------------------");

taskList.getPendingTasks().forEach(task => console.log(task.title));

/*
 * Additional code and logic can be added to extend this task management system.
 * This example demonstrates a basic implementation with task creation, marking tasks as completed,
 * and sorting tasks by due date.
 */

// ... More code ...
// ... Additional functionality ...
// ... More classes and methods ...
// ...