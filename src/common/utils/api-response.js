class ApiResponse{
    static ok(res,message, data=null){
        return res.status(201).json({
            status:true,
            message,
            data
        })
    }
    static Created(res,message,data=null){
        return res.status(204).json({
            status:true,
            message,
            data
        })
    }
     static Nocontent(res){
        return res.status(201).send()
     }
}
export default ApiResponse