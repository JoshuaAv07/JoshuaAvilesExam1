const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const students = [
    {
        "id": 1,
        "name": "Joshua",
        "career": "TI",
        "email": "joshua@email.com",
    },
    {
        "id": 2,
        "name": "Derek",
        "career": "TI",
        "email": "derek@email.com",
    },
    {
        "id": 3,
        "name": "Alejandro",
        "career": "TI",
        "email": "alex@email.com",
    },
    {
        "id": 4,
        "name": "Kevin",
        "career": "TI",
        "email": "kevin@email.com",
    },
    {
        "id": 5,
        "name": "Gustavo",
        "career": "TI",
        "email": "gus@email.com",
    },
];

const users = [
    {
        "email": "student2@gmail.com",
        "pass": "pass"
    },
    {
        "email": "student1@gmail.com",
        "pass": "pass"
    },
    {
        "email": "student3@gmail.com",
        "pass": "pass"    
    },
];

app.use(cors());
app.use(bodyParser.json({"limit":"100mb"}));
app.all("*", function(req, res ,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-", "Content-Type");
    next();
});

app.get('/students', async (req, res) => {
    console.log(students);
    res.send(students);
});

app.get('/students/:id', async (req, res) => {
    const { id } = req.params
    for (let i = 0; i <= students.length; i++) {
        if (students[i].id == id){
            console.log(students[i]);
            res.send(students[i]);
            break
        }
    }
});

app.post('/students', async (req, res) => {
    //Didn't have time due waiting for the installation of the libraries
    const { id, name, career, email } = req.body;
    students.push({
        "id": id,
        "name": name,
        "career": career,
        "email": email,
    });
    console.log(students);
    res.send(students);
});

app.put('/students/:id', async (req, res) => {
    //Didn't have time due waiting for the installation of the libraries
    const { id } = req.params
    for (let i = 0; i <= students.length; i++) {
        if (students[i].id == id){
            console.log();
            res.send();
            break
        }
    }
});

app.delete('/students/:id', async (req, res) => {
    const { id } = req.params
    for (let i = 0; i <= students.length; i++) {
        if (students[i].id == id){
            students.splice(i, 0); //Doesn't work and I don't why
            console.log(students);
            res.send(students);
        }
    }
});

app.post('/register', async (req, res, hash) => {
    const { email, pass } = req.body;
    bcrypt.hash(pass, 10, async function(err, hash){
        users.push({
            "email": email,
            "pass": hash
        });
        console.log(users);
        res.send(users);
    });
});

app.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    for (let i = 0; i <= users.length; i++) {
        console.log(users[i].email);
        if (users[i].email == email){
            var user = users[i].email;
            var compare = await bcrypt.compare(pass, users[i].pass);
            break
        }
    }
    console.log(users);
    res.send({
        "user": user,
        "login": compare
    });
});

const port = 3000;

app.listen(port, () =>{
    console.log(`App listening at port: ${port}`)
});

module.exports = app;