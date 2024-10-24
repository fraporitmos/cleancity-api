import express,{Application} from 'express';
import cors from 'cors';
import notify from '../routes/notify';
import path from "path";

class Server {
    private app: Application;
    private server:  any;
    private io: any;
    private port: string;
    private apiPaths = {
        notify: '/api'
    };
    middleware() {
        this.app.use(cors({origin: '*'}));
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, "../public")));
        this.app.use(express.static("public"));
    }


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '6060';
        this.server = require('http').createServer(this.app);

        this.io = require('socket.io')(this.server, {
            cors : {
                origin: '*',
            }
          });
        this.middleware();
        this.routes();

    }

    routes() {
        this.app.use(this.apiPaths.notify, notify);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('✓ The Api Clean City is runing in port: '+this.port);
        })
    
    }
}
export default Server;