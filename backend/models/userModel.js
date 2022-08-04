import mongoose from "mongoose"
import Candidate from "./candidateModel.js"
import Election from "./electionModel.js"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hasVoted: {
        type: Boolean,
        default: false
    },
    Selection: [
        {
            electionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Election,
            },
            selectedCandidate: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Candidate,
              },
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
  
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
    next()
}
  
const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User