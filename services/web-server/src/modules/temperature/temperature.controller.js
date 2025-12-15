import {Temperature} from "../postgresql/postgresql.models.js";
import TemperatureService from "./temperature.service.js";

class TemperatureController {
    async getData(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }

    async getLatest(req, res, next) {
        try {
            const data = await TemperatureService.getLatest()
            return res.send(data)
        } catch (err) {
            next(err)
        }
    }
}

export default TemperatureController;