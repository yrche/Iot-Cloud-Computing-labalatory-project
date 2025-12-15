import HumidityService from "./humidity.service.js";

class HumidityController {
    async getData(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }

    async getLatest(req, res, next) {
        try {
            const data = await HumidityService.getLatest()
            return res.send(data)
        } catch (err) {
            next(err)
        }
    }
}

export default HumidityController;