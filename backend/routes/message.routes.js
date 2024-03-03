import express from "express";
import { sendMessage } from "../controllers/message.controllers.js";
import portectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.post("/send/:id", portectRoute, sendMessage);

export default router;
