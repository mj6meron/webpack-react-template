const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    
    course_code: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    course_name: {
        type: String,
        required: true,
        min: 6, 
        max: 255
    },
    course_description: {
        type: String,
        required: false,
        min: 10, 
        max:1024
    }
})

module.exports = mongoose.model('Course', courseSchema);