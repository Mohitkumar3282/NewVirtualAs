import express from 'express'
import  dotenv  from 'dotenv';
import dbConnection from'./Config/db.js'
// import authRouter from './routes/auth.routes.js';
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config();

//yaha call krte hai express ko taaki jitni bhi jije hai express mai bo app ke madhyam se use kr sake
const app=express();



app.use(cors({
    origin:"https://mohitvirtual.onrender.com",
    credentials:true
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)




app.listen(port,()=>{
    dbConnection();
    console.log(`server is runnig at http://localhost:${port}`)
})
