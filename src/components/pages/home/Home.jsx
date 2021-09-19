import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../../assets/css/css.css'
import Logo from '../../assets/img/logo-ALTA@2x.png'
import Acc from '../../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import { Link } from 'react-router-dom';
import useDate from './useDate';
import useClock from './useClock.js'



function Home() {


  return (
    <div className="App">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"></svg>
            <img src={Logo} alt="logo" width="100.75px" height="50px"/>
        </a>
        <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link act">HOME</a></li>
            <li className="nav-item"><a href="#" className="nav-link item">ABOUT</a></li>
            <li className="nav-item"><a href="#" className="nav-link item">EXPERIENCE</a></li>
            <li className="nav-item"><Link to="/news" className="nav-link item-last">NEWS</Link></li>
            <li className="nav-item"><Link to="/contact_us" className="nav-link item-last">CONTACT</Link></li>
        </ul>
      </header>
      <div className="bg-image backg" id="content">
        <div className="container-fluid">
          
            <div className="row">
                <div className="col-lg-2">
                <useDate />
                </div>
                <div className="col-lg-3 col-md-2">
                    <img src={Acc} alt="" className="img-rounded"/>
                </div>
                <div className="col-lg-5 col-md-2">
                    <p className="text hi-text">Hi, my name is </p>
                    <p className="text name">Anne Sullivan</p>
                    <p className="text desc">I build things for the web</p>
                    <a className="btn btn-sub" href="#" role="button">Get in touch</a>
                </div>
                <div className="col-lg-1">

                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
