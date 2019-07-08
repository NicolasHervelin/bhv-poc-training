import Config from "../types/Config";
import * as fs from "fs";
import * as yaml from 'js-yaml';
import logger from "./logger";

const ENCODING = 'utf8';
const CONFIG_FILE = 'C:\\Users\\p_nhervelin\\Documents\\dev\\newGL\\POC-training\\bff\\src\\test\\bff-config.yml';

export function loadConfig(path: string) {
    try {
        logger.info(`Loading configuration file from ${path}`);
        return yaml.safeLoad(fs.readFileSync(path, { encoding: ENCODING }));
    } catch (e) {
        logger.error(e);
    }
}

export const config: () => Config = () => loadConfig(CONFIG_FILE);

export default config();
