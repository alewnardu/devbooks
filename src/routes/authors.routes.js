import { Router } from "express";
import { createAuthor } from "../controllers/authors.controller.js";

const router = Router();

router.post("/", createAuthor);

export default router;