import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const port = process.env.PORT || 3000;

// Initialize server.
const server : Server = Server.init(+port);

// Define routes.
server.app.use(router);

server.start(() => console.log(`Server running in port: ${ port }`));