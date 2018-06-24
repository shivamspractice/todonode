var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var mongoose=require('mongoose');
var Task=require('./apis/models/toDoListModel');
var bodyParser=require('body-parser');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/ToDoDB');

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

// app.use(function(request,response){
//     response.status(404).send({url:request.originalUrl+" not found"});
// });

var routes=require('./apis/routes/toDoListRoutes');
routes(app);

app.listen(port);

console.log("Started on port "+port);