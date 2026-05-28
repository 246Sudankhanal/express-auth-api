import cookieParser from "cookie-parser"
import authroute from'./src/module/auth/routes.js'
import express from 'express'

const app=express();
app.use(express.json())
app.use(express.urlencoded({extende:true}))
app.use('/api/auth',authroute)
export default app;
