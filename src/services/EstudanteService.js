const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito)=>{
            db.query('SELECT * FROM estudante', (error, results)=>{
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito)=>{
            db.query('SELECT * FROM estudante WHERE id = ?', [id], (error, results) => {
                if(results.length > 0) //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);    
            });
        });
    },
    
    inserir: (nome, email, cpf)=> {
        return new Promise((aceito)=> {
            db.query('INSERT INTO estudante (nome, email, cpf) VALUES (?, ?, ?)', [nome, email, cpf], (error, results)=>{
                    aceito(results.insertid); //insertId
                }
            );
        });
    },

    alterar:(id, nome, email, cpf)=> {
        return new Promise((aceito)=> {
            db.query('UPDATE estudante SET nome = ?, email = ?, cpf = ? WHERE id = ?', [nome, email, cpf, id], (error, results) => {
                    aceito(results);
                }
            );
        });
    },

    excluir: (id)=> {
        return new Promise((aceito)=> {
            db.query('DELETE FROM estudante WHERE id = ?',[id], (error, results ) =>{
                aceito(results);
            });
        });
    }
};