

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required : true
    },
    classNo:{
        type: Number,
        required: true
    },
    classRoll: {
        type: Number,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

export default mongoose.model("Student", studentSchema)