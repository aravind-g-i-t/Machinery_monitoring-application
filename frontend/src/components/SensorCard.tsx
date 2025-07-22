import React from 'react';
import type { SensorData } from '../types/SensorData';
import { getMachineStatus } from '../utils/getStatus';

interface Props {
  data: SensorData;
}

const SensorCard: React.FC<Props> = ({ data }) => {
  const status = getMachineStatus(data);
  const statusClass =
    status === 'Critical' ? 'danger' : status === 'Warning' ? 'warning' : 'success';

  return (
    <div className="card shadow-lg border-3" style={{ width: '24rem' }}>
      <div className={`card-header bg-${statusClass} text-white text-center`}>
        <h5 className="mb-0">Machine Status: {status}</h5>
      </div>

      <div className="card-body bg-light">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span><strong>Temperature</strong></span>
            <span>{data.temperature} °C</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><strong>Voltage</strong></span>
            <span>{data.voltage} V</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><strong>Current</strong></span>
            <span>{data.current} A</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><strong>Vibration</strong></span>
            <span>{data.vibration} mm/s</span>
          </li>
          <li className="list-group-item text-center text-muted small">
            Last Updated: {new Date(data.timeStamp).toLocaleTimeString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SensorCard;
