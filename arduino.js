
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')


const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(4000, function(){
    console.log("server listening on port 3000")
});





const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('COM3', {
  baudRate: 9600
});
//

const parser = port.pipe(new Delimiter({ delimiter: '\n' }));
parser.on('data', function(data){
    io.emit('temp', data.toString());
    console.log("data " + data.toString())
    
});
