
import Secretory from "../modal/secretory.js";

import fs from  'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})

export const createSecretory = async (req, res, next) => {

    try {

        const { secretoryName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        const upload = await cloudinary.v2.uploader.upload(req.file.path)
        const newSecretory = new Secretory({
           secretoryName,
           designation,
           educationQualification,
           mobileNumber,
           emailAddress,
           profile: upload.url,
           public_id: upload.public_id 
        })

        await newSecretory.save();

        res.status(201).json({
            secretoryName,
            designation,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: upload.secure_url, 
            public_id: upload.public_id
        })

        await fs.unlink(req.file.path)

    } catch (err) {
        next(err)
    }
}

export const updateSecretory = async (req, res, next) => {
    try{

        const { secretoryName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        
        const findDeleteInformation = await Secretory.findById(req.params.id)
        
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

        await Secretory.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await Secretory.findByIdAndDelete(req.params.id);
            res.status(200).json('Secretory Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}