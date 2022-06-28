import React,{useState,useEffect} from "react";
import './Header.css';
import background from '../../images/nature.jpg'
import 
{BrowserRouter as Router,
    Switch,
    Route,
    NavLink} from "react-router-dom";
const Header = (props)=>{
   
  const [isFullscreen,setfullscreen] = useState(false);

const handlesidebar =()=>{
       console.log("this is handlesidebar from header.js")
       props.handleNav()
   }

  /* useEffect(() => {
       var element = document.getElementById("question");
    //  element.addEventListener('onkeydown',function(event){
      if (event.key === "Escape" && fullScreen===true ) {
         setfullscreen(false) 
         element.style.backgroundImage = ''; 
         element.style.backgroundSize  = ''
         element.style.fontSize        = ""; 
         element.style.textAlign       = ""; 
         element.style.justifyContent  = '';
         element.style.alignItems      = '';
         element.style.opacity         = "";
        }
      });
   
},); */

  const fullScreen=(e)=>{
     e.preventDefault();
     var element = document.getElementById("question");
     setfullscreen(true);
   // make the element go to full-screen mode
     element.requestFullscreen()
      .then(function() {
         // element has entered fullscreen mode successfully
           console.log("the screen will be covered whole screen")
          // setfullscreen(!isFullscreen);
           if(isFullscreen){
            element.style.backgroundImage = `url(${background})`
            element.style.backgroundSize  = 'cover'
            element.style.fontSize        = "xx-large"; 
            element.style.textAlign       = "center"; 
            element.style.justifyContent  = 'center';
            element.style.alignItems      = 'center';
            element.style.opacity         = "1.0";
          }
      })
      .catch(function(error) {
         // element could not enter fullscreen mode
           console.log("there is error in full screen")
      });
  }
  
  /*
  document.addEventListener('keydown', function(event){
   var element = document.getElementById("question");
	if(event.key === "Escape"){
	setfullscreen(false) 
   element.style.backgroundImage = ''; 
   element.style.backgroundSize  = ''
   element.style.fontSize        = ""; 
   element.style.textAlign       = ""; 
   element.style.justifyContent  = '';
   element.style.alignItems      = '';
   element.style.opacity         = "";
  }
}); */
  return(
         <nav>
              <div className="div-header">
                 <div className="logo">
              {/*   <div className="option-icon" style={{marginTop:"3.6em"}} onClick={handlesidebar}>
                 <i class="bi bi-list" style={{fontSize:'1.1em'}}></i>
  </div> */}       
                 <div className="text">
                   <NavLink to="/"><h1 style={{fontFamily:'bold',color:"white"}}>LOGO </h1></NavLink>
                 </div>
                </div> 
                     
                 <div className="platform_title" style={{color:'#FFFFFF'}}>
                      <h1 style={{color:"#FFFFFF"}}>Platform Title </h1> 
                  </div>    


                 <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

                 <div className="presentation_icon"><button style={{background:'transparent',border:'none'}}  onClick={(e)=>fullScreen(e)}><i class="bi bi-easel" style={{fontSize:"1.1em",padding:'10px 15px',color:'#ffff'}}></i></button></div>  
                 <div className="search_icon"><i class="bi bi-search" style={{fontSize:"1.1em",padding:'10px 15px',color:'#ffff'}}></i></div>
                 <div className="input_field"><input  placeholder="search" style={{padding:'0px 15px',color:'#ffff'}}/> </div>
                 <div className="bell_icon"><i class="bi bi-bell" style={{fontSize:"1.1em",padding:"10px 15px"}}></i></div>
                 <div className="mail_box"><i class="bi bi-envelope" style={{fontSize:"1.1em",padding:"10px 15px"}}></i></div>
                 <div className="profile_icon"><i class="bi bi-person-circle" style={{fontSize:"1.1em",padding:"10px 15px"}} ></i></div>       
              </div>

               </div>

          </nav>
       
)
}
export default Header;