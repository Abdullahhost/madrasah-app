
import Worker from "../modal/worker.js";

import fs from  'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})



export const createWorker = async (req, res, next) => {

    try {

        const { workerName, designation, educationQualification, mobileNumber, emailAddress, profile } = req.body
       
        const upload = await cloudinary.v2.uploader.upload(req.file.path)

        const newWorker = new Worker({
           workerName,
           designation,
           educationQualification,
           mobileNumber,
           emailAddress, 
           profile: upload.secure_url,
           public_id: upload.public_id
        })

        await newWorker.save();

        res.status(201).json({
            workerName,
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

export const updateWorker = async (req, res, next) => {
    try{
        const { workerName, designation, emailAddress, educationQualification, mobileNumber} = req.body 
        
        const findDeleteInformation = await Worker.findById(req.params.id)
        
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
        if (workerName) {
            update.workerName = workerName;
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
        
        
        const updateWorker = await Worker.findByIdAndUpdate(req.params.id, {$set : update}, {new: true})
        
        res.status(201).json(updateWorker)

    }catch(err){
        next(err)
    }
}   

export const getWorker = async (req, res, next) => {
    try {
        const getAllWorker = await Worker.find();
        res.status(200).json(getAllWorker);

    } catch (err) {
        next(err)
    }
}

export const deleteWorker = async (req, res, next) => {
    try {


        await Worker.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await Worker.findByIdAndDelete(req.params.id);
            res.status(200).json('Secretory Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}