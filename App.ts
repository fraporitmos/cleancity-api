import dotenv from 'dotenv';
import Server from './server/Server';
//establecer acceso a las variables de entorno
dotenv.config();
const server = new Server();
server.listen();