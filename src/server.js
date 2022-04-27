const { Server, Origins }  = require('boardgame.io/server');
const { Example } = require('./Game');

const server = Server({
    games:[Example],
    origins: [Origins.LOCALHOST]
});

server.run(8000);