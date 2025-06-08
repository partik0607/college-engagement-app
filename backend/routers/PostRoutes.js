import express from "express";
import { addpost, deletepost, editpost, getposts, updateviews } from "../controllers/PostControler.js";
import {protect} from "../middleware/authmiddleware.js"
import { getuser } from "../controllers/UserController.js";
const router = express.Router();

router.post('/post',protect,addpost);
router.get('/getposts',protect,getposts);
router.get('/getusers',protect,getuser);
router.put('/update/:id',protect,editpost);
router.put('/updateview/:id',protect,updateviews);
router.delete('/delete/:id',protect,deletepost);

export default router;