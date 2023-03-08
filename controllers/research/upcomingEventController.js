const { sendError, validateID } = require('../../utils');
const UpcomingEvent = require('../../models/research/upcomingEvents');

const getAllUpcomingEvents = (req, res) => {
    // filter by req.query.visible if it is not all
    let filter = {};
    
    //filter by req.query
    if(req.query.category !=='all'){
        filter.category = req.query.category;
    }
    if (req.query.visible === 'visible') {
        filter.visible = true;
    } else if (req.query.visible === 'hidden') {
        filter.visible = false;
    } else if (req.query.visible !== 'all') {
        return sendError(res, `Invalid value for visible: ${req.query.visible}`);
    }

    UpcomingEvent
        .find(filter)
        .sort({ updatedAt: -1 })
        .then((upcomingEvents) => res.json(upcomingEvents))
        .catch((err) => sendError(res, err));
};

const createUpcomingEvent = (req, res) => {
    const newUpcomingEvent = new UpcomingEvent(req.body);

    newUpcomingEvent.save()
        .then((createdUpcomingEvent) => res.status(201).json(createdUpcomingEvent))
        .catch((err) => sendError(res, err));
};

const getUpcomingEventByID = (req, res) => {
    const id = req.query.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    UpcomingEvent
        .findById(id)
        .then((upcomingEvent) => {
            if (!upcomingEvent) {
                return sendError(res, `UpcomingEvent not found with ID: ${id}`);
            }

            res.json(upcomingEvent);
        })
        .catch((err) => sendError(res, err));
};

const updateUpcomingEventByID = (req, res) => {
    const id = req.query.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    req.body.updatedAt = Date.now();
    UpcomingEvent
        .findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedUpcomingEvent) => {
            if (!updatedUpcomingEvent) {
                return sendError(res, `UpcomingEvent not found with ID: ${id}`);
            }

            res.json(updatedUpcomingEvent);
        })
        .catch((err) => sendError(res, err));
};

const hideUpcomingEventByID = (req, res) => {
    const id = req.query.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    UpcomingEvent
        .findByIdAndUpdate(id, { visible: false }, { new: true })
        .then((updatedUpcomingEvent) => {
            if (!updatedUpcomingEvent) {
                return sendError(res, `UpcomingEvent not found with ID: ${id}`);
            }

            res.json(updatedUpcomingEvent);
        })
        .catch((err) => sendError(res, err));
};

const deleteUpcomingEventByID = (req, res) => {
    const id = req.query.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    UpcomingEvent
        .findByIdAndDelete(id)
        .then((deletedUpcomingEvent) => {
            if (!deletedUpcomingEvent) {
                return sendError(res, `UpcomingEvent not found with ID: ${id}`);
            }

            res.json(deletedUpcomingEvent);
        })
        .catch((err) => sendError(res, err));
};

// new function which will trigger the organized property

const isEventOrganized = (req,res) => {
    const id = req.query.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }
     const current_date = new Date();
     const Event_date = req.query.dateOfEvent;
     if(current_date > Event_date){
        req.query.organized = true;
     }

};
module.exports = {
    getAllUpcomingEvents,
    createUpcomingEvent,
    getUpcomingEventByID,
    updateUpcomingEventByID,
    hideUpcomingEventByID,
    deleteUpcomingEventByID,
    isEventOrganized
};