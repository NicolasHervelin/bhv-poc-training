export const logger = {
    // tslint:disable-next-line:no-console
    log: console.log.bind(console),
    // tslint:disable-next-line:no-console
    info: console.info.bind(console),
    // tslint:disable-next-line:no-console
    error: console.error.bind(console),
    // tslint:disable-next-line:no-console
    warn: console.warn.bind(console),
};

if (typeof window !== 'undefined') {
    window.onerror = logger.error;
}
