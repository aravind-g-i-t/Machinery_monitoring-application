import { Request,Response } from "express";
import { FetchSensorDataUseCase } from "../../application/useCases/FetchSensorDataUseCase";

export class SensorController {
    constructor(
        private fetchSensorDataUseCase:FetchSensorDataUseCase
    ){}

    getSensorData(req:Request,res:Response){

        const data= this.fetchSensorDataUseCase.execute();
        res.json(data)
    }
}