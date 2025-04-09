const mongoose = require('mongoose');
const { string } = require('zod');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

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
    UserId : { type: ObjectId, ref: 'User' },
    status : String,
    done : Boolean
},{timestamps : true});

const UserModel = mongoose.model('users' , User);
const TaskModel = mongoose.model('tasks' , Task);

module.exports = {
    UserModel : UserModel,
    TaskModel : TaskModel
}