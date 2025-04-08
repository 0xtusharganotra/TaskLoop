require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;;
const {UserRoute} = require('./router/user');
const {TaskRoute} = require('./router/task');
const cors = require('cors');
const path = require('path');


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));//to serve static files on express js like html , css , js
app.use(express.json())//express middleware to use body in post and put request 
app.use(express.urlencoded({extended : false})); // this basically alows urls to pass inside express if there is any url in body



app.get('/', (req, res) => {
  res.status(201).json({
    message : "Welcome to taskloop app"
  })
})

app.use('/user' , UserRoute);
app.use('/task' , TaskRoute);


async function main(){
    await mongo.connect
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}
