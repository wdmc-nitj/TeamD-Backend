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

const deleteAlumni = async (req, res) => {
    try {
        const { alumniId } = req.params;

        const alumni = await Alumni.findById(alumniId);

        res.json(alumni);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const searchAlumni = async (req, res) => {
    try {
        const { q, v } = req.query;
        let alumni;
        switch (q) {
            case 'year':
                alumni = await Alumni.find({
                    passingYear: v,
                });
                break;
            case 'name':
                alumni = await Alumni.find({ name: { $regex: v } });
                break;
            case 'email':
                alumni = await Alumni.find({ email: v });
                break;
            default:
                break;
        }

        res.json(alumni);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createAlumni,
    deleteAlumni,
    searchAlumni,
};
