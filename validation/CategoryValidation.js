import { body } from "express-validator"

export const CategoryValidate = [
    body('nama').notEmpty(),
    body('kode').notEmpty()
]
