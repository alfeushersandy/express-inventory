import { Sequelize } from "sequelize";

const db = new Sequelize('express_inventory', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
        useUTC: false, // for reading from database
      },
    timezone: "+07:00"
})

export default db;