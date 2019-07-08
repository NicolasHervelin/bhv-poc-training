import Koa from 'koa';
import bodyParser = require("koa-bodyparser");
import morgan = require("koa-morgan");
import Router from "koa-router";
import dummyProducts from './routes/dummy-products';
import {ServerConfig} from "./types/Config";
import config from './utils/config';
import logger, {appStarted} from "./utils/logger";

const isDev = process.env.NODE_ENV !== 'production';
const app = new Koa();
const serverConfig: ServerConfig = config.server;
const port: number = serverConfig.port;
const host: string = process.env.HOST || serverConfig.host;
const router = new Router({prefix: '/api'});


router.use('/dummy/products', dummyProducts.routes());

app
    .use(bodyParser())
    .use(morgan(isDev ? 'dev' : 'common'))
    .use(router.routes())
    .use(router.allowedMethods());


const server = app.listen(port, host, () => {
    appStarted(port, host);
});

process.on('SIGTERM', () => {
    server.close((err: Error) => {
        if (err) {
            logger.error(err);
            process.exit(1);
        }

        process.exit(0);
    });
});
