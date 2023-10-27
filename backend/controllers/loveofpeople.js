


import fs from 'fs' 



import People from "../modal/loveofpeople.js";

export const createPeople = async (req, res, next) => {

    try {

        const {peopleName, mobileNumber, peopleAddress, emailAddress } = req.body 

        const newPeople = new People({
           peopleName,
           mobileNumber,
           emailAddress, 
           peopleAddress,
           profile: req.file.filename
        })

        await newPeople.save();

        res.status(201).json({newPeople})
    } catch (err) {
        next(err)
    }
}

export const updatePeople = async (req, res, next) => {
    try{

        const { peopleName, emailAddress, mobileNumber, peopleAddress} = req.body 
        
        const update = {};
        if (req.file) {


            const findDeleteInformation = await People.findById(req.params.id)
            const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
            if(fs.existsSync(deletePhotoAlso)){
                fs.unlinkSync(deletePhotoAlso);
            }

            const getprofilepath = req.file.path
            const parts = getprofilepath.split("\\");
            const imageName = parts[parts.length - 1];
            update.profile = imageName 
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

        const findDeleteInformation = await People.findById(req.params.id)
        const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

        if(fs.existsSync(deletePhotoAlso)){
            fs.unlinkSync(deletePhotoAlso);
        }

        const deletePeople = await People.findByIdAndDelete(req.params.id);
        res.status(200).json('People Deleted Successfully!')
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