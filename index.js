require("dotenv").config(); //has to be added only once inside index,js and this can be used in all files

const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose'); // requiring mongoose 
const port = process.env.PORT || 8000;;
const {UserRoute} = require('./router/user');
const {TaskRoute} = require('./router/task');
const cors = require('cors'); //Not an internal module so have install it also using npm
const path = require('path');


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));//to serve static files on express js like html , css , js
app.use(express.json())//express middleware to use body in post and put request 
app.use(express.urlencoded({extended : false})); // this basically alows urls to pass inside express if there is any url in body



app.get('/', (req, res) => {
  res.sendFile(__dirname+"/public/index.html");
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html')
  })
  app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/public/signin.html')
  })
app.get('/dashboard' , (req,res)=>{

    res.sendFile(__dirname + "/public/dashboard.html")
})
  

app.use('/user' , UserRoute);
app.use('/task' , TaskRoute);


async function main(){
    await mongoose.connect(process.env.MONGOURL); //PROCESS.ENV IS STANDARD IF YOU WANT TO ACCESS VARIABLES INSIDE ENV FILES
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}

main();
