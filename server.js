var express = require("express");
var app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var lanugages = [ {
    name : 'Javascript',
    age : '1995'
},{
    name : 'Java',
    age : '1995'
},{
    name : 'C',
    age : '1972'
},{
    name : 'C++',
    age : '1983'
},{
    name : 'Python',
    age : '1991'
},{
    name : 'Ruby',
    age : '1993'
},{
    name : 'Dart',
    age : '2011'
},{
    name : 'Angular',
    age : '2009'
} ];

app.get('/gdg/languages', function(req, res) {
    var response = lanugages;
    if( req.query.number)
        response = response.slice(0, req.query.number);
    res.send(response);




});;


app.post('/logOnServer', function(req, res) {
	console.log(req.body.message);

	res.send('ok');
});
// app.get('/wines/:id', function(req, res) {
// res.send({id:req.params.id, name: "The Name", description: "description"});
// });

app.listen(3000);
console.log('Listening on port 3000...');