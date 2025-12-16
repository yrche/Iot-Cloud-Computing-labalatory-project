export default function SensorCard({title, icon, value, unit, status, type}) {
    return (
        <div className={`card ${type}-card`}>
            <div className="card-header">
                <div className="icon-wrapper">{icon}</div>
                <h2>{title}</h2>
            </div>

            <div className="card-content">
                <div className={`value ${value === null ? "loading" : ""}`}>
                    {value !== null ? value : "--"}
                </div>
                <div className="unit">{unit}</div>
            </div>

            <div className="card-footer">
                <span className="status">{status}</span>
            </div>
        </div>
    );
}
