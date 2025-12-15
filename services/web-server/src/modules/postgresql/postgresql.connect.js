import PostgresqlInit from "./postgresql.init.js";
import env from "../../../config.js"

export const postgresqlConnect = new PostgresqlInit({
    dialect: "postgresql",
    database: env.PSQL_DATABASE,
    username: env.PSQL_USER,
    password: env.PSQL_PASSWORD,
    host: env.PSQL_HOST,
    port: env.PSQL_PORT,
    define: {
        timestamps: false,
    }
})