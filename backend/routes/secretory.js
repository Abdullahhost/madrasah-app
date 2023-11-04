
import express from 'express'

import multer from 'multer';

import { createSecretory, deleteSecretory, getSecretory, updateSecretory } from '../controllers/secretory.js';

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


router.post('/create', upload.single("profile"), createSecretory);
router.get('/', getSecretory);
router.delete('/:id', deleteSecretory);
router.put('/:id', upload.single("profile"), updateSecretory);


export default router;