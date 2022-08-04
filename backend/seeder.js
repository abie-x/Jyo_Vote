//seeder file to seed sample datas to test if db is configured as we expect

import mongoose from "mongoose"
import colors from "colors"
import dotenv from "dotenv"
import Candidate from "./models/candidateModel.js"
import Election from "./models/electionModel.js"
import User from "./models/userModel.js"
import candidateData from "./data/candidateData.js"
import electionData from "./data/electionData.js"
import userData from "./data/userData.js"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Candidate.deleteMany()
        await Election.deleteMany()
        await User.deleteMany()
        
        const createdCandidate = await Candidate.insertMany(candidateData)
        const createdElection = await Election.insertMany(electionData)
        const createdUser = await User.insertMany(userData)

        console.log(`data imported!!`.green.underline)
        process.exit()
    } catch(err) {
        console.log(`${err}`.red.underline)
    }
}


const destroyData = async () => {
    try {
        await Candidate.deleteMany()
        await Election.deleteMany()
        await User.deleteMany()

        console.log(`data destroyed`.red.underline)
        process.exit()
    } catch(err) {
        console.log("something went wrong!!")
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }