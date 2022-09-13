const express = require('express');
const app = express();

app.use(express.json());

const courses = [];

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.post('/api/courses', (req, res) => {

    req.body.forEach(myFunction);

    function myFunction(value) {
        let strval=JSON.stringify(value);
        let temp = JSON.parse(value);
        const course = {
            id: courses.length+1,
            name: temp.name
        };
        console.log(course);
        courses.push(course);
      }

    res.send(courses);
    

  /*  const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);*/
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... `));