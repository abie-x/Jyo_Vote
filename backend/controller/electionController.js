import asyncHandler from "express-async-handler"
import Election from "../models/electionModel.js"
import Candidate from "../models/candidateModel.js"
import User from "../models/userModel.js"

//desc => registering as candidate
//route => POST /api/candidates
//access => public
const registerElection = asyncHandler(async (req, res) => {
    const {name, description, candidates} = req.body
    const isElectionFound = await Election.findOne({name})
    if(isElectionFound) {
        res.status(400)
        throw new Error("Election already registered")
    }
    const election = await Election.create({
        name, description, candidates
    })
    if (election) {
        res.status(201).json({
          _id: election._id,
          name: election.name,
          candidates: election.candidates
        })
      } else {
        res.status(400)
        throw new Error('Invalid election data')
      }
})

//desc => getting all details of the election if election name is provided
//route => GET /api/election/:election_name
//access => public
const getElectionData = asyncHandler(async (req, res) => {
    console.log(req.params.name)
    const election = await Election.findOne({name: req.params.name})
    console.log(election)
    if(election) {
        res.json(election)
    } else {
        res.status(400)
        throw new Error("Election not found")
    }
})

//desc=> getting all election titles to display in homepage
//route=> GET /api/election
//access=> pulic
const electionTitle = asyncHandler(async (req, res) => {
    const data = await Election.find({})
    if(data) {
        const titles = data.map(x => x.name)
        res.send(titles)
    } else {
        res.status(400)
        throw new Error("something went wrong")
    }
})

//desc => increment the vote of the nominees when the users select them
//route => PUT /api/election//vote/:election_name
//access => public
// const vote = asyncHandler(async (req, res) => {
//     const {candidateEmail, userName, userEmail} = req.body
//     console.log(req.params.name)
//     const election = await Election.findOne({name: req.params.name})
//     console.log(election)
//     for(let i = 0; i < election.voters.length; i++) {
//         if(election.voters[i].email === userEmail) {
//             res.status(400)
//             throw new Error("User already voted")
//         }
//     }
//     for(let i = 0; i < election.candidates.length; i++) {
//         if(election.candidates[i].email === candidateEmail) {
//             election.candidates[i].totalVotes = election.candidates[i].totalVotes+1
//         }
//         console.log(election.candidates[i].totalVotes)
//     }
//     election.voters.push({name: userName, email: userEmail})
//     const updatedElection = await election.save()
//     console.log(updatedElection)
//     res.json(updatedElection)
// })

const vote = asyncHandler(async (req, res) => {
    const {candidateId, userName, userEmail} = req.body
    console.log(req.params.name)
    
    const election = await Election.findOne({name: req.params.name})
    console.log(election)
    for(let i = 0; i < election.voters.length; i++) {
        if(election.voters[i].email === userEmail) {
            res.status(400)
            throw new Error("User already voted")
        }
    }
    for(let i = 0; i < election.candidates.length; i++) {
        if(JSON.stringify(election.candidates[i]._id) === JSON.stringify(candidateId)) {
            console.log('iam fines')
            election.candidates[i].totalVotes = parseInt(election.candidates[i].totalVotes) + 1
            console.log(election.candidates[i].totalVotes)
            console.log(parseInt(election.candidates[i].totalVotes) + 1)
        }
        console.log(election.candidates[i].totalVotes)
        console.log(typeof(JSON.stringify(election.candidates[i]._id)))
        console.log(typeof(JSON.stringify(election.candidates[i].totalVotes)))
        console.log(typeof(candidateId))
    }
    election.voters.push({name: userName, email: userEmail})
    election.totalVotes = election.totalVotes + 1
    const updatedElection = await election.save()
    console.log(updatedElection)
    res.json(updatedElection)
})

const getCandidate = asyncHandler(async (req, res) => {
    const election = await Election.findOne({name: req.params.name})

    if(election) {
        const candidate = election.candidates.filter(x => JSON.stringify(x._id) === JSON.stringify(req.body.id))
        console.log(req.body.id)
        console.log(candidate)
        res.send(candidate)
    }   else {
        res.status(400)
        throw new  Error("candidate not found")
    }
    // const candidate = await Candidate.findById(req.params.id)
    // console.log(req.params.id)
    // if(candidate) {
    //     res.send(candidate)
    // } else {
    //     res.status(400)
    //     throw new  Error("candidate not found")
    // }
})

//desc => publish the results
//route => GET /api/elections/result/:election_name
//access => public
const publishResult = asyncHandler(async (req, res) => {
    const election = await Election.findOne({name: req.params.name})
    if(election) {
        let result = []
        for(let i = 0; i < election.candidates.length; i++) {
            result.push({name: election.candidates[i].name, totalVotes: election.candidates[i].totalVotes})
        }
        res.send(result)
    } else {
        res.status(400)
        throw new Error("something went wrong")
    }
})

export {
    registerElection,
    getElectionData,
    electionTitle,
    getCandidate,
    vote,
    publishResult
}