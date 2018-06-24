'use strict';
module.exports = function (app) {
    var toDoList = require('../controllers/toDoListController');

    app.route('/tasks')
        .get(toDoList.ListAllTasks)
        .post(toDoList.CreateATask);

    app.route('/tasks/:taskId')
        .get(toDoList.ReadATask)
        .put(toDoList.UpdateATask)
        .delete(toDoList.DeleteATask);

};