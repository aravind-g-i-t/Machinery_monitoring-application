import { ISensorDataService } from "../../domain/interfaces/ISensorDataService";
import { SensorData } from "../../domain/entities/SensorData";

export class SensorDataService implements ISensorDataService{
    getSensorData(): SensorData {
        
        return {
            voltage: parseFloat((220+ Math.random()*10).toFixed(2)),
            temperature:parseFloat((Math.random()*100).toFixed(2)),
            vibration:parseFloat((Math.random()*30).toFixed(2)),
            current:parseFloat((10+Math.random()*5).toFixed(2)),
            timeStamp:new Date()
        }
    }
}