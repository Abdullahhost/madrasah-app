
import express from 'express';
import { login, newUser } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', newUser);
router.post('/login', login);

export default router;