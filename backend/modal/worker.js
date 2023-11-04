


import mongoose from 'mongoose'

const workerSchema  = new mongoose.Schema({
     workerName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    educationQualification: {
        type: String
    },
    mobileNumber: {
        type: Number,
        requirde: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        default: false
    }
    
}, { timestamps: true })

export default mongoose.model('Worker', workerSchema);