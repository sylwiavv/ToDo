//Variables
var newTaskForm = document.querySelector('.new-task-container form');
var taskContainer = document.querySelector('.tasks-container ul');


//On DOM Loa
document.addEventListener('DOMContentLoaded', function() {
    bindAddTaskEvents();
    showTasks();
    });