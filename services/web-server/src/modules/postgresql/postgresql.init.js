import { Sequelize } from "sequelize";

class PostgresqlInit extends Sequelize{
    constructor(options) {
        super(options)
    }

    async initialize() {
        try {
            await this.sync()
                .then(() => {
                    console.log('Tables are synchronized with the database');
                })
                .catch(err => {
                    console.error('Synchronization error:', err);
                });

            await this.authenticate();
            console.log('Connection has been established successfully')
        } catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }
}

export default PostgresqlInit;