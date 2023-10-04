import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import photoController from "../controllers/PhotoController";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single("photo"), photoController.create);

export default router;
