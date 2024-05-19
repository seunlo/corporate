import express from "express";
import { sendMail } from "../controller/mail.controller.js";

const router = express.Router();

router.post("/send-mail", sendMail);

export default router;
