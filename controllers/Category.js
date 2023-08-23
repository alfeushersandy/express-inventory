import { validationResult } from "express-validator";
import Category from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
    try{
        const response = await Category.findAll();
        if(response.length == 0){
            res.json({msg: "belum ada data"});
        }
        res.json(response);
    } catch (error) {
        res.json({msg: error })
    }
}

export const getCategoryById = async (req, res) => {
    try{
        const response = await Category.findOne({
            where: {
                id: req.param.id
            }
        });
        res.json(response);
    } catch (error) {
        res.json({msg: error})
    }
}

export const saveCategory = async (req, res) => {
    try {
        const {nama, kode} = req.body
        const errors = validationResult(req);
    
        // if there is error then return Error
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors.array(),
          });
        }
        await Category.create({
            nama: nama,
            kode: kode
        })
        res.json({msg: 'data berhasil ditambahkan'})
    } catch (err) {
        res.json({msg: err});
    }
}