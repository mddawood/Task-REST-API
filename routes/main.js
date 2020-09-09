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

// GET endpoint /list
router.get("/list", async (req, res) => {
    try 
    {
      const tasks = await Task.find({});
      let temptasks = tasks;
      tasks.map((t, index) => {
        let time = new Date().getTime();
        if (t.CreatedAt.getTime() + t.duration * 60000 < time)
        {
          temptasks.splice(index, 1);
          console.log("happends");
        }
      });
      console.log(temptasks);
      res.json(temptasks);
    }
    catch (err)
    {
      res.json({ message: err });
    }
  });


module.exports = router;