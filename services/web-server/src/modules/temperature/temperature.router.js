import { Router } from "express";
import TemperatureController from "./temperature.controller.js"

const temperatureRouter = Router();
const temperatureController = new TemperatureController()

temperatureRouter.get('/latest', temperatureController.getLatest)

export { temperatureRouter };