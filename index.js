const express = require("express")

const bodyparser = require("body-parser")

const env  = require("dotenv");

const bcrypt = require("bcrypt");

env.config()

const mongoose  = require("mongoose")

const auth = require("./middelware/auth")

const port  = process.env.PORT

const database  = process.env.DATABASE_URL

const app = express();

const jwt  = require("jsonwebtoken")

const Note = require("./models/notesSchema")

const { v4: uuidv4 } = require('uuid');

const verifyToken = require("./middelware/verifyToken")

const uuid = uuidv4();


app.use(express.json());

// model
const User = require("./models/userSchema")

app.get("/",(req,res)=>{
    res.send("Hello I'm suraj")
})

app.delete("/notes/delete/:noteId",async (req,res)=>{

  try {

    const {noteId} = req.params;
    
    await Note.findByIdAndDelete({_id:noteId})

    res.send({message:"Note deleted sucessfully"})
    
  } catch (error) {

    console.log(error)
    res.status(500).json({ message: 'Internal server error' });

  }
}

)

app.post("/notes/create",verifyToken, async (req,res)=>{

    try {

    const userId =  req.username // taking the username from middleware

const {title,content} = req.body;

const newNote = new Note({
  title,
  content,
  userId:userId
})

newNote.save()

res.status(201).json({message:"Note created sucessfully",newNote})

    } catch (error) {
        console.log(error)
        res.json({message:"Not authenticated"})

    }

})


app.get("/notes/:userId", async (req,res)=>{
  try {
    const { userId } = req.params;
    // Retrieve notes for the specified user
    const notes = await Note.find({ userId});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
})


app.post("/login", async (req,res)=>{

    try {
        
    const {username,password} = req.body;
        
    User.findOne({username}).then((user,pass)=>{

        if(username == user.username){
            bcrypt.compare(password,user.password, (err,result)=>{
                if(result){
                    const payLoad = {
                        userId:user._id,
                        username:user.username
                    }
                    console.log(payLoad)
                
                 const token = jwt.sign(payLoad, process.env.SECRET_KEY, {expiresIn:"1d"});
                 res.status(201).send({token});

                }else{
                    res.send("Password Not matched")
                }
            })
        }
    })

    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in user');
    } 


})

app.post('/signup',auth, async (req, res) => {
    try {
      const { username, password } = req.body

      // to make password secure for everyone
    let saltRound = 5;

    bcrypt.genSalt(saltRound, (err,salt)=>{
        bcrypt.hash(password,salt, (err,hash)=>{
            const newData = new User({
                username:username,
                password:hash
               });
               newData.save()
        })
      })

      res.status(201).send('User created successfully');

    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).send('Error signing up user');
    }
  });
  

app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})


mongoose.connect(database)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    // Further code to interact with the MongoDB database can be placed here
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });