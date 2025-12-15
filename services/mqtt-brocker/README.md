# Docker Compose Setup with MQTT

This project uses `docker-compose.yml` to run services on a server. Port **1883** is exposed for MQTT connections.

## Prerequisites

- Server with Docker and Docker Compose installed
- Terminal access with a user that can run Docker commands

## Setup

1. Clone the repository to your server:

```bash
git clone <REPOSITORY_URL>
cd <repository_name>
```


Ensure that docker-compose.yml exposes port 1883:

``` yml
services:
  mqtt:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data
      - ./mosquitto/log:/mosquitto/log
```

Running the Containers

Navigate to the folder containing docker-compose.yml.
Run the following command to start the containers:

```bash
docker-compose up -d
```

The -d flag runs containers in detached mode (in the background).
Check the status of the containers:

```bash
docker-compose ps
```

Stopping the Containers

To stop and remove the containers while keeping the data in volumes, run:

```bash
docker-compose down
```
# Notes

Make sure port 1883 is open in your server firewall to allow external connections.

Volumes are used to persist MQTT configuration, data, and logs across container restarts.

You can modify the configuration files inside ./mosquitto/config to customize the MQTT broker.