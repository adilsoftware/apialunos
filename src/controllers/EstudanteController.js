const EstudanteService = require('../services/EstudanteService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {result:[]};

        let estudante = await EstudanteService.buscarTodos();

        for(let i in estudante){
            json.result.push({
                id: estudante[i].id,
                nome: estudante[i].nome,
                email: estudante[i].email,
                cpf: estudante[i].cpf
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {result:{}};

        let id = req.params.id; //para pegar o parametro
        let estudante = await EstudanteService.buscarUm(id);

        if(estudante){
            json.result = estudante; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let cpf = req.body.cpf;

        if (nome && email && cpf){
            let estudanteid = await EstudanteService.inserir(nome, email, cpf);
            json.result = {
                id: estudanteid,
                nome,
                email,
                cpf
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let cpf = req.body.cpf;

        if (id && nome && email && cpf){
            await EstudanteService.alterar(id, nome, email, cpf);
            json.result = {
                id,
                nome,
                email,
                cpf
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    
    excluir: async(req, res) => {
        let json = {result:{}};
        await EstudanteService.excluir(req.params.id);
        res.json(json);
    },
}


