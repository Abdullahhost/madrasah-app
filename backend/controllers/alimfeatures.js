


// import fs from 'fs' 

import alimfeatures from '../modal/alimfeatures.js';

export const createalimfeatures = async (req, res, next) => {

    try {
        const { item1, item2, item3, numberOfTeacher, description, established } = req.body

            const newAlimfeatures = new alimfeatures({
                description,
                numberOfTeacher,
                established,
                profile: req.file.filename,
                whatWeHave : [item1, item2, item3]
                
            })
            
            
            await newAlimfeatures.save();

        res.status(201).json({
            description,
            numberOfTeacher,
            established,
            profile: req.file.filename,
            whatWeHave : [item1, item2, item3]
        })
    } catch (err) {
        next(err)
    }
}

// export const updatealimfeatures = async (req, res, next) => {
//     try {
//         const { alimfeaturesName, designation, educationQualification, mobileNumber, emailAddress } = req.body
        
//         const update = {};
//         if (req.file) {


//             const findDeleteInformation = await alimfeatures.findById(req.params.id)

//             const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`
    
//             if(fs.existsSync(deletePhotoAlso)){
//                 fs.unlinkSync(deletePhotoAlso);
//             }
    

//             const getprofilepath = req.file.path
//             const parts = getprofilepath.split("\\");
//             const imageName = parts[parts.length - 1];
//             update.profile = imageName 
//         }
//         if (alimfeaturesName) {
//             update.alimfeaturesName = alimfeaturesName;
//         }
//         if (designation) {
//             update.designation = designation;
//         }
//         if (educationQualification) {
//             update.educationQualification = educationQualification
//         }
//         if (mobileNumber) {
//             update.mobileNumber = mobileNumber
//         }
//         if (emailAddress) {
//             update.emailAddress = emailAddress
//         }
        

//         const updatealimfeatures = await alimfeatures.findByIdAndUpdate(req.params.id, { $set: update }, { new: true })

//         res.status(201).json(updatealimfeatures)

//     } catch (err) {
//         next(err)
//     }
// }

// export const getalimfeatures = async (req, res, next) => {
//     try {
//         const getAllalimfeatures = await alimfeatures.find();
//         res.status(200).json(getAllalimfeatures);

//     } catch (err) {
//         next(err)
//     }
// }

// export const deletealimfeatures = async (req, res, next) => {
//     try {

//         const findDeleteInformation = await alimfeatures.findById(req.params.id)

//         const deletePhotoAlso = `assets/images/${findDeleteInformation.profile}`

//         if(fs.existsSync(deletePhotoAlso)){
//             fs.unlinkSync(deletePhotoAlso);
//         }




//         const deletealimfeatures = await alimfeatures.findByIdAndDelete(req.params.id);
//         res.status(200).json('alimfeatures Deleted Successfully!')
//     } catch (err) {
//         next(err)
//     }
// }