import joi from "joi"
import BaseDto from "../../../common/config/dto/base.dto.js";
class RegisterDto extends BaseDto{
    static schema=joi.object({
        name:joi.string().trim().min(2).max(30).required(),
        email:joi.email().string().lowercase().required(),
        password:joi.string().required().message("password must coantian 8 chars minimum").min(8),
        role:joi.string().valid("customer","seller").default("customer")
    })
}export default RegisterDto;