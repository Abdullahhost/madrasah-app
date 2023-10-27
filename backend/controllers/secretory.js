

import fs from 'fs' 

import Secretory from "../modal/secretory.js";

export const createSecretory = async (req, res, next) => {

    try {

        const { secretoryName, designation, educationQualification, mobileNumber, emailAddress } = req.body

        const newSecretory = new Secretory({
           secretoryName,
           designation,
           educationQualification,
           mobileNumber,
           emailAddress,
           profile: req.file.filename

        })

        await newSecretory.save();

        res.status(201).json({
            secretoryName,
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

export const updateSecretory = async (req, res, next) => {
    try{

        const { secretoryName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        
        const update = {};
        if (req.file) {


            const findDeleteInformation = await Secretory.findById(req.params.id)

            const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
            if(fs.existsSync(deletePhotoAlso)){
                fs.unlinkSync(deletePhotoAlso);
            }


            const getprofilepath = req.file.path
            const parts = getprofilepath.split("\\");
            const imageName = parts[parts.length - 1];
            update.profile = imageName 
        }
        if (secretoryName) {
            update.secretoryName = secretoryName;
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

        const updateSecretory = await Secretory.findByIdAndUpdate(req.params.id, {$set : update}, {new: true})
        
        res.status(201).json(updateSecretory)

    }catch(err){
        next(err)
    }
}   

export const getSecretory = async (req, res, next) => {
    try {
        const getAllSecretory = await Secretory.find();
        res.status(200).json(getAllSecretory);

    } catch (err) {
        next(err)
    }
}

export const deleteSecretory = async (req, res, next) => {
    try {

        const findDeleteInformation = await Secretory.findById(req.params.id)

        const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

        if(fs.existsSync(deletePhotoAlso)){
            fs.unlinkSync(deletePhotoAlso);
        }


        const deleteSecretory = await Secretory.findByIdAndDelete(req.params.id);
        res.status(200).json('Secretory Deleted Successfully!')
    } catch (err) {
        next(err)
    }
}