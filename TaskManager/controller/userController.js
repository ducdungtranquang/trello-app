const {user, task} = require('../model/model');

const userController = {
    addUser : async (req,res)=>{
        try{
            const newUser = new user(req.body);
            const saveUser =await newUser.save();
            res.status(200).json(saveUser);
        }
        catch(err){
            res.status(500).json(err);
        } 
    },

    getAllUser: async (req, res)=>{
        try{
            const allUser = await user.find().populate("task");
            res.status(200).json(allUser);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getTaskByUser: async(req,res)=>{
        try{
            const taskByUser =await user.findById(req.params.id).populate("task");
            res.status(200).json(taskByUser);
        }
        catch(e){
            res.status(500).json(e);
        }
    },
    editUser: async (req,res)=>{
        try{
            const userEdit = await user.findById(req.params.id);
            await userEdit.updateOne({$set: req.body});
            res.status(200).json("Success");
        }
        catch(e){
            res.status(500).json(e);
        }
    },
    delUser: async (req, res)=>{
        try{
            // await user.updateMany({task:req.params.id}, {$pull:{task:req.params.id}});
            // await task.findOneAndDelete({user:req.params.id}, (err, docs)=>{

            // })
            // user.findMaAndDelete
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete success");
        }
        catch(e){
            res.status(500).json(e);
        }
    }
}

module.exports = userController;