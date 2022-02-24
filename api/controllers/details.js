const Member = require('../models/member');

exports.getMemberDetails = async (req, res, next) => {
    const id = req.params.memberId;
    try {
        const doc = await Member.findById(id)
                                .select('firstName lastName email password contactNumber')
                                .exec();
        if (doc) {
            console.log('From db', doc);
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided id'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err});
    }
}