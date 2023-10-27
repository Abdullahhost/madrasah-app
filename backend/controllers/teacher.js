

import fs from 'fs' 

import teacher from "../modal/teacher.js";

export const createteacher = async (req, res, next) => {

    try {
        const {teacherName, designation, depertment, educationQualification, mobileNumber, emailAddress } = req.body
        const newteacher = new teacher({
            teacherName,
            designation,
            depertment,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: req.file.filename

        })

        await newteacher.save();

        res.status(201).json({
            teacherName,
            designation,
            depertment,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: req.file.filename
        })
    } catch (err) {
        next(err)
    }
}

export const updateTeacher = async (req, res, next) => {
    try {

        const {teacherName, designation, depertment, educationQualification, mobileNumber, emailAddress } = req.body;


        const update = {};
        if (req.file) {

            const findDeleteInformation = await teacher.findById(req.params.id)

            const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
            if(fs.existsSync(deletePhotoAlso)){
                fs.unlinkSync(deletePhotoAlso);
            }


            const getprofilepath = req.file.path
            const parts = getprofilepath.split("\\");
            const imageName = parts[parts.length - 1];
            update.profile = imageName 
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

 
        const findDeleteInformation = await teacher.findById(req.params.id)

        const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

        if(fs.existsSync(deletePhotoAlso)){
            fs.unlinkSync(deletePhotoAlso);
        }

        const deleteTeacher = await teacher.findByIdAndDelete(req.params.id);
        res.status(200).json('Teacher Deleted Successfully!')
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