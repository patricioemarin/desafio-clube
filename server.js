// Importação do serviço (biblioteca) http
const cnshttp = require('http');

// Cria a constante do aplicativo (instância)
const cnsApp = require('./app.js');

// Definr a porta a ser utilizada pela aplicação
const cnsPort = process.env.PORT || 3000;

// Passa o app para criar a constante do servidor
const cnsServer = cnshttp.createServer(cnsApp);

// Ouve a porta definita para a navegação
cnsServer.listen(cnsPort);