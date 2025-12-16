import {useEffect, useState} from "react";

// API Configuration
const API_CONFIG = {
    baseUrl: "4.235.111.0:3000/api",
    endpoint: (endpoint) => `/${endpoint}/latest`,
    updateInterval: 5000,
};

/**
 * Fetch data from API
 */
async function fetchData(url, method) {
    try {
        const res = await fetch(url, {method})
        return await res.json();
    } catch (err) {
        console.error("Fetch error", err)
    }
}

/**
 * Update temperature status message
 */
function updateTemperatureStatus(temp) {
    if (temp < 10) {
        return 'Very Cold';
    } else if (temp < 18) {
        return 'Cold';
    } else if (temp < 24) {
        return 'Comfortable';
    } else if (temp < 30) {
        return 'Warm';
    }
    return 'Hot';
}

/**
 * Update humidity status message
 */
function updateHumidityStatus(humidity) {
    if (humidity < 30) {
        return 'Very Dry';
    } else if (humidity < 40) {
        return 'Dry';
    } else if (humidity < 60) {
        return 'Comfortable';
    } else if (humidity < 70) {
        return 'Humid';
    }
    return 'Very Humid';
}

/**
* Fetch sensor data from the API
*/
export function useSensorData() {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [connected, setConnected] = useState(false);
    const [temperatureStatus, setTemperatureStatus] = useState(null)
    const [humidityStatus, setHumidityStatus] = useState(null)

    async function fetchSensorData() {
        try {
            const data = {
                temperature: await fetchData((API_CONFIG.baseUrl+ API_CONFIG.endpoint("temperature"))),
                humidity: await fetchData((API_CONFIG.baseUrl + API_CONFIG.endpoint("humidity"))),
                timestamp: new Date().toISOString()
            }

            setTemperature(data.temperature.temperature);
            setHumidity(data.humidity.humidity);
            setLastUpdate(data.timestamp);
            setConnected(true);
            setTemperatureStatus(updateTemperatureStatus(data.temperature.temperature))
            setHumidityStatus(updateHumidityStatus(data.humidity.humidity))
        } catch (err) {
            console.error("API error", err);
            setConnected(false);
        }
    }

    useEffect(async () => {
        await fetchSensorData();
        const interval = setInterval(fetchSensorData, API_CONFIG.updateInterval);
        return () => clearInterval(interval);
    }, []);

    return {
        temperature,
        humidity,
        lastUpdate,
        connected,
        temperatureStatus,
        humidityStatus
    };
}
