import React from "react";
import '../Analytic/Analytic.css';
import './Chat.css';
const Chat = ()=>{
    
    return (
    <div className="analytic-box" style={{display: 'flex',paddingLeft:'2em',paddingTop:'1.6em',backgroundColor:"#F4F7F9"}}>
           <div className="analytic-menu" style={{width:'46%',backgroundColor:'#FFFFFF',height:'80vh',minWidth:'350px'}}>
                <div className="top_menu" style={{padding:'2em 0 1.6em 1em'}}>
                    <input placeholder="Search by username or email" type="text"></input>
                </div>
                <div className="icon_menu">
                    <div className="profile" style={{display:'flex',padding:'0.9em 0 1.2em 1.8em',justifyContent:'space-between',borderTop:'3px solid #F5F8FA',
    borderBottom:'3px solid #F5F8FA'}}>
                        <div className="profile_detail" style={{display:'flex'}}>   
                            <div className="profile_pic" style={{marginLeft:'1em'}}>
                                <i class="bi bi-person" style={{fontSize:'2em'}}></i>
                            </div>    
                        <div className="profile_name" style={{marginTop:'0.7em',marginLeft:'1em',borderTop:'3px solid #848484',borderBottom:'3px solid #848484'}}>ABC</div>
                    </div>
                        <div className="profile_time" style={{marginRight:'3em',marginTop:'1em'}}>
                           <span className="time">12:30</span>
                        </div>
                    </div> 
                       
                    
                </div>
           </div>
           <div className="analytic_message" style={{height:"80vh",paddingLeft:'2.2em',width:'100%',paddingTop:'2.3em',marginLeft:'2em',backgroundColor:'#FFFFFF'}}>
                <div className="top-message" style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                   <div className="left-icon">
                     <div className="name" style={{backgroundColor:"F4F7F9"}}>
                         <span className="profile_text" style={{fontSize:'1.3em'}}>Brian Cox</span>
                     </div>
                     <div className="active" style={{display:'flex',marginTop:'0.5em'}}> 
                         <div className="active_dot" style={{width:'10px',height:'10px',backgroundColor:'#50CD89',borderRadius:'50%'}}></div>
                          <div className="active_text" style={{marginTop:'-0.5em'}}><span className="active_text_write" style={{fontSize:'0.84em',marginLeft:'0.4em'}}>Active</span></div>
                     </div>
                     </div>

                    <div className="right-icon" style={{display:'flex',paddingRight:'3em'}}>
                          <div className="three_dot">
                            <i class="bi bi-three-dots"></i>
                          </div>
                    </div>
                </div>             
                <div className="small-box"></div>
                <div className="chat_message">
                    
                    <div className="chat_group">
                          <div className="chat_group_one">
                                <div className="profile_description" style={{display:'flex'}}>
                                   <div className="profile_description_pic"><i class="bi bi-person" style={{fontSize:'2em'}}></i></div>
                                   <div className="profile_description_name" style={{marginTop:'1em',marginLeft:'0.3em'}}><span className="description_name">Brian Cox</span></div>   
                                   <div className="profile_description_time" style={{marginTop:'1em',marginLeft:'0.9em',color:"#A7AFBE"}}><span className="description_time">2 mins</span></div>  
                                </div>  
                                <div className="chat_group_message" style={{backgroundColor:'#F8F5FF',width:'376px',height:'69px',padding:'10px',marginTop:'1em'}}>
                                 <p>Hello we are trying to tal to each other lets talk about anything</p>    
                                </div> 

                            </div>     
                            <div className="chat_group_one" style={{marginLeft:'25em',marginTop:'3em'}}>
                                <div className="profile_description" style={{display:'flex'}}>
                                   <div className="profile_description_pic"><i class="bi bi-person" style={{fontSize:'2em'}}></i></div>
                                   <div className="profile_description_name" style={{marginTop:'1em',marginLeft:'0.3em'}}><span className="description_name">Brian Cox</span></div>   
                                   <div className="profile_description_time" style={{marginTop:'1em',marginLeft:'0.9em',color:"#A7AFBE"}}><span className="description_time">2 mins</span></div>  
                                </div>  
                                <div className="chat_group_message" style={{backgroundColor:'#F8F5FF',width:'376px',height:'69px',padding:'10px',marginTop:'1em'}}>
                                 <p>Hello we are trying to tal to each other lets talk about anything</p>    
                                </div> 

                            </div>     
                                                        
 

                         {/*  <div className="chat_group_two">
                                <div className="profile_description">
                                   <div className="profile_description_pic"><i class="bi bi-person" style={{fontSize:'2em'}}></i></div>
                                   <div className="profile_description_name" style={{marginTop:'1em',marginLeft:'0.3em'}}><span className="description_name">Brian Cox</span></div>   
                                   <div className="profile_description_time" style={{marginTop:'1em',marginLeft:'0.9em',color:"#A7AFBE"}}><span className="description_time">2 mins</span></div>  
                                </div>  
                                <div className="chat_group_message" style={{backgroundColor:'#F8F5FF',width:'376px',height:'69px',padding:'10px',marginTop:'1em'}}>
                                 <p>Hello we are trying to tal to each other lets talk about anything</p>    
                                </div> 
    </div> */}  
                        
                   </div>    

                 <div className="small-box"></div>    
                
                <div className="message_area"> 
                      <div className="message_textarea">
                        <textarea>Please write message here</textarea>
                      </div>
                      
                      <div className="message_icon" style={{display:'flex',justifyContent:'space-between'}}>

                        <div className="file_icon" style={{marginTop:'1em'}}>    

                            <div className="attach">
                              <i class="bi bi-paperclip"></i>
                             </div>    
                         
                            <div className="upload" style={{marginLeft:'2.1em',marginTop:'-1.4em'}}>
                              <i class="bi bi-upload"></i>
                            </div>
                        </div>    
                            <div className="message-button" style={{marginTop:'1em'}}>
                              <button  style={{color:'#FFFFFF',padding: '6px',width:'64px',border:'none',borderRadius:'4px'}}>send</button>
                            </div>



                      </div> 


                </div>


                    
                </div> 
              



           </div>
        </div>
  )
} 
export default Chat; 