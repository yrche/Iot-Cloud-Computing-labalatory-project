IoT System Monitoring Dashboard (Frontend)

This is the client-side application for the Cloud IoT System, designed to provide a real-time visual interface for monitoring device data and system status.
💻 Tech Stack

    Framework: React.

    State Management: Redux (for consistent data flow across the dashboard).

    Styling: Modern CSS/Responsive Design concepts.

    Communication: REST API integration to fetch processed IoT data from the backend.

🚀 Features

    Real-time Data Visualization: Displays live telemetry from simulated IoT devices.

    System Status Overview: Monitors the health of the MQTT broker and backend processing services.

    Historical Data View: Interface to query and display persisted data from the PostgreSQL database.

    Responsive UI: Optimized for various screen sizes to ensure a seamless monitoring experience.

🛠 Integration with Ecosystem

This frontend service is a key component of the distributed IoT architecture:

    Backend Connectivity: Fetches data from the Node.js ingestion service.

    Infrastructure: Designed to be containerized and deployed alongside the backend and MQTT broker using Docker.

    Environment: Configured to work within the Azure/Oracle Cloud networking setup established for the lab project.

🚦 Getting Started
Prerequisites

    Node.js and npm installed.

    The Backend service and MQTT broker should be running for full functionality.

Installation

    Navigate to the frontend directory:
    Bash

    cd services/front-end

    Install dependencies:
    Bash

    npm install

    Start the development server:
    Bash

    npm start

🏗 Architectural Role

In this project, I focused on the "Fullstack" aspect by ensuring the frontend efficiently reflects the complex event-driven logic happening in the backend. It demonstrates my ability to build end-to-end solutions, from raw hardware simulation to user-facing dashboards.
