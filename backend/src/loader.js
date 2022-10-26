
// vai carregar o server que esta dentro de config
const server = require('./config/server')
require('./config/rotas')(server)