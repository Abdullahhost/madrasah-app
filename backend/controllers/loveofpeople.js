
import People from "../modal/loveofpeople.js";

import fs from  'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})



export const createPeople = async (req, res, next) => {

    try {

        const {peopleName, mobileNumber, peopleAddress, emailAddress } = req.body 
        
        const upload = await cloudinary.v2.uploader.upload(req.file.path)

        const newPeople = new People({
           peopleName,
           mobileNumber,
           emailAddress, 
           peopleAddress,
           profile: upload.url,
           public_id: upload.public_id 
        })

        await newPeople.save();

        res.status(201).json({newPeople})


        await fs.unlink(req.file.path)


    } catch (err) {
        next(err)
    }
}

export const updatePeople = async (req, res, next) => {
    try{

        const { peopleName, emailAddress, mobileNumber, peopleAddress} = req.body 
        
      const findDeleteInformation = await People.findById(req.params.id)
        
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
        if (peopleName) {
            update.peopleName = peopleName;
        }
        if (peopleAddress) {
            update.peopleAddress = peopleAddress
        }
        if (mobileNumber) {
            update.mobileNumber = mobileNumber
        }
        if (emailAddress) {
            update.emailAddress = emailAddress
        }




        const updatePeople = await People.findByIdAndUpdate(req.params.id, {$set : update}, {new: true})
        
        res.status(201).json(updatePeople)

    }catch(err){
        next(err)
    }
}   

export const getPeople = async (req, res, next) => {
    try {
        const getAllPeople = await People.find();
        res.status(200).json(getAllPeople);

    } catch (err) {
        next(err)
    }
}

export const deletePeople = async (req, res, next) => {
    try {

        await People.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await People.findByIdAndDelete(req.params.id);
            res.status(200).json('Secretory Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}

export const countBYPeople = async (req, res, next) => {
    try{
        const totalPeople = await People.countDocuments()
        res.status(200).json(totalPeople)
    }catch(err){
        next(err)
    }
}