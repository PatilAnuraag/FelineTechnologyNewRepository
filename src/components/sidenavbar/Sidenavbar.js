import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Sidenavbar.css";
const Navbar = ({ isOpen }) => {
  /*const handleMouseEnter=(e)=>{
    console.log("hello this is on mouse enter")
} */

  const [background1, setBackground1] = useState("");
  const [background2, setBackground2] = useState("");
  const [background3, setBackground3] = useState("");
  const [background4, setBackground4] = useState("");
  const [background5, setBackground5] = useState("");
  const [background6, setBackground6] = useState("");
  const [background7, setBackground7] = useState("");

  const [isToggle, setToggle] = useState(false);

  const toggleSwitchNav = () => {
    //e.preventdefault();
    setToggle(!isToggle);
    console.log("this toggle from sidenav");
  };

  /* handle move */

  const handleMoveOne = (e) => {
    setBackground1("#318Ce7");
    console.log("this is from analytic icon");
  };
  const handleMoveTwo = (e) => {
    setBackground2("#318Ce7");
    //console.log(e.target);
  };
  const handleMoveThree = (e) => {
    setBackground3("#318Ce7");
    //console.log(e.target);
  };
  const handleMoveFour = (e) => {
    setBackground4("#318Ce7");
    //console.log(e.target);
  };
  const handleMoveFive = (e) => {
    setBackground5("#318Ce7");
    //console.log(e.target);
  };

  const handleMoveSix = (e) => {
    setBackground6("#318Ce7");
    //console.log(e.target);
  };
  const handleMoveSeven = (e) => {
    setBackground7("#318Ce7");
    //console.log(e.target);
  };
  /* handle move */

  /* handle mouse out */
  const handleMouseOutOne = (e) => {
    setBackground1("");
  };
  const handleMouseOutTwo = (e) => {
    setBackground2("");
  };
  const handleMouseOutThree = (e) => {
    setBackground3("");
  };
  const handleMouseOutFour = (e) => {
    setBackground4("");
  };
  const handleMouseOutFive = (e) => {
    setBackground5("");
  };
  const handleMouseOutSix = (e) => {
    setBackground6("");
  };
  const handleMouseOutSeven = (e) => {
    setBackground7("");
  };

  /* handle mouse out */

  /* handle click */
  const handleClickOne = (e) => {
    setBackground1("#318Ce7");
  };
  const handleClickTwo = (e) => {
    setBackground2("#318Ce7");
  };
  const handleClickThree = (e) => {
    setBackground3("#318Ce7");
  };
  const handleClickFour = (e) => {
    setBackground4("#318Ce7");
  };
  const handleClickFive = (e) => {
    setBackground5("#318Ce7");
  };
  const handleClickSix = (e) => {
    setBackground5("#318Ce7");
  };
  const handleClickSeven = (e) => {
    setBackground5("#318Ce7");
  };
  /* handle click */
  if (!isToggle) {
     return (
          <Fragment>
            <div className="navbar-icon">
              <div className="navbar-toggle-icon" style={{ padding: "0em 1.9em" }}>
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={toggleSwitchNav}
                >
                  {!isToggle ? (
                    <i className="bi bi-toggle-off" style={{ fontSize: "1.1em" }}></i>
                  ) : (
                    <i className="bi bi-toggle-on" style={{ fontSize: "1.1em" }}></i>
                  )}
                </button>
              </div>
              <div
                className="catalogue"
                style={{
                  marginTop: "2.1em",
                  fontSize: "0.8em",
                  padding: "0px 1em 0 0.8em",
                }}
              >
                <span className="catalogue_text">Catalogue</span>
              </div>
              <div className="navbar_top">
                <NavLink to="/" className="analytic-nav">
                  <div
                    className="anlytic_icon"
                    style={{
                      padding: "8px 1.1em 0 1.7em",
                      fontSize: "1.1em",
                      position: "relative",
                      top: "0.7em",
                      backgroundColor: `${background1}`,
                    }}
                    oMouseMove={handleMoveOne}
                    onMouseOut={handleMouseOutOne}
                    onClick={handleClickOne}
                  >
                    <i className="bi bi-speedometer2"></i>
                  </div>
                </NavLink>
              </div>
              <div className="navbar_bottom">
                <div
                  className="graph_up"
                  style={{
                    padding: "8px 1.9em 0 1.9em",
                    marginTop: "30px",
                    backgroundColor: `${background2}`,
                  }}
                  onMouseMove={handleMoveTwo}
                  onMouseOut={handleMouseOutTwo}
                  onClick={handleClickTwo}
                >
                  <i className="bi bi-graph-up" style={{ fontSize: "1.1em" }}></i>
                </div>
                <div
                  className="users"
                  style={{
                    padding: "8px 1.9em 0 1.9em",
                    marginTop: "30px",
                    backgroundColor: `${background3}`,
                  }}
                  onMouseMove={handleMoveThree}
                  onMouseOut={handleMouseOutThree}
                  onClick={handleClickThree}
                >
                  <i className="bi bi-people" style={{ fontSize: "1.1em" }}></i>
                </div>
                <div
                  className="graph_down"
                  style={{
                    padding: "8px 1.9em 0 1.9em",
                    marginTop: "30px",
                    backgroundColor: `${background4}`,
                  }}
                  onMouseMove={handleMoveFour}
                  onMouseOut={handleMouseOutFour}
                  onClick={handleClickFour}
                >
                  <i className="bi-graph-down" style={{ fontSize: "1.1em" }}></i>
                </div>
      
                <div
                  className="my_zone"
                  style={{
                    marginTop: "2.1em",
                    fontSize: "0.8em",
                    padding: "0 0.6em 0 0.89em",
                  }}
                >
                  <span className="my_zone_text">My Zone</span>
                </div>
      
                <div
                  className="flower"
                  style={{
                    padding: "8px 1.9em 0 1.9em",
                    marginTop: "20px",
                    backgroundColor: `${background5}`,
                  }}
                  onMouseMove={handleMoveFive}
                  onMouseOut={handleMouseOutFive}
                  onClick={handleClickFive}
                >
                  <i className="bi bi-gear" style={{ fontSize: "1.1em" }}></i>
                </div>
                <div
                  className="list-task"
                  style={{
                    padding: "8px 1.9em  0 1.9em",
                    marginTop: "30px",
                    backgroundColor: `${background6}`,
                  }}
                  onMouseMove={handleMoveSix}
                  onMouseOut={handleMouseOutSix}
                  onClick={handleClickSix}
                >
                  <i className="bi bi-list-task"></i>
                </div>
                <div
                  className="skype"
                  style={{
                    padding: "8px 1.9em 0 1.9em",
                    marginTop: "30px",
                    backgroundColor: `${background7}`,
                  }}
                  onMouseMove={handleMoveSeven}
                  onMouseOut={handleMouseOutSeven}
                  onClick={handleClickSeven}
                >
                  <i className="bi bi-skype"></i>
                </div>
              </div>
            </div>
            {/*             <div className='navbar-extend' style={{minWidth:'200px'}} >
                          <div className='navbar_top'>
                             <NavLink to="/analytic" className="analytic-nav">
                               <div className = 'anlytic_icon' style={{padding:'8px 18px',fontSize:'1em', backgroundColor:`${background1}`}}  oMouseMove={handleMoveOne} onMouseOut={handleMouseOutOne} onClick={handleClickOne}>
                               <span className='dashboard'>Dashboard</span>
                               </div>
                            </NavLink>
                          </div>
                          <div className = 'navbar_bottom'>                 
                              <div className = 'graph_up'  style  = {{ padding:'8px 18px 12px 18px',position:'relative',top:'4em',backgroundColor:`${background2}` }} onMouseMove={handleMoveTwo} onMouseOut={handleMouseOutTwo} onClick={handleClickTwo}>
                                  <span className='analytics'  style={{fontSize:'1em'}}>Analytics</span>
                              </div>
                              <div className = 'users'  style  = {{ padding:'8px 18px 12px 18px' ,position:'relative',top:'7.6em',backgroundColor:`${background3}`}} onMouseMove={handleMoveThree} onMouseOut={handleMouseOutThree} onClick={handleClickThree}>
                                  <span className='users'   style={{fontSize:'1em'}} >Users</span>  
                              </div> 
                              <div className = 'graph_down'      style  = {{ padding:'11px 18px 12px 18px',position: 'relative',top:'11em',backgroundColor:`${background4}`}}  onMouseMove={handleMoveFour} onMouseOut={handleMouseOutFour} onClick={handleClickFour}>
                                  <span className='graph_down' style={{fontSize:'1em'}} >Graph down</span>
                              </div>
                              <div className = 'flower'          style  = {{ padding:'8px 18px 12px 18px',position:'relative',top:'14.8em',backgroundColor:`${background5}`}} onMouseMove={handleMoveFive} onMouseOut={handleMouseOutFive} onClick={handleClickFive}>
                                  <span className='gear' style={{fontSize:"1em"}} >Engine</span> 
                              </div>   
                          </div>
      </div> */}
          </Fragment>
        );
  }else {
       return (
            <div style={{width: "0"}} onClick={toggleSwitchNav}>
                 <div style={{display: "absolute", left: "0", top: "0", background: "none", color: "white", }}>Expand</div>
            </div>
       )
  }

  
};
export default Navbar;
