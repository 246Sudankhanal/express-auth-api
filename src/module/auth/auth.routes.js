import express from "express"
const Router=express.Router();

Router.post('/register',validate(registerD),register)
Router.post('/login',validate(login),login)
Router.get('/getme',authenticate,getme)
Router.post('/logout', authenticate,controller.logout)
Router.get("/verify-email/:token",controler.verifyEmail)

export default Router;