import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js";

const Barang = db.define('barang', {
    nama: {
        type: DataTypes.STRING
    },
    kode: {
        type: DataTypes.STRING
    },
    categoryId: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
}); 

Barang.belongsTo(Category)


export default Barang;


