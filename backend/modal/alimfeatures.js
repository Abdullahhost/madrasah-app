

import mongoose from "mongoose";

const alimFeatures = new mongoose.Schema({
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
    whatWeHave: {
        type: Array,
        required: true
    },
    profile: {  
        type: String,
        required: true
    }
})

export default mongoose.model("AlimFeatures", alimFeatures)