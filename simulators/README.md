# IoT Device Simulators

This directory contains the simulation logic responsible for emulating real-world IoT device behavior. It generates the synthetic data streams required to test the system's **high-throughput processing** and **event-driven architecture**.

## Functionality

The simulators mimic a network of hardware sensors, sending telemetry data to the MQTT broker. This allows for rigorous testing of the backend's ability to handle:

- **Dynamic event patterns:** Simulating varying sensor readings over time.
- **Connection resilience:** Testing how the system handles intermittent device connectivity.
- **System Scalability:** Generating high volumes of messages to validate horizontal scaling and performance optimization.

## Tech Stack

- **Runtime:** Node.js.
- **Protocol:** MQTT (using `mqtt.js`) for lightweight, asynchronous data transmission.
- **Design Pattern:** Event-driven simulation logic.

## Key Features

- **Configurable Telemetry:** Easily adjust the frequency and type of data generated (temperature, humidity, etc.).
- **Dockerized Execution:** Each simulator can be run as a standalone container, allowing for the simulation of hundreds of "virtual devices" across **Azure** or **Oracle Cloud** infrastructure.
- **Integration:** Works in sync with the **Web Server** and **PostgreSQL** database to provide a complete end-to-end data flow.

### Running the Simulator

```
cd simulators

npm install

node index.js

```
