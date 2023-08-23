import express from "express";
import { getUser, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getCategory, saveCategory } from "../controllers/Category.js";
import { CategoryValidate } from "../validation/CategoryValidation.js";
import { getBarang, saveBarang } from "../controllers/Barang.js";
import { BarangValidate } from "../validation/BarangValidation.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/category', getCategory);
router.post('/post/category', CategoryValidate, saveCategory);

router.get('/barang', getBarang);
router.post('/barang/post', BarangValidate, saveBarang);
 
export default router;