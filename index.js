var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
 console.log(socket.handshake.query.user_id,"connected");

socket.on('chat_message', function(msg){
    console.log(msg);
})

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});