const jsonServer= require(`json-server`)
const cors = require('cors'); 

const server = jsonServer.create();
const router = jsonServer.router('./data.json')
const middleWares = jsonServer.defaults();


server.use(cors());
server.use(middleWares)
server.use(router)

const port = 1997
server.listen(port , () => {
    console.log(`Json server working on port ${port}`)
})