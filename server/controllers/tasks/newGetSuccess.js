module.exports = function(request, response) {
    ejs.renderFile(path.normalize(__dirname+"/../../views/tasks/index.ejs"), {
        tasks : tasks
    }, function(error, result) {
        if(!error) {
            response.end(result);
        } else {
            response.end("Error!!!");
            console.log(error);
        }
    });
}
