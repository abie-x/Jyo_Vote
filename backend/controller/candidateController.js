import asyncHandler from "express-async-handler"
import Election from "../models/electionModel.js"
import Candidate from "../models/candidateModel.js"

//desc => registering as candidate
//route => POST /api/candidates
//access => public
const registerCandidate = asyncHandler(async (req, res) => {
    const {name, email, description, department, electionName, instaId, linkedinId, imageUrl} = req.body
    const electionExist = await Election.findOne({name: electionName})
    if(electionExist) {
        // const isRegistered = await Candidate.findById()
        let flag = false
        for(let i = 0; i < electionExist.candidates.length; i++) {
            let candId = JSON.stringify(electionExist.candidates[i].candidateId)
            console.log(candId)
            let trimmedstr = candId.substring(1, 25)
            console.log(trimmedstr)
            const candidateFound = await Candidate.findById(trimmedstr)
            if(candidateFound && candidateFound.email === email) {
                flag = true
                res.status(400)
                throw new Error("Candidate already registered")
            }
        }
        if(!flag) {
            const newCandidate = await Candidate.create({
                name,
                email,
                description,
                department,
                electionName,
                instaId,
                linkedinId,
                imageUrl
            })
            if(newCandidate) {
                electionExist.candidates.push({
                    candidateId:newCandidate._id,
                    name: newCandidate.name,
                    email: newCandidate.email,
                    description: newCandidate.description,
                    department: newCandidate.department,
                    instaId: newCandidate.instaId,
                    linkedinId: newCandidate.linkedinId,
                    imageUrl: newCandidate.imageUrl
                })
                await electionExist.save()
                res.status(201).json({
                    _id: newCandidate._id,
                    name: newCandidate.name,
                    email: newCandidate.email,
                    description: newCandidate.description,
                    department: newCandidate.department,
                    electionName: newCandidate.electionName,
                    instaId: newCandidate.instaId,
                    linkedinId: newCandidate.linkedinId,
                    imageUrl: newCandidate.imageUrl
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
            }
        }
    } else {
        res.status(400)
        throw new Error("Invalid election data")
    }
})

const getCandidate = asyncHandler(async (req, res) => {
    const candidate = await Candidate.findById(req.params.id)
    console.log(req.params.id)
    if(candidate) {
        res.send(candidate)
    } else {
        res.status(400)
        throw new  Error("candidate not found")
    }
})

//desc => delete a candidate(only for Admin use)
//route => DELETE /api/candiate/:candidate_id
//access => private
const deleteCandidate = asyncHandler(async (req, res) => {
    const candidate =  await Candidate.findById(req.params.id)
    if(candidate) {
        await candidate.remove()
        res.json({
            msg: "Candidate successfully removed from the database"
        })
    } else {
        res.status(400)
        throw new Error("Candidate not found")
    }
})


export {
    registerCandidate,
    deleteCandidate,
    getCandidate
}