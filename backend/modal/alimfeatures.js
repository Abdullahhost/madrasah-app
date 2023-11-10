

import mongoose from "mongoose";

const alimFeatures = new mongoose.Schema({
    title: {
        type : String,
        default : false
    },
    description: {
        type: String,
        required : true
    },
    numberOfTeacher:{
        type: Number,
        required: true
    },
    established: {
        type: String,  
    },
    profile: {  
        type: String,
        required: true
    },
    public_id: {
        type : String,
        default: false
    }

})

export default mongoose.model("AlimFeatures", alimFeatures)