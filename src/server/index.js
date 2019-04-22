import fs  from 'fs'
import debug from 'debug'
import startGame from './process/startGame'
import randomShapes from './process/shaper';
import lineMalus from './process/malus';

let userlist = [];
let roomlist = [];

const logerror = debug('tetris:error')
  , loginfo = debug('tetris:log')

const initApp = (app, params, cb) => {
  const {host, port} = params
  const handler = (req, res) => {
    const file = req.url === '/bundle.js' ? '/../../build/bundle.js' : '/../../index.html'
    fs.readFile(__dirname + file, (err, data) => {
      if (err) {
        logerror(err)
        res.writeHead(500)
        return res.end('Error loading index.html')
      }
      res.writeHead(200)
      res.end(data)
    })
  }

  app.on('request', handler)

  app.listen({host, port}, () =>{
    loginfo(`tetris listen on ${params.url}`)
    cb()
  })
}

const initEngine = io => {
  io.on('connection', function(socket){
    if (userlist.indexOf(socket.id) == -1){
      userlist.push(socket.id)
    }
    loginfo('connection')
    socket.emit('NEW_CONNECT', {
      type: 'LOGIN_DATA',
      rooms: roomlist,
      users: userlist
    })
    io.to(socket.id).emit('USER_ID', {
      type: 'USER_ID',
      id: socket.id,
      room: ""
    });
    socket.on('CREATE_ROOM', (room) => {
      roomlist.push({
        name: room,
        owner: socket.id,
        users: []
      })
      socket.emit('ROOM_SENT', roomlist)
    });
    socket.on('ENTER_ROOM', (data) => { //enter room
      let ret;
      for (let i in roomlist) {
        if (roomlist[i].name == data) {
          ret = roomlist[i]
          roomlist[i].users.push(socket.id)
        }
      }
      socket.join(data)
      
      socket.emit('ROOM_CHOSEN', {
        type: 'ROOM_CHOICE',
        actualRoom: {
          ...ret,
        }
      })
    })
    socket.on('LAUNCH', (room) => {
      io.in(room.name).emit('LAUNCH_GAME', startGame())
    })
    socket.on('PAUSE', (room) => {
      io.in(room.name).emit('PAUSE_GAME', {
        type: 'PAUSE_GAME'
      })
    })

    socket.on('MALUS', (data) => {
      // console.log('malus', data)
      for (let i in data.room.users) {
          console.log(data.room.users[i], data.user)
          if (data.room.users[i] != data.user) {
          console.log(data.room.users[i], ' spotted')
          socket.broadcast.to(data.room.users[i]).emit('MALUS');
        }
      }
    })
    socket.on('MALUSED', (data) => {
      console.log('malused', data)
    })

    socket.on('RESUME', (room) => {
      io.in(room.name).emit('RESUME', {
        type: 'RESUME',
      })
    })
    socket.on('SHAPE_REQ', data => {
      const newShapes = randomShapes(data.shapes)
      io.in(data.room.name).emit('SHAPES_SENT' , newShapes)
    })
   // loginfo("Socket connected: " + socket.id)
    
    // socket.on('action', (action) => {
    //   if(action.type === 'server/ping'){
    //     socket.emit('action', {type: 'pong'})
    //   }
    // })
    socket.on('disconnect', (action) => {
      userlist.splice(userlist.indexOf(socket.id), 1)// remove user from list
    //   const chekRooms = (room) => {         //check if the user
    //     return room.owner === socket.id     //was a room admin
    //   }
    //  while (roomlist.find(chekRooms)) {     //remove his rooms
    //    roomlist.splice(roomlist.indexOf(roomlist.find(chekRooms)), 1)
    //  }
      console.log("User disconnected: " + socket.id)
  })
  })
}

export function create(params){
  const promise = new Promise( (resolve, reject) => {
    const app = require('http').createServer()
    initApp(app, params, () =>{
      const io = require('socket.io')(app)
      const stop = (cb) => {
        io.close()
        app.close( () => {
          app.unref()
        })
        loginfo(`Engine stopped.`)
        cb()
      }

      initEngine(io)
      resolve({stop})
    })
  })
  return promise
}
