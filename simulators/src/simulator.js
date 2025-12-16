import mqtt from "mqtt";
import { Logger } from "./logger.js";

export class DeviceSimulator extends Logger{
    constructor(host, port, device, interval, loggerPath) {
        super(loggerPath);
        this.device = device;
        this.interval = interval;
        this.client = mqtt.connect(`mqtt://${host}`, {
            port: port,
            clean: true,
            clientId: device?.name,
            reconnectPeriod: interval
        })
    }

    // listening events
    on(event, type, msg) {
        this.client.on(event, async () => {
            await this.log(msg, type)
        })
    }

    connect(callback) {
        this.client.on("connect", async () => {
            await this.log(`${this.device?.name} connected to mqtt broker`, "warn")

            callback()
        })
    }

    async publish(subTopic, callback) {
        try {
            const topic = `${this.device?.name}/${this.device?.topic}/${subTopic}`;
            this.client.subscribe(topic, () => {
                callback((payload) => {
                    this.client.publish(topic, JSON.stringify(payload))
                })
            })
        } catch (err) {
            await this.log(err, "error")
        }
    }

    startListening() {
        this.client.on("message", async (topic, message) => {
            await this.log((`[${topic}] ${message.toString()}`), "info")
        })
    }

    set changeInterval(newInterval) {
        const oldInterval = this.interval;
        this.interval = newInterval;
        this.log(`Interval changed from ${oldInterval} to ${newInterval}`, "info");
        return this.interval;
    }

}