const {Router} = require('express')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const {z} = require('zod');
const { UserModel } = require('../../course selling app/db');

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
        message : "data added successfully"
    })
}
catch(e){
    console.log("There is an error : "+e );
}


})

UserRoute.post('./signin' , async function(req,res){
    const email = req.body;
    const password = req.body;

    const user = await UserModel.findOne({email});

    if(!user){
        res.status(401).json({
            message : "No user found with this email id"
        });
    }
    else{
        const pass = await bcrypt.compare(password , user.password);
        if(!pass){
            res.status(401).json({
                message : "Wrong Password"
            })
        }
        else{
            const token = JWT.create( {
                id : user_Id.toString()
            } , JWT_SECRET);

            res.status(201).json({
                message : "User Signed In succesfully",
                token : token
            })
        }
    }
})

module.exports = {
    UserRoute : UserRoute
}


