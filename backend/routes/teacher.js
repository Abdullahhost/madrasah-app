

import express from 'express';
import multer from 'multer'

import { countBYTeacher, createteacher, deleteTeacher, getTeacher, updateTeacher } from '../controllers/teacher.js';

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

  

router.post('/create', upload.single("profile"), createteacher);
router.get('/', getTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', upload.single("profile"), updateTeacher);
router.get('/countteacher', countBYTeacher)


export default router;