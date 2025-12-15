import {Router} from "express";
import {humidityRouter} from "../humidity/humidity.router.js";
import {temperatureRouter} from "../temperature/temperature.router.js";

const router = new Router()

router.use('/humidity', humidityRouter)
router.use('/temperature', temperatureRouter)

export { router };