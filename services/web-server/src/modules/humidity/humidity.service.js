import { Humidity } from "../postgresql/postgresql.models.js";

class HumidityService {
    async getLatest() {
        const id = await Humidity.count()
        const data = await Humidity.findByPk(id)
        return data
    }

}

export default new HumidityService;