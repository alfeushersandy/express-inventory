import db from "../config/Database.js";
import Barang from "./BarangModel.js";
import Category from "./CategoryModel.js";
import Users from "./UsersModel.js";


// Sync all models
async function syncModels() {
  try {
    await db.sync(); // Use force: true to drop tables if they already exist
    console.log('Models synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
}

// Call the sync function
syncModels();