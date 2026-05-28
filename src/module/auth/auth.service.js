import User from "./auth.model.js"
const hashtoken=(token)=>{
    crypto.createhash("sha256").update(token).digest("hex256");
}
const register=async(user)=>{
const{email,name,password,role}=user;
const existing=await User.findOne({email});
if (existing){
throw ApiError.conflict('user already exists')
}
const{rawToken,hashedToken}=generateResetToken();
const user=await User.create({email:email,name:name,password:password,role:role,verificaitontoken:hashedToken})
try{
    await sendVerificationEmail(email,token);
}
catch(error){
    console.error(error)
}const userObj=User.toObject();
delete userObj.password;
delete userObj.verificationToken;
return userObj;
};
const login=async({email,password})=>{

}   