const mongoose = require("mongoose");


const userMongo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    task:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ],
    index:Number

},{timestamps:true});

const taskMongo = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    status:Boolean,
    timeStart:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});

let task = mongoose.model("Task", taskMongo);
let user = mongoose.model("User", userMongo);

module.exports = {task, user};