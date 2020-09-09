const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    TaskName: {
        required:true,
        type: String,
    },
    TaskDescription: {
        type: String,
    },
    creator: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    CreatedAt:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);