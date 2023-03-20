const Alumni = require('../models/Alumni');
const createAlumni = async (req, res) => {
    try {
        const {
            name,
            email,
            passingYear,
            branch,
            currentCompany,
            positionInCurrentCompany,
            socials,
        } = req.body;

        if (
            name === '' ||
            email === '' ||
            passingYear === '' ||
            branch === ''
        ) {
            return res.status(400).json('Invalid data');
        }

        const newAlumni = new Alumni({
            name,
            email,
            passingYear,
            branch,
            ...(currentCompany && { currentCompany }),
            ...(positionInCurrentCompany && { positionInCurrentCompany }),
            ...(socials && { socials }),
        });

        await newAlumni.save();

        res.status(201).json('Alumni created');
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createAlumni,
};
