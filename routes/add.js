const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//POST endpoint /add

router.post('/add', async (req, res) =>{
    const task = new Task({
        TaskName: req.body.TaskName,
        TaskDescription: req.body.TaskDescription,
        creator: req.body.creator,
        duration: req.body.duration,
    });
    try
    {
        const savedTask = await task.save();
        res.json(savedTask);
    }
    catch(err)
    {
        res.json({ message: err });
    }
});

//GET endpoint /list

router.get('/list', async(req, res) =>{
    try
    {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch(err)
    {
        res.json({ message: err });
    }
});


module.exports = router;