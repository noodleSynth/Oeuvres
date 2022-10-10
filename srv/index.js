const express = require('express')

const port = 3000

const server = new express()

server.use(express.static('view'))

server.listen(port, () => {
  console.log("Server listening on", port)
})