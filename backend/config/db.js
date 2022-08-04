import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`mongoDB connected to host ${connection.connection.host}`.cyan.underline)
    } catch(err) {
        console.log(`${err}`.red.underline.bold)
        process.exit(1)          
    }  
} 
  
export default connectDB