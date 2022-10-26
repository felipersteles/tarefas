
const express = require('express')

module.exports = (server) => {
    // rotas da API
    const router = express.Router()
    server.use('/api', router)

    // rotas de Tarefas
    const tarefaService = require('../api/tarefas')
    tarefaService.register(router, '/tarefas')
}


