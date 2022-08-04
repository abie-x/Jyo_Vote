import mongoose from "mongoose"
import Candidate from "./candidateModel.js"

const electionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    candidates: [
        {
            candidateId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Candidate,
            },
            name: {
                type: String
            },
            email: {
                type: String
            },
            description: {
                type: String
            },
            department: {
                type: String
            },
            instaId: {
                type: String
            },
            linkedinId: {
                type: String
            },
            imageUrl: {
                type:String
            },
            totalVotes: {
                type: Number,
                default: 0
            },
        }
    ],
    voters: [
        {
            name: {
                type: String
            },
            email: {
                type: String
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    totalVotes: {
        type: Number,
        default: 0
    }
})

const Election = mongoose.model('Election', electionSchema)

export default Election