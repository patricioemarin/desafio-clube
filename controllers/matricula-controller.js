// Realiza a instância do objeto de banco de dados
const cnsMySQL = require('../config/mysql.js');

exports.postMatricula = async (request, response, next) => {
    try {
        
        const cntQuery = `INSERT INTO tbmatricula (matId, espId, assId, matAdimplente) values (Null,?,?,'N');`;
        
        const cnsResult = await cnsMySQL.execute(
            cntQuery,
            [request.body.espId,
            request.params.assId]
        );
        
        const cntResponse = {
            mensagem: 'Matrícula inserida com sucesso',
            MatriculaCriada: {
                assId: cnsResult.insertId
            }
        };  
        return response.status(201).send({cntResponse});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};

exports.getMatricula = async (request, response, next) => {
    try {
        
        const cntQuery = `SELECT CONCAT(A.assNome, ' ', A.assSobreNome) as assNome, E.espNome FROM tbassociado A inner join tbmatricula M on (A.assId = M.assId) inner join tbesportes E on (M.espId = E.espId) WHERE M.assId = ?;`;
        
        const cnsResult = await cnsMySQL.execute(
            cntQuery,
            [request.params.assId]
        );
        
        const cntResponse = {
            AssociadosMatriculados: cnsResult.map(Matricula =>{
                return {
                    
                    Associado: Matricula.assNome,
                    Esporte: Matricula.espNome
                }
            })
        }
        return response.status(200).send({cntResponse});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};

exports.deleteMatricula = async (request, response, next) => {
    try {
        
        const cntQuery = `DELETE FROM tbmatricula where espId = ? and assId = ?;`;

        await cnsMySQL.execute(
            cntQuery,
            [request.body.espId,
            request.params.assId]
        );
        
        return response.status(202).send({message: "Matrícula removida com sucesso"});
    } catch (error) {
        return response.status(500).send({error: error});
    }
};