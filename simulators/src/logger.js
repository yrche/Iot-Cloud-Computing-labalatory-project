import * as fs from "node:fs";
import {DateTime} from "luxon";

export class Logger {
    constructor(path) {
        this.types = {
            info: "[INFO]",
            warn: "[WARN]",
            error: "[ERR]"
        }
        this.path = path;
    }

    async log(msg, type) {
        const content = `[${DateTime.now()}] ${this.types[type]} ${msg}`
        await fs.writeFile(this.path, `\n ${content}`, {flag: "a"}, err => {})
        console.log(content)

        return content
    }

}