
import express from 'express'
import { countBYNotice, createNotices, deleteNotice, getNotice, updateNotice } from '../controllers/notices.js';

const router = express.Router();

router.post('/create', createNotices);
router.get('/', getNotice);
router.delete('/:id', deleteNotice);
router.put('/:id', updateNotice);
router.get('/countnotice', countBYNotice)

export default router;