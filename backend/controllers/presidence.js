
import Presidence from "../modal/precidence.js";


import fs from  'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})


export const createPresidence = async (req, res, next) => {

    try {
        const { presidenceName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        const upload = await cloudinary.v2.uploader.upload(req.file.path)
        const newPresidence = new Presidence({
            presidenceName,
            designation,
            educationQualification,
            mobileNumber,
            emailAddress,
            profile: upload.secure_url,
            public_id: upload.public_id

        })

        await newPresidence.save();

        res.status(201).json({
            presidenceName,
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

export const updatePresidence = async (req, res, next) => {
    try {
        const { presidenceName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        
        const findDeleteInformation = await Presidence.findById(req.params.id)
        
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

        await Presidence.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await Presidence.findByIdAndDelete(req.params.id);
            res.status(200).json('Secretory Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}