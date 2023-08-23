import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Category = db.define('category', {
    nama : {
        type : DataTypes.STRING
    }, 
    kode: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Category;