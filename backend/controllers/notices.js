import notices from "../modal/notices.js";

export const createNotices = async (req, res, next) => {

    try {

        const newNotices = new notices({
            noticeTitle: req.body.noticeTitle,
            noticeDetails: req.body.noticeDetails
        })

        await newNotices.save();

        res.status(201).json({
            noticeTitle: req.body.noticeTitle,
            noticeDetails: req.body.noticeDetails,
        })
    } catch (err) {
        next(err)
    }
}

export const updateNotice = async (req, res, next) => {
    try{

        const updateNotice = await notices.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true})
        res.status(201).json(updateNotice)

    }catch(err){
        next(err)
    }
}   

export const getNotice = async (req, res, next) => {
    try {
        const getAllNotice = await notices.find();
        res.status(200).json(getAllNotice);

    } catch (err) {
        next(err)
    }
}

export const deleteNotice = async (req, res, next) => {
    try {
        const deleteNotice = await notices.findByIdAndDelete(req.params.id);
        res.status(200).json('Notice Deleted Successfully!')
    } catch (err) {
        next(err)
    }
}
export const countBYNotice = async (req, res, next) => {
    try{
        const totalNotice = await notices.countDocuments()
        res.status(200).json(totalNotice)
    }catch(err){
        next(err)
    }
}