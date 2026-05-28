import BaseDto from "../../../common/config/dto/base.dto.js"
import joi from "joi";
class LoginDto extends BaseDto{
    static schema=joi.object({
        email:joi.string().email().lowercase().required(),
        password:joi.string().required()

    })


}
export default LoginDto;