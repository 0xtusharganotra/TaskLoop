const mongoose = require('mongoose');
const { string } = require('zod'); // requiring string for zod validation  
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; //its not a string its a type of object

const User = new Schema({
    email : {
        type : String,
        unique : true   
    },
    password : String,
    Name : String
})

const Task = new Schema({
    title : String,
    description : String,
    UserId : { type: ObjectId, ref: 'User' }, // in mongoose we can give ref to object id basically creating relation between tables using ref
    status : String,
    done : Boolean
},{timestamps : true});

const UserModel = mongoose.model('users' , User); //inside db collection name is users 
const TaskModel = mongoose.model('tasks' , Task); //inside db collection name is tasks

module.exports = {
    UserModel : UserModel,
    TaskModel : TaskModel
}