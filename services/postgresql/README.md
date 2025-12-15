# Docker Compose Setup with PostgreSQL and pgAdmin

This project uses `docker-compose.yml` to run PostgreSQL and pgAdmin on a server. Port **5432** is exposed for PostgreSQL, and port **15433** is exposed for pgAdmin web interface.

---

## Prerequisites

- Server with Docker and Docker Compose installed
- Terminal access with a user that can run Docker commands

---

## Setup

1. Clone the repository to your server:

```bash
git clone <REPOSITORY_URL>
cd <repository_name>
```

Ensure that docker-compose.yml has the following configuration:

```yml
version: "3.9"

services:
  database:
    image: postgres:latest
    container_name: air_quality_db
    environment:
      POSTGRES_USER: psqladmin
      POSTGRES_PASSWORD: psqlpassword
      POSTGRES_DB: psqlstorage
    ports:
      - "5432:5432"
    volumes:
      - ./db-data/:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "15433:80"
    depends_on:
      - database
    volumes:
      - ./pgadmin-data/:/var/lib/pgadmin/
```

Notes:

- PostgreSQL port: 5432
- pgAdmin port: 15433
- Data is persisted in ./db-data and ./pgadmin-data folders.

Running the Containers

Navigate to the folder containing docker-compose.yml.
Start the containers:

```bash
docker-compose up -d
```

The -d flag runs containers in detached mode (background).
Check the status of the containers:

```bash
docker-compose ps
```

Connecting to PostgreSQL

You can connect to PostgreSQL from your backend, locally using psql, or via pgAdmin:

```bash
psql -h <SERVER_IP> -U psqladmin -d psqlstorage
```

Default credentials:

    User: psqladmin
    Password: psqlpassword
    Database: psqlstorage

Access pgAdmin web interface at:

`http://<SERVER_IP>:15433`


Login with:

    Email: admin@example.com
    Password: admin

Stopping the Containers

To stop and remove the containers while keeping the data in volumes:

```bash
docker-compose down
```

# Notes

Make sure ports 5432 (PostgreSQL) and 15433 (pgAdmin) are open in your server firewall to allow external connections.

Volumes db-data and pgadmin-data ensure data persists between container restarts.