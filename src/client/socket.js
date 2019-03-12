import io from 'socket.io-client'

const socket = io.connect('localhost:3004')

export default socket;