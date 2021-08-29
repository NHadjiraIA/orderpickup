import React from 'react';
import '../styles/Footer.css'

export const Footer = () => {

    return (
     <div>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link type="text/css" rel="stylesheet" href="../styles/materialize.css" media="screen,projection" ></link>
      <link type="text/css" rel="stylesheet" href="../styles/body.css" media="screen,projection" ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
    </head>
    <header>
      <div className="navbar-header">     
         <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a className="waves-effect waves-light btn green" href= "/LoginUser">LogIn</a></li>
             <li><a className="waves-effect waves-light btn green" href="">Contact</a></li>
         </ul>
                  
         </div>
    </header>
    </div>
    );
  }
export default Footer;