// Importação da biblioteca de rotas Express
const cnsExpress = require('express');

// Cria o objeto para a rota
const cnsRouter = cnsExpress.Router();

// Cria o objeto para o controller do cadastro de associado
const cnsRotasAssociado = require('../controllers/associado-controller.js');

// Rota de inclusão de associado
cnsRouter.post('/', cnsRotasAssociado.postAssociado);

// Rota de alteração de associado
cnsRouter.patch('/:assId', cnsRotasAssociado.patchAssociado);

// Retorna os associados cadastrados
cnsRouter.get('/', cnsRotasAssociado.getAssociado);

// Rota de exclusão de associado
cnsRouter.delete('/:assId', cnsRotasAssociado.deleteAssociado);

// Exporta o módulo
module.exports = cnsRouter;