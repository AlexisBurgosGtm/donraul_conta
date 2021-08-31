var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const execute = require('./router/connection');
var routerCuentas = require('./router/routerCuentas');
var routerDiario = require('./router/routerDiario');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 4500;

app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  /*
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', true);
*/
  console.log("/" + req.toString());
  next();
});

app.get("/",function(req,res){
  execute.start();
	res.sendFile(path + 'index.html');
}); 



app.get("/notify",function(req,res){

  io.emit('despacho nuevo', "despacho", "despacho");
  res.send('ok')
}); 



//Routers
app.use('/cuentas', routerCuentas);
app.use('/diario', routerDiario);


app.use("/",router);

app.use("*",function(req,res){
  res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});


// SOCKET HANDLER
io.on('connection', function(socket){
    
  socket.on('chat msn', function(msg,user){
	  io.emit('chat msn', msg, user);
  });
  
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

/*
app.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
*/
