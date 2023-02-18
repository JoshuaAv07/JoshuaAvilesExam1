const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const students = [
    {
        "id": 1,
        "name": "",
        "career": "",
        "email": "",
    },
    {
        "id": 1,
        "name": "",
        "career": "",
        "email": "",
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
];

const users = [];

app.use(cors());
app.use(bodyParser.json({"limit":"100mb"}));
app.all("*", function(req, res ,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-", "Content-Type");
    next();
});

async function crud(req, res, hash){
    const { id } = req.params;
    const { pass } = req.body;
    const result = db;
    const protocol = req.originUrl.split('/');

    try {
        console.log(protocol);
        if (protocol == "login"){
            const compare = await bcrypt.compare(pass, result.pass)
        }
        else {

        }
    } 
    catch (error) {
        return (error);
    } 
    finally {

    }
}

app.get('/students', async (req, res) => {
    console.log(students);
    res.send(students);
});

app.get('/student/:id', async (req, res) => {
    console.log("Test");
});

app.post('/student', async (req, res) => {
    console.log("Test");
});

app.put('/student/:id', async (req, res) => {
    console.log("Test");
});

app.delete('/student/:id', async (req, res) => {
    console.log("Test");
});

app.post('/register', async (req, res, hash) => {
    const { pass } = req.body;
    const body = req.body
    bcrypt.hash(pass, 10, async function(err, hash){
        users.push({body, pass});
        
        console.log(students);
        res.send(students);
    });
});

app.post('/login', async (req, res) => {
    console.log(users);
});

const port = 3000;

app.listen(port, () =>{
    console.log(`App listening at port: ${port}`)
});

module.exports = app;