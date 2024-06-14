const app = require('./app')

const httpServer = require('http').createServer(app)
httpServer.listen(3000, () => {
  console.log(
    'Server has been started. Please go to http://localhost:3000 to run'
  )

  app.emit('serverStarted')
})

module.exports = {
  app,
  httpServer,
}
