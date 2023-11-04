
import mongoose from 'mongoose'

const secretorySchema  = new mongoose.Schema({
     secretoryName: {
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

export default mongoose.model('Secretory', secretorySchema);