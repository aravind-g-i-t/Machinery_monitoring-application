import { useEffect, useState } from 'react';
import SensorCard from './components/SensorCard';
import type { SensorData } from './types/SensorData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState<SensorData | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/sensor/data');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error('Error fetching sensor data', err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Real-time Machinery Monitoring System</h1>
        <p className="text-muted">Live updates every 5 seconds</p>
      </div>

      <div className="d-flex justify-content-center">
        {data ? <SensorCard data={data} /> : <div className="text-secondary">Loading sensor data...</div>}
      </div>
    </div>
  );
}

export default App;
