const hashedpassword=(token)=>{
    crypto.createHash("sha256").update(token).digest("hex")
}//hashing a given token
//genrete tokesn refresh
import jwt from "jsonwebtoken";
const generaterefreshtoken=(payload)=>{
jwt.sign(payload,Process.env.JWT_REFRESHTOKEN_SECRET_KEY,{expiresIn:porcess.env.JWT_REFRESHTOKEN_ExPIRESIN||"7d"});
}
const verifyrefreshtoken=(token)=>{
    jwt.verify(token,process.env.JWT_REFRESHTOKEN_SECRET_KEY)
}
const generateresettoken=(token)=>{
    return crypto.createHash("sha256").update(token).digest("hex"); //hasing a passowrd
}

const generateaccesstoken=(payload)=>{
    jwt.sign(payload,JWT_ACCESSTOKEN_SECRET_KEY,{
        expiresIn:process.env.JWT_ACCESSTOKEN_ExPIRESIN||"15m"
    })
}
const verifyaccesstoken=(token)=>{
    jwt.verify(token,process.env.JWT_ACCESSTOKEN_SECRET_KEY)
}