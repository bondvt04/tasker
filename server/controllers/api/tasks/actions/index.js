module.exports = function(request, response) {

    var tasks = [
        {
            id : 1,
            name : "Mega task!",
            priority : "Urgent"
        },
        {
            id : 15,
            name : "Simple task",
            priority : "Normal"
        },
    ];

    response.send(tasks);

    //ejs.renderFile(path.normalize(__dirname+"/../../views/tasks/index.ejs"), {
    //    tasks : tasks
    //}, function(error, result) {
    //    if(!error) {
    //        response.end(result);
    //    } else {
    //        response.end("Error!!!");
    //        console.log(error);
    //    }
    //});
}
