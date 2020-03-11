let ToDo = {
    "ToDos": [
        {
            "title": "To do 1",
            "isCompleted": true
        },
        {
            "title": "To do 2",
            "isCompleted": false
        },
        {
            "title": "To do 3",
            "isCompleted": false
        },
        {
            "title": "To do 4",
            "isCompleted": true
        }
    ]
}
exports.getToDos = function (req, res) {
    res.send({data: ToDo.ToDos});
}
exports.getCompletedToDos = function() {
    var result = ToDo.ToDos.filter(todo => todo.isCompleted); 
    console.log(result); 
    res.send({data: result});
}
exports.saveToDos = function(req, res) {
    const title = req.body.title;
    const isCompleted = req.body.isCompleted;
    ToDo.ToDos.push({title: title, isCompleted: isCompleted});
    res.send({title: title, isCompleted: isCompleted});
}