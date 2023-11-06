
import express from 'express';


import { } from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import userCreateOrLogin from './routes/auth.js';
import getUser from './routes/user.js';
import noticeRoutes from './routes/notices.js';
import teacherRoutes from './routes/teacher.js';
import presidenceRoutes from './routes/presidence.js';
import secretoryRoutes from './routes/secretory.js';
import workerRoutes from './routes/worker.js';
import studentRoutes from './routes/student.js';
import loveofpeopleRoutes from './routes/loveofpeople.js';
import EbtedayeeResult from './routes/resultebtedayee.js';
import AlimFeatures from './routes/alimfeatures.js';


const app = express();

app.use(cors(
    {
        origin: "*",
        credentials: true

    }
));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('assets/images'))

const port = process.env.PORT;


const mongoPort = process.env.MONGO_URL;




app.use('/auth', userCreateOrLogin);
app.use('/user', getUser);
app.use('/notice', noticeRoutes);
app.use('/teacher', teacherRoutes);
app.use('/presidence', presidenceRoutes);
app.use('/secretory', secretoryRoutes);
app.use('/worker', workerRoutes);
app.use('/student', studentRoutes);
app.use('/loveofpeople', loveofpeopleRoutes);
app.use('/classonetofour', EbtedayeeResult);

app.use('/alimfeatures', AlimFeatures );

app.post('/setcookie', (req, res, next) => {
    const { userName, password } = req.body;
    const newUserList = {
        userName,
        password
    }
    res.cookie('userName', newUserList, { httpOnly: true, maxAge: 5000 * 30, sameSite: 'lax', path: '/' }).send('cookie set correctly!')

})


const connection = async () => {
    try {
        await mongoose.connect(mongoPort);
        console.log('Connected to MongoDB!');
    } catch (err) {
        throw err
    }
}

app.get('/', (req, res) => {
    res.cookie('userName', 'iegfsdhfosjdiofhweoirkopwe', { httpOnly: true, maxAge: 5000 * 30, sameSite: 'lax', path: '/' })
    res.send("Hello World");
})


app.listen(port, () => {
    connection();
    console.log(`Connected to Backend at http://127.0.0.1:${port}`);
})

app.use((err, req, res, next) => {

    const errStatus = err.status || 500;
    const errMessage = err.message || 'Something went WRONG';
    const errStack = err.stack;

    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: errStack
    })

})

