// Importação da biblioteca de rotas Express
const cnsExpress = require('express');

// Cria o objeto para a rota
const cnsRouter = cnsExpress.Router();

// Cria o objeto para o controller do credenciamento das práticas desportivas
const cnsRotasMatricula = require('../controllers/matricula-controller.js');

// Rota de inclusão de matrícula em modalidade esportiva
cnsRouter.post('/:assId', cnsRotasMatricula.postMatricula);

// Retorna as matrículas do associados nas modalidades esportivas
cnsRouter.get('/:assId', cnsRotasMatricula.getMatricula);

// Rota de exclusão de matrícula em modalidade esportiva
cnsRouter.delete('/:assId', cnsRotasMatricula.deleteMatricula);

// Exporta o módulo
module.exports = cnsRouter;