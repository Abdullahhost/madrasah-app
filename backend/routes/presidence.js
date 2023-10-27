

import express from 'express'
import multer from 'multer';

import { createPresidence, deletePresidence, getPresidence, updatePresidence } from '../controllers/presidence.js';

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


router.post('/create', upload.single("profile"), createPresidence);
router.get('/', getPresidence);
router.delete('/:id', deletePresidence);
router.put('/:id', upload.single("profile"), updatePresidence);


export default router;