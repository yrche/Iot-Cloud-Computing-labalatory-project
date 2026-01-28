# Home Air Quality Monitoring System (IoT Cloud Project)

A distributed, cloud-native IoT solution designed to monitor, store, and analyze indoor environmental data in real time. This project was developed as a comprehensive laboratory study on **Cloud Computing** and **System Design**.

## 🌐 Project Overview

The system provides a full-cycle data pipeline—from emulating hardware sensors to visualizing air quality trends on a web dashboard. It demonstrates a robust integration of **Azure Cloud Services**, **MQTT infrastructure**, and **Node.js backend** systems.

### 🚀 Key Features

- **Real-Time Monitoring:** Track home air conditions (temperature, humidity, etc.) with live dashboard updates.
- **Cloud Integration:** Scalable data storage and analysis hosted on **Microsoft Azure** and **Oracle Cloud**.
- **Smart Alerts:** Automated notifications triggered when environmental thresholds (e.g., unhealthy CO2 or humidity levels) are exceeded.
- **Multi-Room Support:** Architecture designed to handle data streams from multiple locations simultaneously.
- **Automation Ready:** Designed to support future integration with smart HVAC systems for energy efficiency.

---

## 🏗 System Architecture

The project is built using a microservices approach, divided into three core components:

1. **[Simulators](https://www.google.com/search?q=./simulators):** Node.js-based engines that emulate multiple IoT devices and sensor behaviors.
2. **[Web Server (Backend)](https://www.google.com/search?q=./services/web-server):** The central hub that processes MQTT streams, manages the **PostgreSQL** database, and provides a REST API.
3. **[Front-end](https://www.google.com/search?q=./services/front-end):** A **React & Redux** dashboard for homeowners and administrators to visualize data.

---

## 🛠 Technical Stack

- **Cloud:** Microsoft Azure.
- **Backend:** Node.js (Core modules, MQTT.js, Express).
- **Database:** PostgreSQL.
- **Infrastructure:** Docker, MQTT (Mosquitto Broker), GitHub Actions for CI/CD.
- **Frontend:** React.

---

## 👥 User Roles & Goals

- **Homeowner:** Focused on health and comfort. Monitors real-time data and receives mobile alerts for abnormal conditions.
- **System Administrator:** Ensures system reliability. Monitors device connectivity status and analyzes long-term environmental trends.
