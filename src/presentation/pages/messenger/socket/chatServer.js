

  // SOCKET.IO CHAT EVENT HANDLING
const io = require('socket.io')(8900, {
  cor:{
    origin: "http://localhost:3000",
  },
  
})


/*io.attach(8900, {
  // includes local domain to avoid CORS error locally
  // configure it accordingly for production
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    transports: ['websocket', 'polling'],
  },
  allowEIO3: true,
})*/

io.on('connection', (socket) => {
  console.log('👾 New socket connected! >>', socket.id)
})

// To save the list of users as id:username
var users = {}

io.on('connection', (socket) => {
  console.log('👾 New socket connected! >>', socket.id)

  // handles new connection
  socket.on('new-connection', (data) => {
    // captures event when new clients join
    console.log(`new-connection event received`, data)
    // adds user to list
    users[socket.id] = data.username
    console.log('users :>> ', users)
    // emit welcome message event
    socket.emit('welcome-message', {
      user: 'server',
      message: `Welcome to this test chat ${data.username}. There are ${
        Object.keys(users).length
      } users connected`,
    })
  })

  // handles message posted by client
  socket.on('new-message', (data) => {
    console.log(`👾 new-message from ${data.user}`)
    // broadcast message to all sockets except the one that triggered the event
    socket.broadcast.emit('broadcast-message', {
      user: users[data.user],
      message: data.message,
    })
  })
})