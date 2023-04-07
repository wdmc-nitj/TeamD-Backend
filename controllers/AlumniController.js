const Alumni = require('../models/Alumni');
const AlumniEvents = require('../models/AlumniEvents');
const AlumniGivingBack = require('../models/AlumniGivingBack');
const AlumniLandingPage = require('../models/AlumniLandingPage');
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

const landingPageData = async (req, res) => {
    try {
        let landingPageData = await AlumniLandingPage.find({});

        res.json(landingPageData[0]);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const editLandingPageData = async (req, res) => {
    try {
        const landingPageData = req.body;

        let landingPageDataInDB = await AlumniLandingPage.findOne({});

        landingPageDataInDB = landingPageDataInDB._doc;

        landingPageDataInDB = {
            ...landingPageDataInDB,
            ...landingPageData,
        };

        landingPageDataInDB = await AlumniLandingPage.findOneAndUpdate(
            { _id: landingPageDataInDB._id },
            { $set: landingPageDataInDB },
            { new: true }
        );

        res.json('Updated successfully');
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const recentEvents = (req, res) => {
    try {
        const recentEvents = AlumniEvents.find({})
            .sort({ createdAt: -1 })
            .limit(3);

        res.json(recentEvents);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const editRecentEvents = async (req, res) => {
    try {
        const recentEvents = req.body;

        let recentEventsInDB = await AlumniEvents.findOne({});
        recentEventsInDB = recentEventsInDB._doc;

        recentEventsInDB = {
            ...recentEventsInDB,
            ...recentEvents,
        };

        recentEventsInDB = await AlumniEvents.findOneAndUpdate(
            { _id: recentEventsInDB._id },
            { $set: recentEventsInDB },
            { new: true }
        );

        res.json('Updated successfully');
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const givingBack = async (req, res) => {
    try {
        const givingBackDetails = await AlumniGivingBack.findOne({});

        res.json(givingBackDetails);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

const editGivingBack = async (req, res) => {
    try {
        const givingBackChanges = req.body;

        let givingBackDetails = await AlumniGivingBack.findOne({});

        givingBackDetails = givingBackDetails._doc;

        givingBackDetails = {
            ...givingBackDetails,
            ...givingBackChanges,
        };

        givingBackDetails = await AlumniGivingBack.findOneAndUpdate(
            { _id: givingBackDetails._id },
            { $set: givingBackDetails },
            { new: true }
        );

        res.json('Updated giving back details');
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};

module.exports = {
    createAlumni,
    deleteAlumni,
    searchAlumni,
    landingPageData,
    recentEvents,
    givingBack,
    editGivingBack,
    editRecentEvents,
    editLandingPageData,
};
