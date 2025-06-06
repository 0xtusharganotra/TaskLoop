const {TaskModel} = require('../db/db');
const {Userauth} = require('../auth/userauth');
const {Router} = require('express');

const TaskRoute = Router();

TaskRoute.post('/create' , Userauth, async function (req,res){ // To create task
    const userid = req.userid;
    const title = req.body.title;
    

    try{
        
    await TaskModel.create({
        title : title,
        
        UserId : userid
        
    })

    res.status(201).json({
        message : "Task created successfully"
    })}
    catch(e){
        console.log(e);
        res.status(500).json({
            message : "Request couldnt be processed db error"
        })
    }

})

TaskRoute.put('/updatetask'  , Userauth , async function(req,res){
    const userid = req.userid;
    const title = req.body.title;
   
    const id = req.body.taskid;
try{
    await TaskModel.updateOne({_id : id} , {$set :{
        title : title,
        
        UserId : userid,
        
    }})

    res.status(201).jsonp({
        message : "Task Updated successfully",
    })}
    catch(e){
        console.log(e);
        res.status(500).json({
            message : "Failed to updated the data in db"
        })
    }
})

TaskRoute.post('/deletetask' ,Userauth, async function(req,res){
    const userid = req.userid;
    
    const id = req.body.taskid;

    try{await TaskModel.deleteOne({_id : id});

    res.status(201).json({
        message : "Task deleted successfully"
    })}

    catch(e){
        console.log(e);
        res.status(500).json({
            message : "Unable tp deleted the task db error"
        })
    }
})

module.exports = {
    TaskRoute : TaskRoute
}
