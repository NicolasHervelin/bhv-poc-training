import axios from 'axios';
import Router from "koa-router";
import {PocApiConfig} from "../types/Config";
import config from "../utils/config";
import {Context} from "koa";
import logger from "../utils/logger";

const router = new Router();
const pocApiConfig : PocApiConfig = config.api.product;

async function getDummyProducts(ctx: Context) {
    try {
        const response = await axios.get(`${pocApiConfig.url}/dummy/products`);
        const body = response.data;
        ctx.body = body
    } catch (e) {
        logger.error(e);
        ctx.status = 503
    }
}

router.get('/', getDummyProducts);

export default router
