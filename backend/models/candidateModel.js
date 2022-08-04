import mongoose from "mongoose"

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    electionName: {
        type: String,
        required: true
    },
    instaId: {
        type: String,
        required: true
    },
    linkedinId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema)

export default Candidate