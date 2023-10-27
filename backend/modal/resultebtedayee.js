
import mongoose from 'mongoose'

const resultebtedayee =  new mongoose.Schema({
   title: {
      type: String, 
      required: true
   },
   pdfFile: {
      type: String,
      required: true
   }
}, {timestamps: true})

export default mongoose.model("EbtedayeeResult", resultebtedayee)
