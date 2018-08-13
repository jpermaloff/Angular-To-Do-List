"use strict";

function TodoController() {
    const vm = this;
    vm.todoObjects = [
        {
            task: "Clean House",
            completed: false
        },
        {
            task: "Wash Car",
            completed: false
        },
        {
            task: "Grocery Shop",
            completed: false
        },
        {
            task: "Cut Grass",
            completed: false
        },
        {
            task: "Wash Dog",
            completed: false
        }
    ];
vm.completeTask = (index) => {
vm.todoObjects[index].completed = true
}
vm.removeTask = (index) => {
    vm.todoObjects.splice(index, 1)
}
vm.addTask= (newTask) => {
   vm.todoObjects.push({
       task: newTask,
       completed: false
   });
};
};

angular
    .module("todoApp")
    .controller("TodoController", TodoController)
