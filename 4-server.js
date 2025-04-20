const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => { //never confuse this callback to the callback of eventloop
  console.log('Server listening on port : 5000....')
})
