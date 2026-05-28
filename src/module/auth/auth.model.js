import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
const userSchema=new mongoose.Schema({
    name:{
type:String,
trim:true,
minlength:2,
maxlength:50,
required:[true,"name is required"]

    },
email:{
    type:String,
    trim:true,
    required:[true,"email is required"],
    unique:true,
    lowercase:true

},
password:{
    type:String,
    required:[true,"password is required"],
    minlength:8,
    maxlength:50,
    select:false

},
role:{
    type:String,
    enum:["customer","seller","admin"],
    default:"customer"

},
isVerified:{
    type:Boolean,
    default:false
},
verificationToken:{type:String,select:false},
refreshToken:{type:String,select:false},
resetPasswordToken:{type:String,select:false},
resetPasswordExpires:{type:Date,select:false}

}, {timestamps:true})


userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
   this.password= await bcrypt.hash(this.password,12);
    next();
});
userSchema.methods.verifyPassword=async(rawPassword)=>{
    return bcrypt.compare(rawPassword,this.password)


}
export default mongoose.model("User",userSchema)