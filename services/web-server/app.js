import express from "express";
import env from "./config.js"
import cors from "cors";
import { router } from "./src/modules/routers/router.connect.js";
import { errorMiddleware } from "./src/modules/middleware/error.middleware.js";
import { postgresqlConnect } from "./src/modules/postgresql/postgresql.connect.js";
import { mqttEventProcessor } from "./src/modules/mqtt/mqtt.connect.js";

const app = express();

async function main () {
    try {
        app.use(express.json())
        app.use(cors({
            origin: env.CLIENT_API,
        }));
        app.use("/api", router);
        app.use(errorMiddleware);

        app.listen(env.PORT, async () => {
            await postgresqlConnect.initialize()
            await mqttEventProcessor.initialize()
            console.log(`Server listening on port ${env.PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

await main()