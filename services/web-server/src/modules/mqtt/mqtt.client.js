import mqtt from "mqtt";

export class MqttClient{
    constructor({host, port}) {
        this.client = mqtt.connect(`mqtt://${host}`, {port})
    }

    subscribe(topic) {
        this.client.subscribe(topic)
    }

    on(callback) {
        this.client.on("message", async (topic, message) => {
            callback(topic, message)
        })
    }
}