var io = require('socket.io')();
var app = require('express')();
var http = require('http').Server(app);

io.on('connection', function(socket){
  console.log('a user connected');
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/login.html');
});

app.get('/chat.html', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('Alguem conectou');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', function(){
    console.log('Alguem desconectou');
  });
});