// Importação da biblioteca de rotas Express
const cnsExpress = require('express');

// Cria o objeto para a rota
const cnsRouter = cnsExpress.Router();

// Cria o objeto para o controller da saúde da aplicação
const cnsHealthController = require('../controllers/health-controller.js');

// Retorna o estado da conexão
cnsRouter.get('/', cnsHealthController.getHealth);

// Exporta o módulo
module.exports = cnsRouter;