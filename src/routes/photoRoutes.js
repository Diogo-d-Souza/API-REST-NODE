import { Router } from "express";

import photoController from "../controllers/PhotoController";

const router = new Router();

router.post("/", photoController.create);

export default router;
