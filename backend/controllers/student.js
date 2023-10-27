





import Student from "../modal/students.js";

export const createStudent = async (req, res, next) => {

    try {

        const newStudent = new Student({
           studentName: req.body.studentName,
           classNo: req.body.classNo,
           classRoll: req.body.classRoll,
           fathersName: req.body.fathersName,
           mothersName: req.body.mothersName,
           address: req.body.address

        })

        await newStudent.save();

        res.status(201).json({
            studentName: req.body.studentName,
            classNo: req.body.classNo,
            classRoll: req.body.classRoll,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            address: req.body.address
        })
    } catch (err) {
        next(err)
    }
}

export const updateStudent = async (req, res, next) => {
    try{

        const updateStudent = await Student.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true})
        
        res.status(201).json(updateStudent)

    }catch(err){
        next(err)
    }
}   

export const getStudent = async (req, res, next) => {
    try {
        const getAllStudent = await Student.find();
        res.status(200).json(getAllStudent);

    } catch (err) {
        next(err)
    }
}

export const deleteStudent = async (req, res, next) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json('Student Deleted Successfully!')
    } catch (err) {
        next(err)
    }
}

export const countBYStudent = async (req, res, next) => {
    try{
        const totalstudent = await Student.countDocuments()
        res.status(200).json(totalstudent)
    }catch(err){
        next(err)
    }
}