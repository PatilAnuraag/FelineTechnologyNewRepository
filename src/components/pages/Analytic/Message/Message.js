import React from "react";
import '../Analytic.css';
import Icon from '../../../../images/icon.png' 
const Message=()=>{
return(
    <div className="message-box" style={{ width:'100%',display:'flex', justifyContent:"space-around",borderTop:'2px solid #F5F8FA',borderBottom:'2px solid #F5F8FA',padding:'2px 0 2px 0'}}>
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
         <div className="profile_pic">{/*<Icon></Icon> */}</div>
         <div className="profile_name">Brian Cox</div> 
      </div>
      
      <div className="message">
         <p> Hello world how are you doing, hope you are doing fine</p>
      </div>  
    
      <div className="time">
         12:30 PM
      </div>
   </div>   
)
}

export default Message;