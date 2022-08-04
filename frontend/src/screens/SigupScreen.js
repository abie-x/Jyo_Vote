import React, {useState, useEffect} from 'react'
import {Container, Grid, useTheme, Input, Button, Textarea} from "@nextui-org/react";
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../actions/userActions'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SigupScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [err, setErr] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if(userInfo) {
      navigate('/verify')
    }
    if(error) {
      setErr(error)
    }
  }, [userInfo, navigate])

  const submitHandler = () => {
    // if(name === '' || email === '' || pwd === '') {
    //   setErr('please fill the required creditionals')
    // }
    if(email.includes('jecc.ac.in') === false) {
      setErr('Invalid email format')
    }
    else if(pwd !== confirmPwd) {
      setErr("Passwords doesn't match")
    } else {
      dispatch(register(name,email,pwd))
    }
    
  }
  return (
    <div className='signup-parent'>
        <div className="signup-brand">
            <h1 className="signup-brand-heading">JYO<h1 style={{fontWeight: 1000, display: 'inline'}}>VOTE</h1></h1>
            <h6 className='signup-tagline'>Your vote is your choice</h6>
            <img src='/images/electionbattle.png' className='signup-brand-battle'/>
            <img src='/images/electionpaper.png' className='signup-brand-paper'/>
            {err && (
              <div style={{position: "absolute", left: "25%", top: "2%"}}>
                <Input value={err}status="error" width='700px' style={{textAlign: "center"}}/>
              </div>
            )}
        </div>
        <div className='signup-form'>
            <h2 className='signup-form-heading'>CREATE YOUR ACCOUNT</h2>
            <div className='signup-form-container'>
              <div style={{display: 'block', marginBottom: '40px',}}>
              <Input 
                size='md'
                width='330px'
                underlined 
                labelPlaceholder="First Name" 
                color="#889096"
                onChange={(e)  => setName(e.target.value)}
              />
              </div>
              {/* {console.log(error)} */}
              <div style={{display: 'block', marginBottom: '40px', marginTop: '10px'}}>
              <Input 
                size='lg'
                width='330px'
                underlined 
                labelPlaceholder="Email Address" 
                color="#889096"
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div style={{display: 'block', marginBottom: '40px'}}>
              <Input 
                size='lg'
                width='330px'
                underlined 
                labelPlaceholder="Password" 
                color="#889096"
                onChange={(e) => setPwd(e.target.value)}
              />
              </div>
              <div>
              <Input 
              style={{display: 'block'}}
                size='lg'
                width='330px'
                underlined 
                labelPlaceholder="Confirm Password" 
                color="#889096"
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
              </div>
              <Button color="success" auto style={{height: "50px", width: "350px", marginTop: "25px", paddingTop: "5px"}} onPress={() => submitHandler()}>
                  <h4>Create New Account</h4>
              </Button>
              <div className='signup-redirector'>
                <h5 style={{display: "inline"}}>Already have an Account? <Link to={'/login'}><h5 style={{fontWeight:800, display: "inline", letterSpacing: "0.75px", cursor: "pointer", color: "#000"}}>Login</h5></Link></h5>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SigupScreen