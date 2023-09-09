import mongoose from "mongoose";

await mongoose.connect('mongodb://0.0.0.0/intelipath_db');
console.log("connectted to db");
const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
  });
const Collection ="User"


const User = mongoose.model(Collection,userSchema);
console.log("console user model ",User)



async function findByEmail(email){    
   
   console.log("find one user",User)
   const foundUser=await User.findOne({email:email});
   console.log("foundUser",foundUser);

   return foundUser;
}

async function save(userIn){
    try {
        const user = new User(userIn);
        const savedUser = await user.save();
        return savedUser;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}
const userRepo={findByEmail,save};
export default userRepo;
// module.exports ={findByEmail,save};