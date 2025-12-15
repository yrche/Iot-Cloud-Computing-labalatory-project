import {Temperature} from "../postgresql/postgresql.models.js";

class TemperatureService {
    async getLatest() {
        const id = await Temperature.count()
        const data = await Temperature.findByPk(id)
        return data
    }
}

export default new TemperatureService;