

import alimfeatures from '../modal/alimfeatures.js';

import fs from 'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret: '7cwUhBbqmUeYilRbsRxcIi0ykws'
})




export const createalimfeatures = async (req, res, next) => {

    try {
        const { numberOfTeacher, description, established, title } = req.body

        const upload = await cloudinary.v2.uploader.upload(req.file.path)

        const newAlimfeatures = new alimfeatures({
            title,
            description,
            numberOfTeacher,
            established,
            profile: upload.url,
            public_id: upload.public_id

        })


        await newAlimfeatures.save();

        res.status(201).json({ newAlimfeatures })


        await fs.unlink(req.file.path)

    } catch (err) {
        next(err)
    }
}

export const updatealimfeatures = async (req, res, next) => {
    try {
        const { description, numberOfTeacher, established } = req.body;
        const findDeleteInformation = await alimfeatures.findById(req.params.id)
        
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
        if (description) {
            update.description = description;
        }
        if (numberOfTeacher) {
            update.numberOfTeacher = numberOfTeacher
        }
        if (established) {
            update.established = established
        }

        const updateAliimFeatures = await alimfeatures.findByIdAndUpdate(req.params.id, {$set : update}, {new: true})
        
        res.status(201).json(updateAliimFeatures)

    } catch (err) {
        next(err);
    }
};

export const getalimfeatures = async (req, res, next) => {
    try {
        const getAllalimfeatures = await alimfeatures.find();

        const filterByTitle = getAllalimfeatures.filter((el) => {
            return  el.title === req.params.title
           })

        res.status(200).json(filterByTitle);

    } catch (err) {
        next(err)
    }
}

export const deletealimfeatures = async (req, res, next) => {
    try {

        await alimfeatures.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await alimfeatures.findByIdAndDelete(req.params.id);
            res.status(200).json('ALim Features Deleted Successfully!')

        })
    } catch (err) {
        next(err)
    }
}