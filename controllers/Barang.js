import { validationResult } from "express-validator";
import Barang from "../models/BarangModel.js";

export const getBarang = async (req, res) => {
    try {
        const response = await Barang.findAll();
        if(response.length < 1){
            res.json({msg: "belum ada data barang"})
        }
        res.json(response);
    } catch (error) {
        res.json({msg : error})
    }
}

export const saveBarang = async (req, res) => {
    try {
        const {nama, kode, category} = req.body;
        const errors = validationResult(req);
    
        // if there is error then return Error
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors.array(),
          });
        }
        await Barang.create({
            nama: nama,
            kode: kode,
            categoryId: category,
            status: category == 1 ? "Tersedia" : "digunakan"
        })
        res.json({msg: "data barang berhasil ditambahkan"})
    } catch (error) {
        res.json({msg: error})
    }

    
}