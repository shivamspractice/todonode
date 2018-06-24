'use strict';

var mongoose=require('mongoose');
var Task=mongoose.model('Tasks');

exports.ListAllTasks=function(request,response){
    Task.find({},function(error,task){
        if(error){
            response.send(error);
        }
        response.json(task);
    });
};

exports.CreateATask=function(request,response){
    var newTask=new Task(request.body);
    newTask.save(function(error,task){
        if(error){
            response.send(error);
        }
        response.json(task);
    });
};

exports.ReadATask=function(request,response){
    Task.findById(request.params.taskId,function(error,task){
        if(error){
            response.send(error);
        }
        response.json(task);
    });
};

exports.UpdateATask=function(request,response){
    Task.findOneAndUpdate({
        _id:request.params.taskId
    },request.body,{
        new: true
    },function(error,task){
        if(error){
            response.send(error);
        }
        response.json(task);
    });
};

exports.DeleteATask=function(request,response){
    Task.remove({
        _id: request.params.taskId
    },function(error,task){
        if(error){
            response.send(error);
        }
        response.json({
            message: "Deleted Successfully"
        });
    });
};