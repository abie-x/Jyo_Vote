import React from 'react'
import { homeData } from '../data/homeScreenData'
import {Grid} from "@nextui-org/react";
import {Link} from 'react-router-dom'

const HomeScreen = () => {
    return(
        <div className='signup-parent'>
            <div className="signup-brand">
                <h1 className="signup-brand-heading">JYO<h1 style={{fontWeight: 1000, display: 'inline'}}>VOTE</h1></h1>
                <h6 className='signup-tagline'>Your vote is your choice</h6>
                <img src='/images/homeimg.png' className='home-brand-image'/>
            </div>
            <div className='signup-form'>
                <img src='/images/jyothilogo.png' className='home-logo' />
                {/* <div style={{display: "flex"}}>
                    <div style={{display: "flex"}}>
                        <img src='/images/titles.png' className='titles-img' />
                        <h5 style={{color: "grey", marginTop: "22%"}}>Chairman</h5>
                    </div>
                </div> */}
                 <Grid.Container gap={4} justify="center" style={{marginLeft: "60px"}}>
                    <Grid xs={6} style={{display: "flex"}}>
                        <Link to={'/elections/Chairman'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' style={{cursor: "pointer"}} />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Chairman</h4>
                        </Link>
                    </Grid>
                    <Grid xs={6}>
                        <Link to={'/elections/vicechairman'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Vice Chairman</h4>
                        </Link>
                    </Grid>
                    <Grid xs={6}>
                        <Link to={'/elections/artssecretary'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Arts Secretary</h4>
                        </Link>
                    </Grid>
                    <Grid xs={6}>
                        <Link to={'/elections/sportssecretary'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Sports Secretary</h4>
                        </Link>
                    </Grid>
                    <Grid xs={6}>
                        <Link to={'/elections/jointsecretary'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Joint Secretary</h4>
                        </Link>
                    </Grid>
                    <Grid xs={6}>
                        <Link to={'/elections/magazineeditor'} style={{display: "flex"}}>
                            <img src='/images/titles.png' className='titles-img' />
                            <h4 style={{color: "grey", marginTop: "24px"}}>Magazine Editor</h4>
                        </Link>
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    )
}

export default HomeScreen