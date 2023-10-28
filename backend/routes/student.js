


import express from 'express'
import { countBYStudent, createStudent, deleteStudent, getStudent, updateStudent } from '../controllers/student.js';

const router = express.Router();

router.post('/create', createStudent);
router.get('/', getStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);
router.get('/countstudent', countBYStudent)


export default router;