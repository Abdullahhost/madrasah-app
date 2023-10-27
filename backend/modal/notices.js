
import mongoose from "mongoose";

const noticesSchema = new mongoose.Schema({
    noticeTitle: {
        type: String,
        required : true,
    },
    noticeDetails : {
        type: String,
        required: true
    }
},{timestamps : true})

export default mongoose.model("Notices", noticesSchema);