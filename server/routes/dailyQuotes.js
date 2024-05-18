import express from "express";

import db from "../db/connection.js";
import { addDailyQuote, getDailyQuote } from '../controllers/dailyQuotesController.js'



const router = express.Router();

router.patch("/addDailyQuote", addDailyQuote);
router.get("/getDailyQuote", getDailyQuote);

export default router;