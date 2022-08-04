import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from 'cors'
import connectDB from "./config/db.js"
import {notFound, errorHandler} from "../backend/middleware/errorMiddleware.js"
import userRouter from "./routes/userRoutes.js"
import candidateRouter from "./routes/candidateRoutes.js"
import electionRouter from "./routes/electionRoutes.js"

dotenv.config()
connectDB()   
const app = express()
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions))
app.use(express.json())

//handling the api end-points
app.use('/api/users', userRouter)
app.use('/api/candidates', candidateRouter)
app.use('/api/elections', electionRouter)

//handling the middlewares
app.use(notFound)
app.use(errorHandler)

const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})  