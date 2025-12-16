import {DeviceSimulator} from "./src/simulator.js";
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

const sensor = new DeviceSimulator(
    process.env.HOST,
    process.env.PORT,
    {name: "air-sensor", topic: "sensor"},
    5000,
    "./device.log"
);

sensor.connect(async () => {

    await sensor.publish("humidity", (publish) => {
        let seq = 0;

        setInterval(() => {
            seq++
            const payload = {
                humidity: (50 + Math.random() * 20).toFixed(2),
                seq: seq,
                date: Date.now()
            }
            publish(payload)
        }, sensor.interval)
    })

    await sensor.publish("temperature", (publish) => {
        let seq = 0;

        setInterval(() => {
            seq++
            const payload = {
                temperature: (19 + Math.random() * 9).toFixed(1),
                seq: seq,
                date: Date.now()
            }
            publish(payload)
        }, sensor.interval)
    })
})

sensor.startListening()

sensor.on("disconnect", "warn", "Disconnected")
sensor.on("reconnect", "warn", "Reconnection...")
sensor.on("error", "error", `Error: connection failed...`)