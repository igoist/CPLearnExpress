var express = require('express');

var app = express();

app.use(express.static('public'));

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    // res.send('hello!!!');
    res.sendfile('index.html');
});


app.get('/test/', function(req, res) {
    res.send('nothing, just test');
})

app.listen(3199, function() {
    console.log('test');
});

