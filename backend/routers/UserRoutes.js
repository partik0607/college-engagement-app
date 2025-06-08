import express from "express";
import { registerUser,authUser } from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get('/test', (req, res) => {
  res.status(200).send("API is working");
});

export default router;