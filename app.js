// Importação da biblioteca de rotas Express
const cnsExpress = require('express');

// Instância do Express
const cnsApp = cnsExpress();

// Cria o objeto da rota que verifica a saúde da aplicação (conexão com o banco de dados)
const cnsRotasHealth = require('./routes/health-router.js');

// Rota para verificar se conecta com o banco de dados
cnsApp.use('/health', cnsRotasHealth);

// Tratamento para mensagem amigável em caso de não localização de rota
cnsApp.use((request, response, next) => {
    const cnsErro = new Error('Rota não localizada');
    cnsErro.status = 404;
    next(cnsErro);
});

cnsApp.use((error, request, response, next) => {
    response.status(error.status || 500);
    return response.send({
        erro: {
            mensagem: error.message
        }
    });
});
// Fim Tratamento para rota não localizada

// Exporta o módulo
module.exports = cnsApp;