

import teacher from "../modal/teacher.js";

import fs from  'fs-extra' 

import cloudinary from 'cloudinary'


cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})

export const createteacher = async (req, res, next) => {

    try {
        const {teacherName, designation, depertment, educationQualification, mobileNumber, emailAddress } = req.body
        
        const upload = await cloudinary.v2.uploader.upload(req.file.path)
       
        const newteacher = new teacher({
            teacherName,
            designation,
            depertment,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: upload.url,
            public_id: upload.public_id 

        })

        await newteacher.save();

        res.status(201).json({
            teacherName,
            designation,
            depertment,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: upload.url,
            public_id: upload.public_id 
        })

        // await fs.unlink(req.file.path)
    } catch (err) {
        next(err)
    }
}

export const updateTeacher = async (req, res, next) => {
    try {

        const {teacherName, designation, depertment, educationQualification, mobileNumber, emailAddress } = req.body;


        const findDeleteInformation = await teacher.findById(req.params.id)
        
        const update = {};

        
        if (req.file) {
            const imageId = findDeleteInformation.public_id

            if(imageId) {
                await cloudinary.v2.uploader.destroy(imageId) 
            }
            const newImage = await cloudinary.v2.uploader.upload(req.file.path)
        
            update.profile = newImage.secure_url,
            update.public_id = newImage.public_id

            await fs.unlink(req.file.path)
        }
        if (teacherName) {
            update.teacherName = teacherName;
        }
        if (designation) {
            update.designation = designation;
        }
        if (depertment) {
            update.depertment = depertment
        }
        if (educationQualification) {
            update.educationQualification = educationQualification
        }
        if (mobileNumber) {
            update.mobileNumber = mobileNumber
        }
        if (emailAddress) {
            update.emailAddress = emailAddress
        }

        const updateTeacher = await teacher.findByIdAndUpdate(req.params.id, { $set: update }, { new: true })

        res.status(201).json(updateTeacher)

    } catch (err) {
        next(err)
    }
}

export const getTeacher = async (req, res, next) => {
    try {
        const getAllTeacher = await teacher.find();
        res.status(200).json(getAllTeacher);

    } catch (err) {
        next(err)
    }
}

export const deleteTeacher = async (req, res, next) => {
    try {

        await teacher.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await teacher.findByIdAndDelete(req.params.id);
            res.status(200).json('Teacher Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}
export const countBYTeacher = async (req, res, next) => {
    try {
        const totalTeacher = await teacher.countDocuments()
        res.status(200).json(totalTeacher)
    } catch (err) {
        next(err)
    }
}
