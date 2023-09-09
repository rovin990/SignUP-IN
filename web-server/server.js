import express from "express";
import bodyParser from "body-parser";
import userRepo from "../repository/userRepo.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const saltRounds = 10;

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/signUp",async(req,res)=>{
    const data = req.body;
    const foundUser = await userRepo.findByEmail(data.email);
    console.log("inside post signup found user",foundUser);
    if(foundUser!==null){
        res.status(409).send("Already register!")
    }
    else{
        if(data.password.length>5){

            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(data.password, salt, async function(err, hash) {
                    
                    data.password=hash;
                    // console.log("encoded data ",data)
                    const savedUser=await userRepo.save(data);
                    // console.log("savedUser ",savedUser)
                   
                    res.status(200).send({name:savedUser.name,email:savedUser.email,id:savedUser._id});
                });
            });
            
        }
        else{
            res.status(422).send("Password should be greater than 5!");
        }        
    }
    
})

app.post("/signIn",async(req,res)=>{
    const data = req.body;
    const dbUser= await userRepo.findByEmail(data.email);
    if(dbUser===null){
        res.status(404).send("Please register first ")
    }
    else{
        bcrypt.compare(data.password, dbUser.password, function(err, result) {
            if(result===true){
                const token = uuidv4();
                console.log(token);
                res.status(200). send({msg:"LoggedIn successfully !",token:token})
            }
            else{
                res.status(401).send("Incorrect password")
            }
        });
    }
})


export default app;