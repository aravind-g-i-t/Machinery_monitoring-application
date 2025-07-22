import { ISensorDataService } from "../../domain/interfaces/ISensorDataService";
import { SensorData } from "../../domain/entities/SensorData";


export class FetchSensorDataUseCase{
    constructor (private sensorDataService: ISensorDataService){}

    execute():SensorData{
        return this.sensorDataService.getSensorData();
    }
}