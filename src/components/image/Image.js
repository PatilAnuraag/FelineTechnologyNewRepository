import React,{useState,Fragment} from 'react';
import { Link } from "react-router-dom";
import nature_1 from '../pages/Platform/images/nature_1.jpeg'
import nature_2 from '../pages/Platform/images/nature_2.jpeg'
import nature_3 from '../pages/Platform/images/nature_3.jpeg'
import nature_4 from '../pages/Platform/images/nature_4.jpeg'


const Image = ()=>{
return (
   <Fragment style={{display: "flex"}}>
    <Link to="#"><div className="box option1"><img src={nature_1} alt="nature_1" ></img></div></Link> 
    <Link to="#"><div className="box option2"><img src={nature_2} alt="nature_1" ></img></div></Link> 
    <Link to="#"><div className="box option3"><img src={nature_3} alt="nature_1" ></img></div></Link> 
    <Link to="#"><div className="box option4"><img src={nature_4} alt="nature_1" ></img></div></Link> 
   </Fragment>
  )
}
export default Image; 