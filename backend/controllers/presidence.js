
import fs from 'fs' 

import Presidence from "../modal/precidence.js";

export const createPresidence = async (req, res, next) => {

    try {
        const { presidenceName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        const newPresidence = new Presidence({
            presidenceName,
            designation,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: req.file.filename

        })

        await newPresidence.save();

        res.status(201).json({
            presidenceName,
            designation,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: req.file.filename
        })
    } catch (err) {
        next(err)
    }
}

export const updatePresidence = async (req, res, next) => {
    try {
        const { presidenceName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        
        const update = {};
        if (req.file) {


            const findDeleteInformation = await Presidence.findById(req.params.id)

            const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
            if(fs.existsSync(deletePhotoAlso)){
                fs.unlinkSync(deletePhotoAlso);
            }
    

            const getprofilepath = req.file.path
            const parts = getprofilepath.split("\\");
            const imageName = parts[parts.length - 1];
            update.profile = imageName 
        }
        if (presidenceName) {
            update.presidenceName = presidenceName;
        }
        if (designation) {
            update.designation = designation;
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
        

        const updatePresidence = await Presidence.findByIdAndUpdate(req.params.id, { $set: update }, { new: true })

        res.status(201).json(updatePresidence)

    } catch (err) {
        next(err)
    }
}

export const getPresidence = async (req, res, next) => {
    try {
        const getAllPresidence = await Presidence.find();
        res.status(200).json(getAllPresidence);

    } catch (err) {
        next(err)
    }
}

export const deletePresidence = async (req, res, next) => {
    try {

        const findDeleteInformation = await Presidence.findById(req.params.id)

        const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

        if(fs.existsSync(deletePhotoAlso)){
            fs.unlinkSync(deletePhotoAlso);
        }




        const deletePresidence = await Presidence.findByIdAndDelete(req.params.id);
        res.status(200).json('Presidence Deleted Successfully!')
    } catch (err) {
        next(err)
    }
}