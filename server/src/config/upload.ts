import multer from "multer";
import path from "path";

const storage = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "uploads"),
    filename: (req, file, callback) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      callback(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};

export default storage;
