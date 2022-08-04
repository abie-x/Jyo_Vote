import express from "express"
import {registerCandidate, deleteCandidate, getCandidate} from "../controller/candidateController.js"
const router = express.Router()

router.post('/', registerCandidate)
router.delete('/:id', deleteCandidate)
router.get('/:id', getCandidate)

export default router