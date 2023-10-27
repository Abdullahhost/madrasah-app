
import multer from 'multer';

import express from 'express'
import { createWorker, deleteWorker, getWorker, updateWorker } from '../controllers/Worker.js';

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

router.post('/create',upload.single("profile"), createWorker);
router.get('/', getWorker);
router.delete('/:id', deleteWorker);
router.put('/:id', upload.single("profile") , updateWorker);


export default router;