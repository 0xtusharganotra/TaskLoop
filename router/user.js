// This is how express router work 
const {Router} = require('express')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const {z} = require('zod');
const { UserModel , TaskModel } = require('../db/db');
const { Userauth } = require('../auth/userauth')

const UserRoute = Router();

UserRoute.post('/signup' , async function(req,res){
//zod validation 

const requiredbody = z.object({
    email : z.string().min(3).max(20).email(),
    password : z.string().min(6).max(20),
    Name : z.string().min(3).max(15)
})

const bodyvalidated = requiredbody.safeParse(req.body);

if(!bodyvalidated.success){
    res.status(404).json({
        message : "Incorrect format"
    })
}

    const email = req.body.email;
    const password = req.body.password;
    const Name = req.body.Name;

    //passord has to be encrypted 

    const hashedpassword = await bcrypt.hash(password , 5);
    //bcrypt will add salt automatically
    try{
    await UserModel.create({
        email : email,
        password : hashedpassword ,
        Name : Name
    })

    res.status(200).json({
        message : "Signed Up successfully"
    })
}
catch(e){
    console.log("There is an error : "+e );
}


})

UserRoute.post('/signin' , async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({email : email});

    if(!user){
        res.status(401).json({
            message : "No user found with this email id"
        });
    }
    else{
        const pass = await bcrypt.compare(password , user.password); // this is done to basically check if password is correct or not so 
        if(!pass){
           return res.status(401).json({
                message : "Wrong Password"
            })

        }
        else{
            const token = JWT.sign( {
                id : user._id.toString()
            } , JWT_SECRET);

            res.status(201).json({
                message : "User Signed In succesfully",
                token : token,
                Name : user.Name
            })
        }
    }
})

UserRoute.get('/:user', Userauth , (req,res)=>{

    res.sendFile(__dirname + "/public/dashboard.html")
})

UserRoute.get('/tasks', Userauth , async function(req,res){
const id = req.userid;
try{
const tasks = await TaskModel.find({ UserId : id});

res.status(201).json({
    message : "All user tasks recieved succesfully",
    tasks : tasks
})
}
catch(e){
    console.log(e);
    res.status(500).json({
        messgage : "An error occured while serving the request"
    })
}

}) //shows all users todos

module.exports = {
    UserRoute : UserRoute
}


