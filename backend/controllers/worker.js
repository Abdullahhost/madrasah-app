

import fs from 'fs' 

import Worker from "../modal/worker.js";

export const createWorker = async (req, res, next) => {

    try {

        const { workerName, designation, educationQualification, mobileNumber, emailAddress, profile } = req.body

        const newWorker = new Worker({
           workerName,
           designation,
           educationQualification,
           mobileNumber,
           emailAddress, 
           profile: req.file.filename

        })

        await newWorker.save();

        res.status(201).json({
            workerName,
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

export const updateWorker = async (req, res, next) => {
    try{
        const { workerName, designation, emailAddress, educationQualification, mobileNumber} = req.body 
        
        const update = {};
        if (req.file) {

            const findDeleteInformation = await Worker.findById(req.params.id)

            const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
            if(fs.existsSync(deletePhotoAlso)){
                fs.unlinkSync(deletePhotoAlso);
            }



            const getprofilepath = req.file.path
            const parts = getprofilepath.split("\\");
            const imageName = parts[parts.length - 1];
            update.profile = imageName 
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


        const findDeleteInformation = await Worker.findById(req.params.id)
        const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

        if(fs.existsSync(deletePhotoAlso)){
            fs.unlinkSync(deletePhotoAlso);
        }
        
        else{
            const deleteWorker = await Worker.findByIdAndDelete(req.params.id);
            res.status(200).json('Worker Deleted Successfully!')
        }
    } catch (err) {
        next(err)
    }
}