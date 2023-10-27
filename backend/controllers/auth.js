
import bcrypt from 'bcryptjs'
import User from '../modal/auth.js'
import { createError } from '../utils/error.js';
import JWT from 'jsonwebtoken';



export const newUser = async (req, res, next) => {
    try {
        const slat = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, slat)

        if (req.body.userName && req.body.email && hash) {
            const newUser = new User({
                userName: req.body.userName,
                password: hash,
                email: req.body.email
            })
            await newUser.save();

            const isUserCorrect = await User.findOne({ userName: req.body.userName });
            const userInfo = {
                id: isUserCorrect._id, 
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
                isAdmin: isUserCorrect.isAdmin
            }
            const { password, ...otherDetails } = userInfo;
            const token = JWT.sign({ id: userInfo.id }, process.env.JWT);

            res.cookie("authToken", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 , sameSite: 'lax', path: '/'})
            res.status(200).json(otherDetails)
            
            // 7 days
        }
        else if(!req.body.userName) next(createError(404, 'User Name are required'))
        else if(!hash) next(createError(404, 'Password are required'))
        else if(!req.body.email) next(createError(404, 'Email are required'))
    }
    catch (err) {
        next(createError(404, "All Fields are Required"))
    }
}

export const login = async (req, res, next) => {
    try {
        const isUserCorrect = await User.findOne({ userName: req.body.userName });
        if (!isUserCorrect) return next(createError(401, "User Not Found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, isUserCorrect.password);
        if (!isPasswordCorrect) return next(createError(401, "Password is not Correct!"));

        const { password, ...otherDetails } = isUserCorrect._doc

        const token = JWT.sign({ id: isUserCorrect._id, isAdmin: isUserCorrect.isAdmin }, process.env.JWT, {
            expiresIn: '1hr'
        });


        
      
        res.cookie("authToken", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

        res.status(200).json({...otherDetails})
    } catch (err) {
        next(err)
    }
} 