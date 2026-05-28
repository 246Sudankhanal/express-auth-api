import * as authService from './auth.service.js'
import ApiResponse from"../../common/utils/api-response.js";
const register=async(req,res)=>{
    const user=await authService.register(req.body);
    ApiResponse.Created(res,"Registration Sucess",user);
}
