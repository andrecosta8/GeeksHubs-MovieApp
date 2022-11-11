import React from 'react'

import {useNavigate} from 'react-router-dom';

import "./Header.css";

import logo from '../../images/logo.svg'

const Header = () => {
    let navigate = useNavigate();
  return (
     <div className="headerDesign">
            <div className="leftside">
            <img className='logo' src={logo} alt= "logo"></img>
            <div className="appName">The Movie Database</div>
            </div>
            <div className="rightside">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},500)}>Popular Movies</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Premium Search</div>
            </div>
    </div>
  )
}

export default Header