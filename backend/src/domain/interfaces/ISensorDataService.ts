import { SensorData } from "../entities/SensorData";

export interface ISensorDataService{
    getSensorData():SensorData;
}