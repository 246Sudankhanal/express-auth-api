const connectDB=async()=>{
    
        const conn=await moongoose.connec(process.env.MONGODB_URI);
        console.log(`mongodb connectd:${conn.connection.host}`)
    }
  
export default connectDB