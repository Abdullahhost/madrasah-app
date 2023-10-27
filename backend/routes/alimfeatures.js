

import express from 'express'
import multer from 'multer';

import { createalimfeatures } from '../controllers/alimfeatures.js';

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


router.post('/create', upload.single("profile"), createalimfeatures);

export default router;