const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const shaper = require('./process/shaper');
const moreShapes = require('./process/moreShapes');
const randShape = require('./process/randShape');
const data = require('./public/data.js');
const cors = require('cors');
// const api = require('./routes/api');
//const db = require('./config/db');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());
// app.use('/api', api);

var roomlist = [];
var users = [];
var shapes = [];

// io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

io.sockets.on('connection', (socket) => {
  // console.log('user connected', socket.id)
  if (users.indexOf(socket.id) == -1){
    users.push(socket.id)
  }
  socket.emit('ROOM_SENT', { //clients can see rooms at connection
    type: 'ADD_ROOM',
      rooms: roomlist,
  })

  socket.emit('USR_LOGIN', { //add new user to list
      type: 'USER_LOGIN',
      id: socket.id,
      userlist: users
  })

  socket.on('CREATE_ROOM', (room) => {
    roomlist.push(room)
    socket.emit('ROOM_SENT', { //add new room to list
      type: 'ADD_ROOM',
      rooms: roomlist
    })
  });
  
  socket.on('ENTER_ROOM', (data) => { //enter room
    socket.emit('ROOM_CHOSEN', {
      type: 'ROOM_CHOSEN',
      actualRoom: data
    })
    socket.join(data)
  })

  socket.on('START_GAME', (data) => { //start the game
    //console.log(data)
    var startShapes = shaper(data);
    shapes = startShapes.shapes;
    // for (let i=0; i<10; i++) {
    //   shapes.push(randShape())
    // }
    // console.log(shapes.length)
    io.in(data.room).emit('START_SENT', startShapes)//by sending shapes
                                                    //only in this room
  })
  
  socket.on('SHAPE_REQUEST', (data) => { //clients need more shapes
    let shapeUpdate = moreShapes(data.field, data.shapes);
    // console.log(moreShapes(data))
    io.in(data.room).emit('MORE_SHAPES', {type: 'SHAPES_UPDATE', update: shapesUpdate.shapes})
    io.clients[data.userid].send('MORE_SHAPES', shapeUpdate)
  
  })

  socket.on('disconnect', () => {
   //  console.log(socket.id, 'disconnected')
    users.splice(users.indexOf(socket.id), 1)
  })
})


app.get('/', (req, res) => {
  res.send('first step')
})

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
