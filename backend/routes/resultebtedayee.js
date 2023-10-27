



import express from 'express'
import multer from 'multer';

import { createEbtedayeeResult, deleteEbtedayeeResult, getPdfFile } from '../controllers/resultebtedayee.js';



const router = express.Router();
  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `assets/images/`)
  },
  filename: function (req, file, cb) {

    cb(null, `${Date.now()}-${file.originalname}`)
  } 
})

const upload = multer({ storage: storage })

router.post('/create', upload.single("pdfFile"), createEbtedayeeResult);
router.get('/:title', getPdfFile);
router.delete('/:id', deleteEbtedayeeResult )

export default router;