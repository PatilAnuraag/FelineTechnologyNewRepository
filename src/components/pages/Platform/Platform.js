import React,{useState,useEffect, Fragment} from 'react';
import './Platform.css'
/*import nature_1 from './images/nature_1.jpeg'
import nature_2 from './images/nature_2.jpeg'
import nature_3 from './images/nature_3.jpeg'
import nature_4 from './images/nature_4.jpeg' */
import Image  from '../../image/Image';
import {Link} from "react-router-dom";
import axios from 'axios';
import Board from 'react-trello'
import DynamicInput from '../../DynamicFields/dynamicInput'; 
import bgImage from '../../../images/form-background.png'
import logo from  '../../../images/logo.png'
import { MotionConfig } from 'framer-motion';
import { motion } from "framer-motion"
import Modal from '../../AudioRecorder/AudioModal'

const Platform = ()=>{
const[isToggle,setToggle] = useState(false)
const[isOpen,setOpen] = useState(false)
const [questions,setQuestions] = useState('');
const [currentquestion,setCurrentQuestion] = useState(0);
const animations = {
     initial:{opacity:0,x:100},
     animate:{opacity:1,x:0},
     exit:{opacity:0,x:-100}
}
 
const setModalOpen = (e)=>{
  e.preventDefault();
  setOpen(!isOpen)
  console.log("this is from modal") 
  console.log(isOpen);   
}
 

// const [about,setAbout] = useState('');
// const [cards,setCard] = useState('');
// const [photos,setPhotos] = useState('');
// const [guide,setGuide] = useState('');
// const [questionnaire,setQuestionnaire] = useState('')
const getquestions = ()=>{
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
     .then(response =>{
          console.log(response);
          return response.json();
     })
     .then(result =>{ 
       setQuestions(result.data.questionnaire); 
       console.log(result.data.questionnaire)})
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
 console.log(questions);
 // eslint-disable-next-line no-lone-blocks
 useEffect(() => {
     getquestions();  
     console.log(questions);   
},[]);


const toggleSwitch =(e)=>{
        e.preventDefault();
        console.log("hello this is from toggle switch")
        setToggle(!isToggle) 
}

const handleNextQuestion=(e)=>{
        e.preventDefault();    
        const nextQuestion = currentquestion+1;
        //console.log(toString(currentquestion))
        console.log(nextQuestion);
        if(nextQuestion<questions.length){
           setCurrentQuestion(nextQuestion)
      }
  }

const handlePreviousQuestion=(e)=>{
        e.preventDefault();
        console.log("this is from previous question")     
        //const previousquestion = currentquestion-1;
        const previousquestion = currentquestion-1;  
        console.log(previousquestion)
        if(previousquestion>=0){
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


const fullScreen=(e)=>{
      e.preventDefault();
      var element =document.getElementById("question");

  // make the element go to full-screen mode
      element.requestFullscreen()
          .then(function() {
          // element has entered fullscreen mode successfully
          console.log("the screen will be covered whole screen")
     })
      .catch(function(error) {
           // element could not enter fullscreen mode
          console.log("there is error in full screen")
     });
 }

 //const [showTrelloPortal, setShowTrelloPortal] = useState(false);



return (
     
    <div className='full_container' style={{display:'flex', width: "100%", height: "100%"}}>  
    {/* {showTrelloPortal && <Portal>
      <div>Hello</div>
        <div onClick={()=>setShowTrelloPortal(false)}>
          Click to exit
        </div>
    </Portal>} */}
          <div class="full-screen-container" style={{backgroundImage:`url(${bgImage})`,flexDirection:'column' }}>
    

    <div className='logo_area ps-5 pt-5' style={{ position:'relative',top:'-76px'}}><a href='https://www.geeksforgeeks.org/'><img src={logo}></img></a></div> 
    <div class="login-container">
      
      <form style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <div class="max-w-sm rounded overflow-hidden shadow-lg"style={{maxWidth:'47rem',height:'20em'}}>
              <motion.div variants={animations} initial={{ x: "-300px", opacity: 0 }} animate= {{x: 0, opacity: 1}} exit="exit"  onClick={handleNextQuestion}> 
              <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2" style={{fontSize:'1.6em'}}>
                        <span className='question_id_text'>{questions[currentquestion]?.question_id}
                        </span>
                        <i class="bi bi-dot" style={{position:'relative',left: '-0.4em',top:'0.22em',fontSize:'1.3em'}}></i>
                            {questions[currentquestion]?.question}
                      </div>
                       <p class="text-gray-700 text-base" style={{marginTop:'6em'}}>
                               {<DynamicInput standardized_ui={questions[currentquestion]?.standardized_ui} options={questions[currentquestion]?.options}  question_id={questions[currentquestion]?.question_id} ></DynamicInput>}
                       </p>
              </div>
              </motion.div>
            </div>
            <div class="px-6 pt-4 pb-2" style={{display:'flex',justifyContent:'space-between',width:'34em',marginTop:'6em'}}>
                  <div className="previous">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{width:'100px',borderRadius:'15px'}} onClick={(e)=>handlePreviousQuestion(e)}>
                                 Previous
                        </button>
                  </div>
                  <div className="skip">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{width:'100px',borderRadius:'15px'}}>
                                 Skip
                        </button>
                  </div>
                  <div className="next">
                         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{width:'100px',borderRadius:'15px'}} onClick={(e)=>handleNextQuestion(e)}>
                               Next
                        </button>
                  </div>
            </div>
      </form>
    </div>
   
          </div>
          <div className='utility_container'>
        <div className='utility_container_tools'>
           <div className='first_row' style={{fontSize:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
             <div className='first_row_utility' style={{display:'flex',justifyContent:'space-between'}}>
                  <div className='uitility_text' style={{fontSize:'0.5em',marginTop:'1em'}}>
                     <span className='utility_text_name'>Utility</span>
                  </div>
                  <div className='utility_btn' style={{display:'flex'}}>
                    <div className='cross_1'>
                       <i class="bi bi-plus"></i>
                    </div>
                    <div className='cross_2'>
                       <i class="bi bi-plus"></i>
                    </div>
                    <div className='check'>
                       <i class="bi bi-check"></i>
                    </div>
                 </div>
              </div>
              <div className='second_row_utility' style={{display:'flex',justifyContent:'space-between'}}>
                 <div className='left_btn'>
                     <div className='toggle_btn'  style={{marginRight:'0.5em'}}>
                      <button style={{background:'transparent',border:'none'}} onClick={(e)=>toggleSwitch(e)}>{!isToggle?<i class="bi bi-toggle-off"></i>:<i class="bi bi-toggle-on"></i>}</button>   
                    </div>
                 </div>
                 <div className='right_btn' style={{display:'flex'}}>
                       <div className='search_btn' style={{marginRight:'0.5em'}}>
                           <i class="bi bi-search"></i>
                       </div>
                       <div className='security_btn' style={{marginRight:'0.5em'}}>
                           <i class="bi bi-shield"></i>
                       </div>
                       <div className='star_btn' style={{marginRight:'0.5em'}}>
                       <i class="bi bi-star"></i>
                       </div>

                       <div className='search_btn_second'>
                       <i class="bi bi-search"></i>
                       </div> 

                 </div>
              </div>
            </div> 

           <div className='second_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
              <div className='second_row_project_management' style={{display:'flex',justifyContent:'space-between' }}>
                  <div className='second_row_project_text'>
                       <span className='project_text'>
                          Project Management Widget
                       </span>
                  </div>
           {/*       <div className='second_row_widgets'>
                      <span className='project_widget'>
                         Widgets
                      </span>
</div> */}

               
              </div> 
               <div className='second_row_project_icon' style={{display:'flex',justifyContent:'space-between',fontSize:'2em'}}>
                  {/* <div className='second_row_project_icon_file' onClick={()=>setShowTrelloPortal(true)}> */}
                  <Link to="/trello" className='second_row_project_icon_file'>
                     <i className="bi bi-file-earmark-richtext"></i>
                  </Link>
                  <Link to="/notes" className='second_row_project_icon_attach'>
                     <i className="bi bi-paperclip"></i>
                  </Link>  
                  <div className='second_row_project_icon_mic' onClick={(e)=>setModalOpen(e)}>
                     <i className="bi bi-mic"></i>
                  </div>  
                  <div className='second_row_project_icon_link'>
                    <i className="bi bi-link-45deg"></i>
                  </div>  
                  <div className='second_row_project_icon_location'>
                    <i class="bi bi-geo-alt"></i>
                  </div>  
                  <Link to="/video" className='second_row_project_icon_camera'>
                    <i class="bi bi-camera"></i>
                  </Link>  

               
               </div>
           </div>  

           <div className='third_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
               <div className='thord_row_text' style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='third_row_text_collaboration'>
                      <span className='collaboration_text'>Collaboration Widget</span>
                    </div>
              {/*      <div className='third_row_text_widget'>
                      <span className='widget_text'>Widget</span>
</div> */}
                    

               </div>
               <div className='third_row_icon' style={{display:'flex',justifyContent:'space-between',fontSize:'2em'}}>
               <Link to="/analytic" className='third_row_icon_mail'>
                 {/* <div className='third_row_icon_mail'> */}
                    <i className="bi bi-envelope"></i>
                 {/* </div> */}
                </Link>
                <Link to="/chat" className='third_row_icon_message'>
                 {/* <div className='third_row_icon_message'> */}
                    <i className="bi bi-chat-left-text"></i>
                 {/* </div> */}
                 </Link>
                 <div className='third_row_icon_share'>
                     <i className="bi bi-share"></i>
                 </div>

                 <div className='third_row_icon_calender'>
                     <i className="bi bi-calendar-month"></i>
                 </div>  
                
                 <div className='third_row_icon_call'>
                    <i className="bi bi-telephone"></i>
                 </div>  

                 <Link to="/screenShare" className='third_row_icon_tv'>
                    <i className="bi bi-tv"></i>
                 </Link>   

               </div>

           </div> 

          <div className='fourth_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
            <div className='fourth_row_text' style={{display:'flex',justifyContent:'space-between'}}>
              <div className='fourth_row_text_specification'>
                <span className='text_specification'>
                    Specification Widget
                 </span>
              
              </div>    
          {/*    <div className='fourth_row_text_widget'>
                <span className='text_widget'>
                    Widget
                 </span>
              
</div> */}    
              



            </div>  
           <div className='fourth_row_icon' style={{display:'flex',justifyContent:'space-between',fontSize:'2em'}}>
                 <div className='fourth_row_icon_booster'>
                     <i class="bi bi-arrow-repeat"></i>
                 </div>
                 <div className='fourth_row_icon_board'>
                   <i className="bi bi-clipboard"></i>
                 </div>
                 <div className='fourth_row_icon_projector'>
                   <i className="bi bi-cast"></i>
                 </div>
                 <div className='fourth_row_icon_file'>
                    <i className="bi bi-file"></i>
                 </div>
                 <div className='fourth_row_icon_book'>
                   <i className="bi bi-book"></i>
                 </div>
                 <div className='fourth_row_icon_headphone'>
                   <i className="bi bi-headphones"></i>
                 </div> 
            </div>
          </div>

          <div className='fifth_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
               <div className='fifth_row_text' style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='fifth_row_text_content_management'>
                         Content Management Widget
                    </div>
                  {/*  <div className='fifth_row_text_widget'>
                         Widget
</div> */}                      

               </div>
               <div className='fifth_row_icon' style={{display:'flex',justifyContent:'space-between',fontSize:'2em'}}>
                  <div className='fifth_row_icon_blog'>
                    <i className="bi bi-blockquote-left"></i>
                     
                  </div>

               </div>

           </div>

          <div className='sixth_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
              <div className='sixth_row_text' style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='fifth_row_text_content_management'>
                         User Pick
                    </div>
                </div>
            </div> 

          
          <div className='seventh_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#0047ab'}}>
              <div className='seventh_row_text' style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='seventh_row_text_content_management'>
                         Module Widget
                    </div>
                </div>
            </div>   



            </div>

        <div className='utility_canvas' style={{backgroundColor:'#A9A9A9',color:'#FFFFFF',marginTop:'9em'}}>
          <div className='canva_first_row' style={{marginTop:'2em',padding:'4px 10px',border:'1px solid blue',backgroundColor:'#A9A9A9'}}>
              <div className='canva_first_row_text' style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='canva_first_row_text_content_uitilityCanvas'>
                         Utility Canvas
                    </div>
                </div>
            </div> 
            <div className='canva_second_row' style={{padding:'4px 10px',border:'1px solid blue',display:'flex',backgroundColor:'#A9A9A9',color:'#FFFFFF'}}>
                   <div className='left_canvas_box' style={{flex:'1 1 0'}}>
                           <div className='left_canvas_box_one' style={{border:'1px solid red',display:'flex',alignItems:'center',justifyContent:'center'}}>Left Box One </div>
                           <div className='left_canvas_box_two'style={{border:'1px solid red',display:'flex',alignItems:'center',justifyContent:'center'}} >Left Box Two</div>
                           <div className='left_canvas_box_three'style={{border:'1px solid red',display:'flex',alignItems:'center',justifyContent:'center'}}>Left Box Three</div>

                   </div>
                  <div className='right_canvas_box' style={{flex:'1 1 0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                             File Uplaod
                  </div>
                </div>   
              </div>      
          </div>
          {isOpen && <Modal isopen={isOpen}/> }
         
        
    </div>
)
}
export default Platform;