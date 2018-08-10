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
            completed: true
        },
        {
            task: "Clean House",
            completed: false
        }
    ];
};

angular
    .module("todoApp")
    .controller("TodoController", TodoController)
