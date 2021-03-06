const express = require('express');
const mysql   = require('mysql');
const cors    = require('cors');
const multer  = require('multer');
const db      = require('./database');
const DIR     = 'assets/images/users/'; 
const bodyParser = require('body-parser');

const student    = require('./routes/student')
const concatmap    = require('./routes/concatmap')
const user    = require('./routes/user')
const news    = require('./routes/news')
const toDo    = require('./routes/toDo')
const vote    = require('./routes/vote')
const app     = express();

app.use(express.static('app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const server = app.listen(8081, function () {
      const host = server.address().address
      const port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
  });
});

app.get('/students', student.getStudents);
app.get('/students/count', student.getStudentsCount);
app.get('/students/student/:id', student.getStudent);
app.get('/students/subjects/:id', student.getStudentSubjects);


app.get('/concatmap/userlist/:id', concatmap.userlist);
app.get('/concatmap/products/:id', concatmap.products);
app.get('/concatmap/news/:id', concatmap.news);



app.get('/user/getUserInfo', user.getUserInfo);
app.get('/user/getUserTheme/:id', user.getUserTheme);
app.get('/user/getUserGeoLocation/:id', user.getUserGeoLocation);
app.get('/user/getCommonSetting', user.getCommonSetting);

app.get('/news', news.getNewsList);

app.get('/todos/getToDos', toDo.getToDos);
app.get('/todos/getCompletedToDos', toDo.getCompletedToDos);

app.post('/vote/save', vote.save);
