const mongoose = require('mongoose');
const validator = require('validator');

const NurseSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'This field must be a valid email']
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'pending'
    },
    // avatar: {
    //     type: String,
    //     default: 'pics/default.png'
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    }

});

module.exports = mongoose.model('Nurse', NurseSchema);