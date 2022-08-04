import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Grid} from "@nextui-org/react";
import { listCandidates } from '../actions/electionActions'
import {Link, useParams} from 'react-router-dom'

const CandidateListScreen = ({history, match}) => {

    const candidateList = useSelector((state) => state.candidateList)
    const {loading, candidates, errror} = candidateList

    const dispatch = useDispatch()
    const {name} = useParams()

    useEffect(() => {
        console.log(name)
        if(!candidates.name) {
            dispatch(listCandidates(name))
        }
    }, [dispatch, name])
  return (
    <div className='candidate-background'>
      <div className='candidate-background-child'>
        <div className='candidate-title'>
          <h2 style={{color: "grey", letterSpacing: 1, fontWeight:700}}>{name.toUpperCase()} CANDIDATES</h2>
        </div>
        <Grid.Container gap={4} justify="center" style={{marginLeft: "60px", marginTop: "20px"}}>
            {candidates.map((x, idx) => { 
              let imgData
              if(idx === 0) {
                imgData="https://i.pravatar.cc/150?u=a042581f4e290888704d"
              } else if(idx === 1) {
                imgData="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              } else if(idx === 2) {
                imgData = "https://i.pravatar.cc/150?u=a04258114e29026702d"
              } else if(idx === 3) {
                imgData = "https://i.pravatar.cc/150?u=a04258114e29026702d"
              } else if(idx === 4) {
                imgData = "https://i.pravatar.cc/150?u=a092581d4ef9026700d"
              } else if(idx === 5) {
                imgData = "https://i.pravatar.cc/150?u=a042581f4e25056704b"
              } else if(idx === 6) {
                imgData = "https://i.pravatar.cc/150?u=a042581f4e29026029d"  
              } else if(idx === 7) {
                imgData = "https://i.pravatar.cc/150?u=a042581f4e29026023d"
              } else if(idx === 8) {
                imgData = "https://i.pravatar.cc/150?u=a042581f4e29026024d"
              }
              return <Grid xs={4} style={{display: "flex"}}>
                <Link to={`/elections/vote/${name}?id=${x._id}`} style={{display: "flex"}}>
                  <img src={imgData} className='titles-img' style={{cursor: "pointer", display: "block"}} />
                  <h4 style={{color: "grey", marginTop: "24px", display: "block", marginLeft: "10px"}}>{x.name}</h4>
                  {/* <h5 style={{color: "grey", marginTop: "24px", display: "block"}}>{x.description}</h5> */}
                </Link>
              </Grid>
            })}
        </Grid.Container>
      </div>
    </div>
  )
}

export default CandidateListScreen