import React from "react";
import './Analytic.css'
import Message from './Message/Message'
const Analytic =()=>{
 return (
        <div className="analytic-box" style={{display: 'flex',paddingLeft:'2em',paddingTop:'1.6em',backgroundColor:"#F4F7F9"}}>
           <div className="analytic-menu" style={{width:'23%',backgroundColor:'#FFFFFF',height:'100vh'}}>
                <div className="top_menu" style={{padding:'2em 0 1.6em 1em'}}>
                   <button style={{  width:'87%', height:'42px',borderRadius:'7px',backgroundColor:"#0095E8", color:"#FFFFFF",border:'none', marginLeft:'8px'}}>NEW MESSAGE</button>
                </div>
                <div className="icon_menu">
                    <div className="inbox-detail" style={{display:'flex',padding:'0.9em 0 1.2em 1.8em'}}>   
                        <div className="inbox">
                           <i className="bi bi-envelope" style={{fontSize:'1.2em'}}></i>
                           <span className="inbox-Icontext" style={{fontSize:'1em',marginLeft:'1.4em'}}>inbox</span>
                        </div>
                        <div className="inbox-text" style={{marginLeft:'5.8em'}}> 
                            <span className="text" style={{paddingTop:'0.4em'}}>1</span> 
                        </div>
                    </div>
             
                    <div className="marked-detail" style={{display:'flex',padding:'0.9em 0 1.2em 1.8em'}}>
                        <div className="marked"> 
                           <i className="bi bi-star" style={{fontSize:"1.2em"}}></i>
                           <span className="star-Icontext" style={{fontSize:'1em',marginLeft:'1.3em',position:'relative',top:'0.2em'}}>Marked</span>
                        </div>
                        <div className="marked_text" style={{marginLeft:'5em'}}>  
                          <span className="text" style={{paddingTop:'0.34em'}}>2</span>
                        </div>
                    </div>    
                 
                    <div className="draft-detail" style={{display:'flex',padding:'0.9em 0 1.2em 1.8em'}}>
                        <div className="draft">  
                           <i className="bi bi-arrow-clockwise" style={{fontSize:'1.2em'}} ></i>
                           <span className="draft-Icontext" style={{fontSize:'1em',marginLeft:'1.3em',position: 'relative',top: '0.04em'}}>Draft</span>
                        </div>
                        <div className="draft-text" style={{marginLeft:'6.1em'}}>    
                            <span className="text" style={{paddingTop:'0.34em'}}>3</span>
                        </div> 
                    </div>
                    <div className="sent-detail" style={{display:"flex",padding:'0.9em 0 1.2em 1.8em'}}>
                        <div className="send">
                           <span class="glyphicon glyphicon-send" style={{fontSize:'1.2em'}}></span>
                           <span className="send-Icontext" style={{fontSize:'1em',marginLeft:'1.4em',position:'relative', top: '-0.1em'}}>Sent</span>
                        </div>
                        <div className="send-text" style={{marginLeft:'6.2em'}}> 
                           <span className="text" style={{paddingTop:'0.34em'}}>4</span>
                        </div>
                    </div>     
                    <div className="trash-deatil" style={{display:'flex',padding:'0.9em 0 1.2em 1.8em'}}>
                        <div className="trash">
                           <i className="bi bi-trash" style={{fontSize:'1.2em'}}></i>
                           <span className="trash-Icontext" style={{fontSize:'1em',marginLeft:'1.1em'}}>Trash</span>
                        </div> 
                        <div className="trash-text" style={{marginLeft:'6.3em'}}>
                           <span className="text" style={{paddingTop:'0.34em'}}>5</span>
                        </div> 
                    </div>   
                </div>
           </div>
           <div className="analytic_message" style={{height:"100vh",paddingLeft:'2.2em',width:'100%',paddingTop:'2.3em',marginLeft:'2em',backgroundColor:'#FFFFFF',minWidth:'850px'}}>
                <div className="top-message" style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                   <div className="left-icon" style={{display:'flex'}}>
                     <div className="tick" style={{backgroundColor:"F4F7F9"}}>
                        <i class="bi bi-archive" style={{fontSize:'1.1em'}}></i>
                     </div>

                     <div className="option" style={{/*paddingLeft:'1em' */}}>
                        <i className="bi bi-menu-down"  style={{fontSize:'1.1em'}}></i> 
                    </div>
                     
                     <div className="loader"  style={{/*paddingLeft:'1em'*/}}>
                        <i className="bi bi-arrow-clockwise"  style={{fontSize:'1.1em'}}></i>
                        
                     </div>

                    <div className="mail"  style={{/*paddingLeft:'1em'*/}}>
                       <i className="bi bi-envelope-open"  style={{fontSize:'1.1em'}}></i>
                    </div>
                     
                    <div className="trash"  style={{/*paddingLeft:'1em'*/}}>
                       <i className="bi bi-trash" style={{fontSize:'1.1em'}}></i>  
                    </div> 

                    <div className="mark"  style={{/*paddingLeft:'1em',paddingTop:'0em'*/}}>
                       <i className="bi bi-star" style={{fontSize:"1.1em"}}></i>
                    </div>
                    
                    <div className="move"  style={{/*paddingLeft:'1em'*/}}>
                       <i class="bi bi-box-arrow-down"  style={{fontSize:"1.1em"}}></i>      
                     </div>
                    </div>

                   <div className="right-icon" style={{display:'flex',paddingRight:'3em'}}>
                          <div className="search">
                              <input type='search' placeholder="Search inbox"  style={{backgroundColor:'#F4F7F9'}}></input>
                          </div>
                           
                          <div className="sort">
                              <i className = "bi bi-filter"></i>      
                          </div> 
                             
                          <div className="settings">
                             <i className = "bi bi-sliders"></i>
                          </div>
                   </div>

                    
               </div>             
                <div className="small-box"></div>

      {/*          <div className="message-box" style={{ width:'100%',display:'flex', justifyContent:"space-around" }}>
                     <div className="tick" style={{backgroundColor:"F4F7F9"}}>
                        <i class="bi bi-archive" style={{fontSize:'1.1em'}}></i>
                     </div>

                     <div className="star" style={{backgroundColor:"F4F7F9"}}>
                        <i class="bi bi-archive" style={{fontSize:'1.1em'}}></i>
                     </div> 

                     <div className="mark_imp" style={{backgroundColor:"F4F7F9"}}>
                        <i class="bi bi-archive" style={{fontSize:'1.1em'}}></i>
                     </div>  

                     <div className="profile">
                         <div className="profile_pic"><i class="bi bi-person"></i></div>
                         <div className="profile_name">Nupur</div> 

                     </div>
                       
                     <div className="message">
                          <p> Hello world how are you doing, hope you are doing fine</p>
                     </div>  
                     
                     <div className="time">
                        12:30 PM
                     </div>
                    


 </div>   */}
             <Message></Message>
             <Message></Message>
             <Message></Message>

           </div>
        </div>
  )
}
export default Analytic;