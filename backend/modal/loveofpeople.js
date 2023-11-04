

import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
    peopleName: {
        type: String,
        required : true
    },
    mobileNumber:{
        type: Number,
        default: 880
    },
    emailAddress: {
        type: String,
        
    },
    peopleAddress: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        default: false
    }
})

export default mongoose.model("People", peopleSchema)