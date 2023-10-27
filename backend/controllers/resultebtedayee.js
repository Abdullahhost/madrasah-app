
import fs from 'fs'

import EbtedayeeResult from "../modal/resultebtedayee.js"

export const createEbtedayeeResult = async (req, res, next) => {
  try {

    const { title } = req.body

    const pdf = new EbtedayeeResult({ title, pdfFile: req.file.filename });
    await pdf.save();

    res.status(201).json({ message: 'Result uploaded successfully' });
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

    const findDeleteInformation = await EbtedayeeResult.findById(req.params.id)
    const deletePhotoAlso = `assets/images/${findDeleteInformation.pdfFile}`

    if(fs.existsSync(deletePhotoAlso)){
        fs.unlinkSync(deletePhotoAlso);
    }

    const deleteEbtedayeeResult = await EbtedayeeResult.findByIdAndDelete(req.params.id);
    res.status(200).json('EbtedayeeResult Deleted Successfully!')
} catch (err) {
    next(err)
}
}




