// import the server and start it!
const server = require('./api/server.js')

server.listen(9000, () => {
    console.log('server started on local host http://localhost:9000')
})