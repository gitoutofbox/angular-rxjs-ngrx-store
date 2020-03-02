let ToDo = {
    "ToDos": [
        {
            "Title": "To do 1",
            "IsCompleted": true
        },
        {
            "Title": "To do 2",
            "IsCompleted": false
        }
    ]
}
exports.getToDos = function (req, res) {
    res.send(ToDo.ToDos);
}
exports.saveToDos = function(req, res) {
    const Title = req.body.Title;
    const IsCompleted = req.body.IsCompleted;
    ToDo.ToDos.push({Title: Title, IsCompleted: IsCompleted});
    res.send({Title: Title, IsCompleted: IsCompleted});
}