var tasks = [
    {
        id : 1,
        name : "Mega task!",
        priority : "Urgent"
    }
];

var ejs = require('ejs');
var path = require('path');

//debugger;
module.exports = {
    index : require(__dirname+'/actions/index'),
    show : require(__dirname+'/actions/show'),
    newPost : require(__dirname+'/actions/newPost'),
    newGetForm : require(__dirname+'/actions/newGetForm'),
    newGetSuccess : require(__dirname+'/actions/newGetSuccess'),
    newGetError : require(__dirname+'/actions/newGetError'),
    editPut : require(__dirname+'/actions/editPut'),
    editGetForm : require(__dirname+'/actions/editGetForm'),
    editGetSuccess : require(__dirname+'/actions/editGetSuccess'),
    editGetError : require(__dirname+'/actions/editGetError'),
    removeDel : require(__dirname+'/actions/removeDel')
}

/**
 * Shows list of tasks
 */
//exports.index =

/**
 * Create new task
 */
//exports.create = function(request, response) {
//    var ID = tasks.length+1;
//    tasks[tasks.length] = {
//        id : ID,
//        name : request.body.name,
//        priority : request.body.priority
//    }
//
//    console.log(tasks[ID-1]);
//    response.send('Task "'+request.body.name+'" added with ID="'+ID+'"');
//}

/**
 * Shows task
 */
//exports.show = function(request, response) {
//    //debugger;
//    var ID = parseInt(request.params[0]);
//    var index = ID - 1;
//
//    if(!tasks[index]) {
//        response.send("There is no task with ID of "+ID);
//    } else {
//        response.send(tasks[index]);
//    }
//}

/**
 * Remove task
 */
//exports.remove = function(request, response) {
//    var index = parseInt(request.params.id)-1;
//    delete tasks[index];
//
//    console.log("Removed task["+index+"]");
//    response.send("Removed task["+index+"]");
//}

/**
 * Get edit form
 */
//exports.edit = function(request, response) {
//    response.send("Show edit form");
//}

//exports.new = function(request, response) {
//    response.send("New!!!");
//}

/**
 * Update task
 */
//exports.update = function(request, response) {
//    var index = parseInt(request.params.id)-1;
//    tasks[tasks.length] = {
//        id : ID,
//        name : request.body.name,
//        priority : request.body.priority
//    }
//
//    console.log("Updated task["+index+"]");
//    response.send("Updated task["+index+"]");
//}
