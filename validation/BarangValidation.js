import { body } from "express-validator"

export const BarangValidate = [
    body('nama').notEmpty(),
    body('kode').notEmpty(),
    body('category').notEmpty(),
]