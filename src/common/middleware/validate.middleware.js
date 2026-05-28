import joi from "joi"
import BaseDto from './dto/base.dto.js'
import ApiError from '../utils/api-error.js'
const validate=(Dtoclass)=>{ 
   return (req,res,next)=>{
    const {error,value}=Dtoclass.validate(req.body)
    if (errors){
        throw ApiError.badrequest(errors.join("; "))


    }
    req.body=value;
    next()





   }

}
export default validate