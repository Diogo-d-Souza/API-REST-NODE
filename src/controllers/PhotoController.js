import multer from "multer";
import multerConfig from "../config/multer";
import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          error: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const photo = await Photo.create({
          originalname,
          filename,
          student_id,
        });
        return res.json(photo);
      } catch (error) {
        return res.status(400).json({
          errors: ["Student does not exist"],
        });
      }
    });
  }
}

export default new PhotoController();
