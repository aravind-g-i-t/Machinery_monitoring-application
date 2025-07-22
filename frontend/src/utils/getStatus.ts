import type { SensorData } from "../types/SensorData";
export function getMachineStatus(data: SensorData): "Healthy" | "Warning" | "Critical" {
  const { temperature, vibration } = data;

  if (temperature > 80 && vibration > 20) return "Critical";
  if (temperature > 80 || vibration > 20) return "Warning";
  return "Healthy";
}
