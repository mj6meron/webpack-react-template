const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    unit_id: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    fullname: {
        type: String,
        required: true,
        min: 6, 
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 10, 
        max:13
    },
    password: {
        type: String,
        required: false,
        min: 6,
        max: 1024
    }
});

module.exports = mongoose.model('Student', studentSchema);