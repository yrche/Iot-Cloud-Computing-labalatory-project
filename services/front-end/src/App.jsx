import React from "react";
import {useSensorData} from "./hooks/useSensorData";
import SensorCard from "./components/SensorCard";
import InfoPanel from "./components/InfoPanel";
import "./style.css";

export default function App() {
    const {temperature, humidity, lastUpdate, connected, temperatureStatus, humidityStatus} = useSensorData();

    return (
        <div className="container">
            <header>
                <h1>IoT Weather Monitor</h1>
                <p className="subtitle">Real-time Temperature & Humidity</p>
            </header>

            <div className="dashboard">
                <SensorCard
                    title="Temperature"
                    type="temperature"
                    value={temperature}
                    unit="°C"
                    status={temperature !== null ? temperatureStatus : "Waiting..."}
                    icon={
                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
                        </svg>
                    }
                />

                <SensorCard
                    title="Humidity"
                    type="humidity"
                    value={humidity}
                    unit="%"
                    status={humidity !== null ? humidityStatus : "Waiting..."}
                    icon={
                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                        </svg>
                    }
                />
            </div>

            <InfoPanel lastUpdate={lastUpdate} connected={connected}/>
        </div>
    );
}
