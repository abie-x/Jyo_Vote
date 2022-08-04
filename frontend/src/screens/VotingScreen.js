import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams, useSearchParams, useNavigate} from 'react-router-dom'
import { candidateData } from '../actions/electionActions'
import { User, Avatar, Button } from "@nextui-org/react";
import { SocialIcon } from 'react-social-icons';
import { pollVote } from '../actions/electionActions';

const VotingScreen = () => {
    const [searchParams] = useSearchParams();
    const {name} = useParams()

    const candidateInfo = useSelector((state) => state.candidateInfo)
    const {loading, candidate, errror} = candidateInfo

    const userRegister = useSelector((state) => state.userRegister)
    const {  userInfo } = userRegister

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const id = searchParams.get('id')
    useEffect(() => {
        dispatch(candidateData(name, id))
    }, [])

    const submitHandler = () => {
        console.log('iam pressed')
        dispatch(pollVote(candidate._id, userInfo.name, userInfo.email))
        navigate('/success')
    }

  return (
    <div className='candidate-background'>
      <div className='candidate-background-child'>
        <div className='candidate-title'>
            <h2 style={{color: "grey", letterSpacing: 1, fontWeight:700}}>{`${name.toLocaleUpperCase()} CANDIDATE`}</h2>
        </div>
        <div style={{width: "100%", textAlign: "center", marginTop: "20px"}}>
            <User
                src="https://i.pravatar.cc/150?u=a042581f4e290888704d"
                name=""
                size='xxl'
                bordered
            />
            <div style={{textAlign: 'center'}}>
            <h4 style={{color: "grey"}}>{candidate.name}</h4>
            <h4 style={{color: "grey"}}>{candidate.department}</h4>
            <div style={{display: "flex", justifyContent: "center", marginTop: "5px"}}>
                <SocialIcon url="https://instagram.com/jaketrent" style={{height: "25px", width: "25px", marginRight: "10px"}} />
                <SocialIcon url="https://twitter.com/jaketrent" style={{height: "25px", width: "25px", marginRight: "10px"}} />
                <SocialIcon url="https://linkedin.com/jaketrent" style={{height: "25px", width: "25px"}} />
            </div>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Button color="success" auto style={{height: "50px", width: "350px", marginTop: "25px", paddingTop: "5px"}} onPress={() => submitHandler()}>
                    <h4>Vote Now</h4>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VotingScreen