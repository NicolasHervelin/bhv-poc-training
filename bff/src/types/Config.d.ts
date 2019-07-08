export default interface Config {
    api: ApiConfig
    server: ServerConfig
}

export interface ApiConfig {
    product: PocApiConfig
}

export interface PocApiConfig {
    url: string
}

export interface ServerConfig {
    host: string
    port: number
}
