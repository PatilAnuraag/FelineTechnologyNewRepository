import './App.css';
import React, { useState} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/sidenavbar/Sidenavbar'
import Analytic from './components/pages/Analytic/Analytic'
import Home from './components/pages/Home/Home'
import Chat from './components/pages/Chat/Chat'
import Platform from './components/pages/Platform/Platform';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Trello from './components/pages/Trello/trello';
import AgoraScreenShare from './components/Agora/agoraScreenShare.tsx';
import AgoraVideoCall from './components/Agora/agoraVideoCall.tsx';
import ReactNotes from './components/pages/ReactNotes/reactNotes';
import AudioRecorder from './components/AudioRecorder/AudioRecorder'
import AudioModel from './components/AudioRecorder/AudioModal'
import AudioModal from './components/AudioRecorder/AudioModal';

function App() {
  
  const [isOpen,setOpen ] = useState(false)
 
  /* const url = 'http://localhost:1337/api/abouts' */

/*const  getAbout = async()=>{
  try {
     const response = await axios.get(url, {
      headers: {
        Authorization:
          'Bearer 2cffd567b6f1f0b9adf605ada43128643b0c0cb971f801dcc0572cc4140d7359209168a90293db40368e84255da69fcacb39a375d15ed71e9829df1aeae6ab9bf3a5421141caf9c9542430fb2c71bccb7174130ed4d7d7ba1630b0f960563b65d3f280e8580b59bf7e0cd7a73b7da30fcaf693ab256f60c087f730be837ffbeb',
      },
    });
       console.log(response)
  } catch (error) {
       console.log(error)
  }
 }

useEffect(() => {
      getAbout(); 
},[]); */

  const handleNav = ( )=>{
         setOpen(!isOpen)
       console.log("it is from handlenav of app.js")
      }    
  
  
return (
   
    <div className="App">
     <Router>
     <Header handleNav={handleNav}></Header> 
     <div className='wrapper'>  
     <Navbar isOpen={isOpen}></Navbar>
     <div className='container-box'>
      <Routes>
        <Route path="/" element={<Platform/>}/>
        <Route path="/analytic" element={<Analytic/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/platform" element={<Platform/>} />
        <Route path="/trello" element={<Trello/>} />
        <Route path="/video" element={<AgoraVideoCall/>} />
        <Route path="/screenShare" element={<AgoraScreenShare/>} />
        <Route path="/notes" element={<ReactNotes/>} />
        <Route path="/audio" element={<AudioRecorder/>} />
        
      </Routes>
     </div>
     </div>
    </Router>
  </div>
 
);
}
export default App
