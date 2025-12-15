import { Router } from "express";
import HumidityController from "./humidity.controller.js"

const humidityRouter = Router();
const humidityController = new HumidityController()

humidityRouter.get('/latest', humidityController.getLatest)

export { humidityRouter };