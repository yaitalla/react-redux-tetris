import fs  from 'fs'
import debug from 'debug'
import startGame from './startGame';

let userlist = [];
let roomlist = [];

const logerror = debug('tetris:error')
  , loginfo = debug('tetris:info')

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
    console.log("User connected: " + socket.id)
    io.to(socket.id).emit('private', {
      type: 'YOUR_ID',
      id: socket.id
    });
    
    socket.emit('NEW_CONNECT', {
      type: 'LOGIN_DATA',
      room: roomlist,
      users: userlist
    })
   
    socket.on('CREATE_ROOM', (room) => {
      roomlist.push({
        name: room,
        owner: socket.id
      })
      socket.emit('ROOM_SENT', roomlist)
    });
    socket.on('LAUNCH', () => {
      startGame()
      // socket.emit('LAUNCH_GAME', startGame())
    })
    socket.on('ENTER_ROOM', (data) => { //enter room
      let ret;
      for (let i in roomlist) {
        if (roomlist[i].name == data) {
          ret = roomlist[i]
        }
      }
      console.log(ret)
      socket.emit('ROOM_CHOSEN', {
        type: 'ROOM_CHOICE',
        actualRoom: ret
      })
      socket.join(data)
    })

    socket.on('disconnect', (action) => {
        userlist.splice(userlist.indexOf(socket.id), 1)
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
