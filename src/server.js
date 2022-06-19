const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use('/', routes);

server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});
