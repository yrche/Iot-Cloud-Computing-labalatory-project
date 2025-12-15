import { DataTypes } from "sequelize";
import {postgresqlConnect} from "./postgresql.connect.js";

const Temperature = postgresqlConnect.define(
    'Temperature',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        temperature: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        published_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        registered_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }
)

const Humidity = postgresqlConnect.define(
    'Humidity',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        humidity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        published_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        registered_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }
)

export {
    Temperature,
    Humidity
}