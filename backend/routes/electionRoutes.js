import express from 'express'
import { registerElection, getElectionData, electionTitle, getCandidate, vote, publishResult } from '../controller/electionController.js'
const router = express.Router()

router.post('/', registerElection)
router.put('/vote/:name', vote)
router.get('/:name', getElectionData)
router.get('/results/:name', publishResult)
router.get('/candidate/:name', getCandidate)
router.get('/', electionTitle)

export default router