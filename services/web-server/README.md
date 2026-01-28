# IoT Web Server & Data Processing Service

This service acts as the central intelligence of the IoT Cloud system, responsible for data ingestion, processing, and persistence. It bridges the gap between the **MQTT broker** and the **PostgreSQL** database.

## Core Responsibilities

- **Data Ingestion:** Subscribes to MQTT topics to receive real-time telemetry from simulated IoT devices.
- **Business Logic:** Processes raw sensor data and prepares it for storage and frontend consumption.
- **Database Persistence:** Manages high-frequency writes to **PostgreSQL**, ensuring data integrity for historical analysis.
- **REST API:** Provides endpoints for the React frontend to fetch system status and device history.

## Tech Stack

- **Runtime:** Node.js.
- **Communication:** MQTT (via `mqtt.js`) for device communication and REST for client communication.
- **Database:** PostgreSQL (utilizing optimized SQL queries for data retrieval).
- **Architecture:** Event-driven design to handle asynchronous message streams efficiently.

## Key Features

- **Safe Message Handling:** Implemented a robust ingestion pipeline to prevent data loss during high-traffic bursts.
- **Scalable Design:** Designed for horizontal scalability within a containerized cloud environment (Azure/Oracle Cloud).
- **Environment Parity:** Fully Dockerized for seamless deployment across different cloud infrastructures.

### Installation

```bash
npm init
npm start
```
