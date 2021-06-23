module.exports = {
    port: 8000,
    database: {
        HOST: "localhost",
        PORT: "3306",
        USERNAME: "root",
        DATABASE: "pharmacy",
        PASSWORD: "1234"
    },
    redis_config: {
        port: 6379,
        host: '127.0.0.1',
        family: 4,
        db: 0
    }
}