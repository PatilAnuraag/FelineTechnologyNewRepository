import React, { useState, useEffect, Fragment } from 'react';
import './Platform.css'
/*import nature_1 from './images/nature_1.jpeg'
import nature_2 from './images/nature_2.jpeg'
import nature_3 from './images/nature_3.jpeg'
import nature_4 from './images/nature_4.jpeg' */
import DynamicInput from '../../DynamicFields/dynamicInput';
import bgImage from '../../../images/form-background.png'
import logo from '../../../images/logo.png'
import { motion } from "framer-motion"
import Modal from '../../AudioRecorder/AudioModal'
import UtilityContainer from './utilityContainer';
import useFetch from '../../Services/useFetch';
import { useNavigate } from 'react-router-dom';

const Platform = ({ workspaceId }) => {

  let navigate = useNavigate();
  const [isToggle, setToggle] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [questions, setQuestions] = useState('');
  // const [selectedWorkspace, setselectedWorkspace] = useState('');
  const [currentquestion, setCurrentQuestion] = useState(0);
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  const setModalOpen = (e) => {
    e.preventDefault();
    setOpen(!isOpen)
    console.log("this is from modal")
    console.log(isOpen);
  }

  const getquestions = () => {
    /* axios.get("http://8c12-175-101-108-155.ngrok.io/assets/questionnaire/LS123")
     .then(data => console.log(data))
     .catch(error => console.log(error)); */
    var myHeaders = new Headers();
    var urlencoded = new URLSearchParams();
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      //body: urlencoded,
      redirect: 'follow'
    };

    fetch("data/questionnaire.json", requestOptions)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        setQuestions(result.data.questionnaire);
        console.log('questionare : ', result.data.questionnaire)
      })
      .catch(error => console.log('error', error));

    //   fetch('http://localhost:3001/assets/questionnaire/LS123',{
    //     method: "GET",
    //     mode: "cors",
    //     headers : { 
    //       'Content-Type': 'application/json',
    //      /*  'Access-Control-Allow-Origin':'*' */
    //      }, 
    //     credentials: 'include',
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached,
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-do  
    //     }).then(function(response){
    //       console.log(response)
    //       return response.json();})
    //     .then(function(myJson) {
    //      // console.log(myJson);
    //       setQuestions(myJson.data.questionnaire);
    //       console.log(questions);
    //     });    
    // };
  }

  const workspaceConfig = useFetch('config/workspaces.json');

  console.log(questions);
  console.log('Platform check : ');
  console.log(workspaceConfig);

  const selectedWorkspace = (workspaceConfig.status == 'fetched') ? workspaceConfig.data.data.workspaces[workspaceId] : ''
  console.log('Selected workspace : ', selectedWorkspace);
  // eslint-disable-next-line no-lone-blocks

  useEffect(() => {
    getquestions();
    console.log('useEffect : ', workspaceId);
  }, []);

  useEffect(() => {
    console.log(workspaceId);
    // if (workspaceConfig.status == 'fetched') navigate(selectedWorkspace.previousPath);
  })

  const toggleSwitch = (e) => {
    e.preventDefault();
    console.log("hello this is from toggle switch")
    setToggle(!isToggle)
  }

  const handleNextQuestion = (e) => {
    e.preventDefault();
    const nextQuestion = currentquestion + 1;
    //console.log(toString(currentquestion))
    console.log(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
  }

  const handlePreviousQuestion = (e) => {
    e.preventDefault();
    console.log("this is from previous question")
    //const previousquestion = currentquestion-1;
    const previousquestion = currentquestion - 1;
    console.log(previousquestion)
    if (previousquestion >= 0) {
      setCurrentQuestion(previousquestion)
    }
  }

  /*const findValue=(e)=>{
    e.preventDefault();
    console.log(about);
    console.log(cards);
    console.log(photos);
    console.log(questionnaire);
    console.log(guide);
  } */

  const fullScreen = (e) => {
    e.preventDefault();
    var element = document.getElementById("question");

    // make the element go to full-screen mode
    element.requestFullscreen()
      .then(function () {
        // element has entered fullscreen mode successfully
        console.log("the screen will be covered whole screen")
      })
      .catch(function (error) {
        // element could not enter fullscreen mode
        console.log("there is error in full screen")
      });
  }

  //const [showTrelloPortal, setShowTrelloPortal] = useState(false);

  return (

    <div className='full_container' style={{ display: 'flex', width: "100%", height: "100%" }}>
      {/* {showTrelloPortal && <Portal>
      <div>Hello</div>
        <div onClick={()=>setShowTrelloPortal(false)}>
          Click to exit
        </div>
    </Portal>} */}
      <div class="full-screen-container" style={{ backgroundImage: `url(${bgImage})`, flexDirection: 'column' }}>
        <div className='logo_area ps-5 pt-5' style={{ position: 'relative', top: '-76px' }}><a href='https://www.geeksforgeeks.org/'><img src={logo}></img></a></div>
        <div class="login-container">
          <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg" style={{ maxWidth: '47rem', height: '20em' }}>
              <motion.div variants={animations} initial={{ x: "-300px", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit="exit" onClick={handleNextQuestion}>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2" style={{ fontSize: '1.6em' }}>
                    <span className='question_id_text'>{questions[currentquestion]?.question_id}
                    </span>
                    <i class="bi bi-dot" style={{ position: 'relative', left: '-0.4em', top: '0.22em', fontSize: '1.3em' }}></i>
                    {questions[currentquestion]?.question}
                  </div>
                  <p class="text-gray-700 text-base" style={{ marginTop: '6em' }}>
                    {<DynamicInput standardized_ui={questions[currentquestion]?.standardized_ui} options={questions[currentquestion]?.options} question_id={questions[currentquestion]?.question_id} ></DynamicInput>}
                  </p>
                </div>
              </motion.div>
            </div>
            <div class="px-6 pt-4 pb-2" style={{ display: 'flex', justifyContent: 'space-between', width: '34em', marginTop: '6em' }}>
              <div className="previous">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: '100px', borderRadius: '15px' }} onClick={(e) => handlePreviousQuestion(e)}>
                  Previous
                </button>
              </div>
              <div className="skip">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: '100px', borderRadius: '15px' }}>
                  Skip
                </button>
              </div>
              <div className="next">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: '100px', borderRadius: '15px' }} onClick={(e) => handleNextQuestion(e)}>
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <UtilityContainer setModalOpen={setModalOpen} workspaceConfig={selectedWorkspace} />
      {isOpen && <Modal isopen={isOpen} />}

    </div>
  )
}
export default Platform;