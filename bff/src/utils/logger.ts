import * as chalk from 'chalk';
import * as ip from 'ip';
import { format, createLogger, transports } from 'winston';
import * as winston from "winston";

const env = process.env.NODE_ENV;
const divider = chalk.default.gray('\n-----------------------------------');

enum LEVEL {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    DEBUG = 'debug',
}

/**
 * Logger middleware, you can customize it to make messages more personal
 */

function logLevel(): string {
    if (env === 'development') {
        return LEVEL.DEBUG;
    }
    return LEVEL.INFO;
}

const formatLogger = env === 'production'
    ? format.combine(format.colorize(), format.timestamp(), format.json(), format.errors())
    : format.combine(format.colorize(), format.timestamp(), format.simple(), format.errors());

const logger = createLogger(
    {
        exitOnError: false,
        level: logLevel(),
        transports: [new transports.Console({ format: formatLogger, handleExceptions: true })],
    });

// Called when koa app starts on given port w/o errors
export const appStarted = (port: number, host: string) => {
    console.log(`Server started ! ${chalk.default.green('✓')}`);

    console.log(`
${chalk.default.bold('Access URLs:')}${divider}
Localhost: ${chalk.default.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.default.magenta(`http://${ip.address()}:${port}`)}
${divider}
${chalk.default.blue(`Press ${chalk.default.italic('CTRL-C')} to stop`)}
`);
};

export default logger;
