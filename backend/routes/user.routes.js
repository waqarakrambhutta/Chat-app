import express from "express";
import portectRoute from "../middleware/protectRoute.js";
import getUsersForSidebar from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", portectRoute, getUsersForSidebar);

export default router;
