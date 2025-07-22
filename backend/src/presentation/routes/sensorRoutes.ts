import { Router } from "express";
import { SensorDataService } from "../../infrastructure/services/SensorDataService";
import { FetchSensorDataUseCase } from "../../application/useCases/FetchSensorDataUseCase";
import { SensorController } from "../controllers/SensorController";

const router= Router();

const service= new SensorDataService();
const useCase= new FetchSensorDataUseCase(service);
const controller = new SensorController(useCase);

router.get('/data', (req, res) => controller.getSensorData(req, res));

export default router;