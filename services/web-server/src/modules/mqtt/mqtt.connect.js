import {MqttEventProcessor} from "./mqtt.eventProcessor.js";
import {MqttClient} from "./mqtt.client.js";
import env from "../../../config.js";

export const mqttEventProcessor = new MqttEventProcessor({
    mqttClient: new MqttClient({
        host: env.MQTT_BROKER_HOST,
        port: env.MQTT_BROKER_PORT
    }),
    baseTopic: "air-sensor/sensor/"
})