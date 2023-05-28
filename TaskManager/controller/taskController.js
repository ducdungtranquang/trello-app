const {user, task} =  require("../model/model");

const taskController = {
    
    addTask:async(req,res)=>{
        try{
            const newTask = new task(req.body);
            const saveTask = await newTask.save();
            if(req.body.user){
                const userId = user.findById(req.body.user);
                await userId.updateOne({$push: {task: saveTask._id}});
            }
            res.status(200).json(saveTask);
        }
        catch(e){
            res.status(500).json(e);
        }
    },

    getAllTask: async(req,res)=>{
        try{
           const allTask = await task.find();
           res.status(200).json(allTask);
        }
        catch(e){
            res.status(500).json(e);
        }
    },

    getUserByTask: async(req,res)=>{
        try{
            const user = await task.findById(req.params.id).populate("user");
            res.status(200).json(user);
        }
        catch(e){
            res.status(200).json(e);
        }
    },

    editTask: async (req,res)=>{
        try{
            const taskEdit = await task.findById(req.params.id);
            console.log(taskEdit._id);
            await taskEdit.updateOne({$set: req.body});
            res.status(200).json(taskEdit);
        }
        catch(e){
            res.status(500).json(e);
        }
    },

    deleteTask: async (req,res)=>{
        try{
            await user.updateMany({task:req.params.id}, {$pull:{task:req.params.id}});
            await task.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete success");
        }
        catch(e){
            res.status(500).json(e);
        }
    }
}

module.exports = taskController;