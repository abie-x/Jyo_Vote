import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';
import SigupScreen from "./screens/SigupScreen";
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import CandidateListScreen from "./screens/CandidateListScreen";
import VotingScreen from "./screens/VotingScreen";
import VotingSuccessScreen from "./screens/VotingSuccessScreen";
import ResultsScreen from "./screens/ResultsScreen";
import EmailVerificationScreen from "./screens/EmailVerificationScreen";

const App = () => {
  return(
    <NextUIProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<SigninScreen />} />
            <Route path='/home' element={<HomeScreen />} />
            <Route path='/elections/:name' element={<CandidateListScreen />} />
            <Route path='/elections/vote/:name' element={<VotingScreen />} />
            <Route path='/success' element={<VotingSuccessScreen />} />
            <Route path='/results' element={<ResultsScreen />} />
            <Route path='/verify' element={<EmailVerificationScreen />} />
            <Route path='/' element={<SigupScreen />} exact />
          </Routes>
        </Router>
    </NextUIProvider>
  )
}

export default App