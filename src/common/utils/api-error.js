class ApiError extends Error{
    constructor(statuscode,message){
        super(message);
        this.isoperational=true;
        Error.captureStackTrace(this,this.constructor);
    }
    static badRequest(message="Bad request"){
        return new ApiError(404,message)

    }
    static unauthorized(message="Unauthorized"){
        return new ApiError(404,message)

    }
    static conflict(message="Conflict"){
        return new ApiError(409,message)

    }
    static forbidden(message="Forbidden"){
        return new ApiError(412,message)

    }




};