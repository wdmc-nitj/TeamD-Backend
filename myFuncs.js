// Description: contains functions that are used in multiple files

const sendError = (res, err) => {
    // used to send error to client and console
    console.log(err);
    res.status(400).json(String(err));
};

const validateID = (id) => {
    // used to validate id
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        // return the error as string to be used in catch
        return Promise.reject('Invalid ID, must be 12 bytes or a string of 24 hex characters');
    }
    return Promise.resolve();
};

// exports these functions to be used in other files
module.exports = {
    sendError,
    validateID
};