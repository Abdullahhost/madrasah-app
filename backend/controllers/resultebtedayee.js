

import EbtedayeeResult from "../modal/resultebtedayee.js"

import fs from  'fs-extra'

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: 'dyuspxi9k',
    api_key: '318972814933523',
    api_secret : '7cwUhBbqmUeYilRbsRxcIi0ykws'
})


export const createEbtedayeeResult = async (req, res, next) => {
  try {

    const { title } = req.body

    const upload = await cloudinary.v2.uploader.upload(req.file.path)
    const pdf = new EbtedayeeResult({ title, public_id: upload.public_id ,  pdfFile: upload.secure_url });
    
    await pdf.save();

    res.status(201).json({ message: 'Result uploaded successfully' });

    await fs.unlink(req.file.path)

  } catch (error) {
    next(error);

  }
}

export const getPdfFile = async (req, res, next) => {
  try {
    const pdfs = await EbtedayeeResult.find();

    const test = pdfs.filter((el) => {
     return  el.title === req.params.title
    })
    res.json(test);
  } catch (error) {
    next(error);
  }
}

export const deleteEbtedayeeResult = async ( req, res, next ) => {
  try {
 await EbtedayeeResult.findById(req.params.id).then((data) => {

            const deleteImage = data.public_id
            cloudinary.v2.uploader.destroy(deleteImage)

        }).finally(async () => {
            const deleteSecretory = await EbtedayeeResult.findByIdAndDelete(req.params.id);
            res.status(200).json('Result Deleted Successfully')

        })
        
} catch (err) {
    next(err)
}
}




