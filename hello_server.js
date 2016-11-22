var express = require('express'); //var $ = require('jquery');

var app = express(); //create a new express application
//this returns an app object, which will save data to http clients


//add a route using the .get() method
app.get('/', function(request, response) {//first argument is a path
    response.send("Hello World");
}); 


app.get(':firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
    //console.log(first, last);
});

app.get('/jedi/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname.slice(0, 3);
    var last = request.params.lastname.slice(0, 3);
    response.send(["Hello", last, first].join(" "));
   // console.log(first, last);
});

app.get('/headers', function(request, response) {
    var headers = request.headers;
    var host = headers.host;
    var userAgent = headers['user-agent'];
    console.log(headers);
    response.json({
        "host": host,
        "user-agent": userAgent,
    });
});

app.get('/headers/:header_name', function(request, response) {
    var value = request.params.header_name;
    
    response.json({
        value: request.headers[value]
    });
});




app.listen(process.env.PORT || 8080, process.env.IP);

