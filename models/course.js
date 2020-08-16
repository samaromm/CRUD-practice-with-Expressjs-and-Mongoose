const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description : {
        type:String,
        required: true
    },
    create_date : {
        type:Date,
        default: Date.now
    },
    modify_date : {
        type:Date,
        default: Date.now
    },

})

module.exports = mongoose.model('Courses', courseSchema)