// Realiza a instância do objeto de banco de dados
const cnsMySQL = require('../config/mysql.js');

exports.postAssociado = async (request, response, next) => {
    try {
        
        const cntQuery = `INSERT INTO tbassociado (assId, assNome, assSobrenome, assDataNascimento, assEmail, assTelefone, assCelular, assLogradouro, assComplemento, assBairro, assCidade, assUF, assCEP) values (Null,?,?,?,?,?,?,?,?,?,?,?,?);`;
        
        const cnsResult = await cnsMySQL.execute(
            cntQuery,
            [request.body.assNome,
            request.body.assSobrenome,
            request.body.assDataNascimento,
            request.body.assEmail,
            request.body.assTelefone,
            request.body.assCelular,
            request.body.assLogradouro,
            request.body.assComplemento,
            request.body.assBairro,
            request.body.assCidade,
            request.body.assUF,
            request.body.assCEP]
        );
            
        const cntResponse = {
            mensagem: 'Associado inserido com sucesso',
            AssociadoCriado: {
                assId: cnsResult.insertId
            }
        };  
        return response.status(201).send({cntResponse});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};

exports.patchAssociado = async (request, response, next) => {
    try {
        
        const cntQuery = `UPDATE tbassociado SET assNome = ?, assSobrenome = ?, assDataNascimento = ?, assEmail = ?, assTelefone = ?, assCelular = ?, assLogradouro = ?, assComplemento = ?, assBairro = ?, assCidade = ?, assUF = ?, assCEP = ? WHERE assId = ?;`;
        
        const cnsResult = await cnsMySQL.execute(
            cntQuery,
            [request.params.assId,
            request.body.assNome,
            request.body.assSobrenome,
            request.body.assDataNascimento,
            request.body.assEmail,
            request.body.assTelefone,
            request.body.assCelular,
            request.body.assLogradouro,
            request.body.assComplemento,
            request.body.assBairro,
            request.body.assCidade,
            request.body.assUF,
            request.body.assCEP]
        );
            
        const cntResponse = {
            mensagem: 'Associado alterado com sucesso',
            AssociadoCriado: {
                assId: request.params.assId
            }
        };  
        return response.status(201).send({cntResponse});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};

exports.getAssociado = async (request, response, next) => {
    try {
        
        const cnsResult = await cnsMySQL.execute('SELECT * FROM tbassociado;');
        
        const cntResponse = {
            QtdeAss: cnsResult.lenght,
            Associados: cnsResult.map(Associado =>{
                return {
                    assId: Associado.assId,
                    assNome: Associado.assNome,
                    assSobrenome: Associado.assSobrenome,
                    assDataNascimento: Associado.assDataNascimento,
                    assEmail: Associado.assEmail,
                    assTelefone: Associado.assTelefone,
                    assCelular: Associado.assCelular,
                    assLogradouro: Associado.assLogradouro,
                    assComplemento: Associado.assComplemento,
                    assBairro: Associado.assBairro,
                    assCidade: Associado.assCidade,
                    assUF: Associado.assUF,
                    assCEP: Associado.assCEP
                }
            })
        }
        return response.status(200).send({cntResponse});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};

exports.deleteAssociado = async (request, response, next) => {
    try {
        
        const cntQuery = `DELETE FROM tbassociado where assId = ?;`;

        await cnsMySQL.execute(
            cntQuery,
            [request.params.assId]
        );
        
        return response.status(202).send({message: "Associado removido com sucesso"});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};