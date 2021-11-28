// Importação da biblioteca de rotas Express
const cnsExpress = require('express');

// Instância do Express (Rotas)
const cnsApp = cnsExpress();

// Instância do Morgan (monitoraento via terminal)
const cnsMorgan = require('morgan');

// Formato JSON de entrada
cnsApp.use(cnsExpress.json());

// Delimita o formato de entrada de dados (simples)
cnsApp.use(cnsExpress.urlencoded({extended: false})); 

// Cria o objeto da rota que verifica a saúde da aplicação (conexão com o banco de dados)
const cnsRotasHealth = require('./routes/health-router.js');

// Cria o objeto da rota de associado
const cnsRotasAssociado = require('./routes/associado-router.js');

// Cria o objeto da rota de credencial esportiva
const cnsRotasMatricula= require('./routes/matricula-router.js');

// Moninotamento (via terminal) das requisições para acompanhamento no desenvolvimento
cnsApp.use(cnsMorgan('dev'));

// Rota para verificar se conecta com o banco de dados
cnsApp.use('/health', cnsRotasHealth);

// Rota de Associado
cnsApp.use('/associado', cnsRotasAssociado);

// Rota de Credencial Esportiva
cnsApp.use('/matricula', cnsRotasMatricula);

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