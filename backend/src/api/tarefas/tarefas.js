const restful = require("node-restful");
const mongoose = restful.mongoose;

const tarefaSchema = new mongoose.Schema({
  desc: { type: String, required: true },
  feito: { type: Boolean, required: true, default: false },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = restful.model('Tarefa', tarefaSchema)
