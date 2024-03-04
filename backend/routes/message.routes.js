import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controllers.js";
import portectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", portectRoute, sendMessage);
router.get("/:id", portectRoute, getMessage);

export default router;
