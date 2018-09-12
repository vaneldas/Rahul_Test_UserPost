var express = require ('express');
var bodyParser = require ('body-parser');
var config = require('./config.js');
var users = require('./users.js');


var  app = express();
app.use(bodyParser.json());

app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200);
});

app.post('/users-post', (req,res)=>{
console.log('[POST] /users-post');

const memory = req.body.conversation.memory;
const post1 = memory.JDEUserID;

return userspost(post1)
.then((carouselle) => res.json({
replies: carouselle,
}))
.catch((err) => console.error('movieApi::discoverMovie error: ', err));

});

app.listen(process.env.PORT , () => console.log(`App started on port ${config.PORT}`));

//var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(bodyParser.json());

server.post('/users', function (req, res) => {
   console.error(req.body);
   res.sendStatus(200);
});
*/
/*

server.post('/users',jsonParser, function (req, res) {
   if(!req.body)
   return res.sendStatus(400)
   else {
     console.log("Success");
   }
});
//*/
