const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    
    student_id: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    courser_code: {
        type: String,
        required: true,
        min: 6, 
        max: 255
    },
    unit_timestamp: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Registration', registrationSchema);