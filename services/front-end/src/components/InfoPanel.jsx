import { useEffect, useState } from "react";

export default function InfoPanel({lastUpdate, connected}) {
    const [lastUpdateValue, setLastUpdateValue] = useState(null);

    function updateLastUpdateTime(lastUpdate) {
        if (!lastUpdate) return "Never";

        const updateTime = new Date(lastUpdate);
        const diffSeconds = Math.floor((Date.now() - updateTime) / 1000);

        if (diffSeconds < 60) {
            return `${diffSeconds} seconds ago`;
        } else if (diffSeconds < 3600) {
            const minutes = Math.floor(diffSeconds / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return updateTime.toLocaleTimeString();
        }
    }

    useEffect(() => {
        const update = () => setLastUpdateValue(updateLastUpdateTime(lastUpdate));

        update();
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [lastUpdate]);

    return (
        <div className="info-panel">
            <div className="info-item">
                <span className="info-label">Last Update:</span>
                <span className="info-value">{lastUpdateValue}</span>
            </div>

            <div className="info-item">
                <span className="info-label">Status:</span>
                <span
                    id="connection-status"
                    className={`info-value ${connected ? "connected" : ""}`}
                >
          {connected ? "Connected" : "Disconnected"}
        </span>
            </div>
        </div>
    );
}
