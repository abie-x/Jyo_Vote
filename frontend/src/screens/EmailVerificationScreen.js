import React, {useState} from 'react'
import OtpInput from 'react-otp-input';
import {Container, Grid, useTheme, Input, Button, Textarea} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'

const EmailVerificationScreen = () => {
    const [otp, setOtp] = useState('')
    const [err, setErr] = useState('')
    const [tempArray, setTempArray] = useState([])

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setOtp(e)
    }

    const submitHandler = () => {
       navigate('/home')
    }
  return (
    <div className='emailVerification-component'>
            {err && (
              <div style={{position: "absolute", left: "25%", top: "4%"}}>
                <Input value={err}status="error" width='700px' style={{textAlign: "center"}}/>
              </div>
            )}
        <div style={{display: "flex", justifyContent: "center", paddingTop: "75px", color: "grey"}}>
            <h4 style={{fontWeight: 700, letterSpacing: "1px"}}>Please enter the One Time Password to verify your account</h4>
        </div>
        <div style={{display: "flex", justifyContent: "center", paddingTop: "25px", color: "grey"}}>
            <h5 style={{fontWeight: 400, letterSpacing: "1px"}}>A One-Time Password has been sent to your mail</h5>
        </div>
        <div style={{display: "flex", justifyContent: "center", paddingTop: "25px", color: "grey"}}>
        <OtpInput
            value={otp}
            onChange={(e) =>  changeHandler(e)}
            numInputs={4}
            separator={<span>-   </span>}
            inputStyle={{height: "50px", width: "50px"}}
        />
        </div>
        <div style={{display: "flex", justifyContent: "center", paddingTop: "25px", color: "grey"}}>
              <Button color="success" auto style={{height: "50px", width: "150px", paddingTop: "5px"}} onPress={() => submitHandler()}>
                  <h4 style={{letterSpacing: "1px"}}>Verify</h4>
              </Button>
        </div>
    </div>
  )
}

export default EmailVerificationScreen