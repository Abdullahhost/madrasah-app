




import express from 'express';

import multer from 'multer';
import { countBYPeople, createPeople, deletePeople, getPeople, updatePeople } from '../controllers/loveofpeople.js';


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


router.post('/create',  upload.single("profile"), createPeople);
router.get('/', getPeople );
router.delete('/:id', deletePeople);
router.put('/:id', upload.single("profile"), updatePeople);
router.get('/countloveofpeople', countBYPeople )


export default router;