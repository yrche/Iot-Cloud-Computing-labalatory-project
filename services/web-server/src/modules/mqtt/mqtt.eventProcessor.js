import {Humidity, Temperature} from "../postgresql/postgresql.models.js";

export class MqttEventProcessor {
    constructor({ mqttClient, baseTopic }) {
        this.mqttClient = mqttClient;
        this.baseTopic = baseTopic;
    }

    async initialize() {
        this.mqttClient.subscribe(this.baseTopic + "+");

        this.mqttClient.on(async (topic, message) => {
            await this.handleMessage(topic, message);
        });
    }

    async handleMessage(topic, message) {
        let data;
        try {
            data = JSON.parse(message.toString());
        } catch (err) {
            console.error("Invalid JSON:", message.toString());
            return;
        }

        if (topic.endsWith("temperature")) {
            await Temperature.create({
                temperature: data.temperature,
                published_at: data.date
            });
        }

        if (topic.endsWith("humidity")) {
            await Humidity.create({
                humidity: data.humidity,
                published_at: data.date
            });
        }
    }
}